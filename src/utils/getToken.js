import { redirect } from 'react-router-dom';

export function getToken() {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }

  return token;
}

export function logOut() {
  localStorage.removeItem('token');
  return redirect('/');
}
