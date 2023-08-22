import { redirect } from 'react-router-dom';
import { removeLocalStorageItems } from '../util/auth';

export const action = () => {
  removeLocalStorageItems();
  return redirect('/');
};
