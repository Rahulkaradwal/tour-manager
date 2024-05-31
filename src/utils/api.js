// export const url = 'https://tour-manager-chi.vercel.app/api';
export const url = 'http://localhost:3000/api';

// http://http//localhost:5137/?tours=5c88fa8cf4afda39709c2955&user=66523dba9f51e17a7675a87e&price=197

export async function getTours() {
  const res = await fetch(`${url}/tours`);

  if (!res.ok) {
    throw Error('No data Found, Please Try Again!');
  }

  const json = await res.json();
  if (!json.data) {
    throw Error('Response JSON is missing the data property');
  }
  return json.data.doc;
}

export async function getData(id, data) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${url}/${data}/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw Error('Could not find the tour');
  }
  const json = await res.json();
  if (!json.data) {
    throw Error('Response JSON is missing the data property');
  }
  return json.data;
}

export async function createUser(data) {
  const res = await fetch(`${url}/users/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw Error('Cound not create new User');
  }

  const resData = await res.json();
  const token = resData.token;

  localStorage.setItem('token', token);
}

export async function getMe() {
  const token = localStorage.getItem('token');
  const res = await fetch(`${url}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw Error('Could not find the User');
  }
  const json = await res.json();
  if (!json.data) {
    throw Error('Response JSON is missing the data property');
  }
  return json.data;
}

export async function saveSettings(data) {
  const token = localStorage.getItem('token');

  try {
    const res = await fetch(`${url}/users/updateMe`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        // 'Content-Type': 'application/json',
      },
      body: data,
    });
    const json = await res.json();
    if (!json.data) {
      throw Error('Response JSON is missing the data property');
    }
    return json;
  } catch (err) {
    console.log(err);
  }

  // if (!res.ok) {
  //   throw Error('Could not find the User');
  // }

  // console.log(json);
}
export async function changePassword(data) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${url}/users/updateMyPassword`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw Error('Something Went Wrong');
  }
  const json = await res.json();
  if (!json.data) {
    throw Error('Response JSON is missing the data property');
  }

  return json;
}

export async function payment(id, stripe) {
  console.log(id, stripe);
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${url}/booking/checkout-session/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    const sessionId = data.session.id;

    const result = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });

    if (result.error) {
      console.error('Error redirecting to checkout:', result.error.message);
    }
  } catch (err) {
    console.error('Error fetching checkout session:', err);
  }
}
