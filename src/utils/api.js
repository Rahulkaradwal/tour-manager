const url = 'https://tour-manager-chi.vercel.app/api';

export async function getTours() {
  const res = await fetch(`${url}/tours`);

  if (!res.ok) {
    throw Error(`Could not find the data: ${res.status} - ${res.statusText}`);
  }

  const json = await res.json();
  if (!json.data) {
    throw Error('Response JSON is missing the data property');
  }
  return json.data.doc;
}

export async function getTour(id) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${url}/tours/${id}`, {
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
