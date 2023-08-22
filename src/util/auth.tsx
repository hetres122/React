import { redirect } from 'react-router-dom';

export const getAuthLocalStorageItems = () => {
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');

  return { token, email };
};

export const setLocalStorageItems = (token: string, email: any) => {
  const expirationTime = 61 * 24 * 60 * 60 * 1000; // Czas wygaśnięcia tokenu w milisekundach (61 dni)
  localStorage.setItem('token', token);
  localStorage.setItem('email', email);

  setTimeout(() => {
    removeLocalStorageItems();
  }, expirationTime);
};

export const removeLocalStorageItems = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('email');
};

export const loader = () => getAuthLocalStorageItems().token;

export const checkAuthLoader = () => {
  const data = getAuthLocalStorageItems();
  if (!data.token) {
    return redirect('/logowanie');
  }
  return null;
};
