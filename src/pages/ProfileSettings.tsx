import { GuideData } from '../interfaces/Interface';
import Request, { redirect, useLoaderData } from 'react-router-dom';

import ProfileSettings from '../components/ProfileSettings';
import { API_PROFIL, API_UPLOAD_PROFILE_PICTURE } from '../environment';
import { getAuthLocalStorageItems } from '../util/auth';
import ProfilContainer from '../components/UI/ProfilContainer';
import Header from '../components/UI/Header';
import React from 'react';
import ProfileEditImage from '../components/ProfileEditImage';

const ProfileSettingsPage = () => {
  const data: GuideData = useLoaderData() as GuideData;
  return (
    <ProfilContainer>
      <Header name="Ustawienia Profilu" />
      <ProfileEditImage />
      <ProfileSettings userData={data} />
    </ProfilContainer>
  );
};
export default ProfileSettingsPage;

export const editProfilAction = async ({ request }: { request: Request }) => {
  const { token } = getAuthLocalStorageItems();
  const formData = await request.formData();
  const file = formData.get('file');
  const authData = {
    formalName: formData.get('formalName'),
    formalSurname: formData.get('formalSurname'),
    description: formData.get('description'),
    phone1: formData.get('phone1'),
    phone2: formData.get('phone2'),
    publicName: formData.get('publicName'),
    facebook: formData.get('facebook'),
    instagram: formData.get('instagram'),
    youtube: formData.get('youtube'),
    publicEmail: formData.get('publicEmail'),
  };

  if (request.method === 'PUT') {
    const response = await fetch(API_PROFIL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(authData),
    });

    if (response.status === 401) {
      return response;
    }

    if (response.ok) {
      return redirect('/profil/publiczny');
    } else {
      throw new Error('Request failed with status ' + response.status);
    }
  } else if (request.method === 'POST') {
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    const response = await fetch(API_UPLOAD_PROFILE_PICTURE, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    });

    if (response.ok) {
      return redirect('/profil/publiczny');
    } else {
      throw new Error('Request failed with status ' + response.status);
    }
  }
};
