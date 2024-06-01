// export const url = 'https://tour-manager-chi.vercel.app/api';
export const url = 'http://localhost:3000/api';

export async function getTours() {
  const res = await fetch(`${url}/tours`);

  if (!res.ok) {
    throw Error('No data Found, Please Try Again!');
  }

  const json = await res.json();
  if (!json.data) {
    throw Error('Response JSON is missing the data property');
  }
  // console.log(json.data.doc);
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
  console.log(data);
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
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(`${url}/booking/checkout-session/${id}`, {
      // const response = await fetch(`${url}/booking/sessionTest/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create checkout session');
    }

    const data = await response.json();
    console.log('Checkout session data:', data);

    const sessionId = data.session.id;
    const result = await stripe.redirectToCheckout({ sessionId });

    if (result.error) {
      console.error('Error redirecting to checkout:', result.error.message);
    }
  } catch (err) {
    console.error('Error in temp payment function:', err);
  }
}

export async function getBookedTours() {
  const token = localStorage.getItem('token');
  const res = await fetch(`${url}/booking/my-tours`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  const json = await res.json();
  if (!json.data) {
    throw Error('Response JSON is missing the data property');
  }
  return json.data;
}
