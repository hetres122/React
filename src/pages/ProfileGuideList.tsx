import { Item } from '../interfaces/Interface';
import { json, useRouteLoaderData } from 'react-router-dom';

import ProfileGuideList from '../components/ProfileGuideList';
import { API_HITS } from '../environment';
import { getAuthLocalStorageItems } from '../util/auth';
import Header from '../components/UI/Header';
import ProfilContainer from '../components/UI/ProfilContainer';
import PointListContainer from '../components/UI/PointListContainer';

const ProgileGuideListPage = () => {
  const data: Item = useRouteLoaderData('guide-list') as Item;
  const guide: Item[] = data.hits.filter(obiekt => obiekt.typeplace === 100);
  return (
    <ProfilContainer>
      <Header name="Przewodnik" />
      <PointListContainer>
        <ProfileGuideList pointList={guide} />
      </PointListContainer>
    </ProfilContainer>
  );
};
export default ProgileGuideListPage;

export const productLoader = async () => {
  const { token, email } = getAuthLocalStorageItems();

  const response = await fetch(API_HITS, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify({
      gmail_account: email,
      oauth_token: '8262d0ed063dba0cb3e4630d8dcaa4b1',
      simple_token: 'fSU8dhPA5ynSP6a',
      termsversion: 'v001',
      language: 'PL',
      locale: 'POL',
    }),
  });

  if (response.status === 401) {
    throw json(
      { message: 'Nie można autoryzować połaczenia' },
      { status: 401 },
    );
  }
  if (!response.ok) {
    throw json({ message: 'Nie można załadować punktów' }, { status: 500 });
  } else {
    return response;
  }
};
