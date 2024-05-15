import { redirect } from 'react-router-dom';

export function getToken() {
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const tokenDuration = getTokenDuration();

  if (!token) {
    return null;
  }
  if (tokenDuration < 0) {
    return 'Expired';
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

export function checkAuthLoader() {
  const token = getToken();
  if (!token) {
    return redirect('/login');
  }
  return null;
}

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}
