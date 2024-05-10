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
  return json.data;
}

export async function getTour(id) {
  const res = await fetch(`${url}/tours/${id}`);
  if (!res.ok) {
    throw Error('Could not find the tour');
  }
  const json = await res.json();
  if (!json.data) {
    throw Error('Response JSON is missing the data property');
  }
  return json.data;
}
