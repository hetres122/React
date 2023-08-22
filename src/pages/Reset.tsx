import ResetPassword from '../components/ResetPassword';
import Request from 'react-router-dom';
import { API_RESET } from '../environment';

import { ResponseReset } from '../interfaces/Interface';

const ResetPage = () => {
  return <ResetPassword />;
};

export default ResetPage;

export const action = async ({ request }: { request: Request }) => {
  const data = await request.formData();
  const username = data.get('username');

  const response = await fetch(API_RESET, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      aaa: [{}, { value: username }],
    }),
  });
  if (response.status === 401) {
    return response;
  }

  if (response.ok) {
    const data: ResponseReset = await response.json();
    return data;
  } else {
    throw new Error('Request failed with status ' + response.status);
  }
};
