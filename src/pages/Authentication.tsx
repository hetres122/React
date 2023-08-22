import React from 'react';
import LoginForm from '../components/LoginForm';
import Request, { redirect } from 'react-router-dom';
import { setLocalStorageItems } from '../util/auth';
import { API_LOGIN } from '../environment';

const AuthenticationPage = () => {
  return <LoginForm />;
};

export default AuthenticationPage;

export const action = async ({ request }: { request: Request }) => {
  const data = await request.formData();

  const authData = {
    username: data.get('username'),
    password: data.get('password'),
  };

  const response = await fetch(API_LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 401) {
    return response;
  }
  if (response.ok) {
    const data = await response.json();
    const token = data.token;
    const email = authData.username;
    setLocalStorageItems(token, email);

    return redirect('/profil/publiczny');
  } else {
    throw new Error('Request failed with status ' + response.status);
  }
};
