import PublicProfile from '../components/PublicProfile';
import { GuideData } from '../interfaces/Interface';
import { json, useLoaderData } from 'react-router-dom';
import { API_PROFIL } from '../environment';
import { getAuthLocalStorageItems } from '../util/auth';
import ProfilContainer from '../components/UI/ProfilContainer';

const PublicProfilePage = () => {
  const data: GuideData = useLoaderData() as GuideData;
  return (
    <ProfilContainer>
      <PublicProfile userData={data} />
    </ProfilContainer>
  );
};

export default PublicProfilePage;

export const profilLoader = async () => {
  const { token } = getAuthLocalStorageItems();

  const response = await fetch(API_PROFIL, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
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
