import { redirect } from 'react-router-dom';

export function getToken() {
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');

  if (!token) {
    return null;
  }

  return { token, name, email };
}

export function logOut() {
  localStorage.removeItem('token');
  return redirect('/');
}

export function tokenLoader() {
  return getToken();
}
