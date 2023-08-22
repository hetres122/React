import { Item } from '../interfaces/Interface';
import Request, {
  Params,
  redirect,
  useRouteLoaderData,
} from 'react-router-dom';

import ProductEditForm from '../components/ProductEditForm';
import { API_EDITPOINT } from '../environment';
import { getAuthLocalStorageItems } from '../util/auth';
import ProfilContainer from '../components/UI/ProfilContainer';
import Header from '../components/UI/Header';
import MapComponents from '../components/MapComponents';
import React, { useState } from 'react';
import { LatLngTuple } from 'leaflet';
import ItemContainer from '../components/UI/ItemContainer';
import FullscreenImage from '../components/UI/FullscreenImage';
import DetailsContainer from '../components/UI/DetailsContainer';
const ProfilePointEditPage = () => {
  const data: Item = useRouteLoaderData('point-detail') as Item;
  const { title, lat, lon, media, description } = data.hits?.[0];
  const urlImage = media[0]?.url ?? '';
  const [updatedCoordinates, setUpdatedCoordinates] = useState<LatLngTuple>([
    lat,
    lon,
  ]);
  return (
    <ProfilContainer>
      <Header name={title} />
      <MapComponents
        center={updatedCoordinates}
        title={title}
        edit={true}
        onUpdateCoordinates={setUpdatedCoordinates}
      />
      <DetailsContainer>
        <ItemContainer>
          <FullscreenImage src={urlImage} alt={title} />
        </ItemContainer>
        <ItemContainer>
          <ProductEditForm
            description={description}
            title={title}
            position={updatedCoordinates}
          />
        </ItemContainer>
      </DetailsContainer>
    </ProfilContainer>
  );
};

export default ProfilePointEditPage;

export const editPointAction = async ({
  request,
  params,
}: {
  request: Request;
  params: Params;
}) => {
  const { token } = getAuthLocalStorageItems();
  const formData = await request.formData();

  const user = params.punkty;
  const id = params.punkt;
  const authData = {
    coordinateLAT: formData.get('coordinateLAT'),
    coordinateLONG: formData.get('coordinateLONG'),
    description: formData.get('description'),
    name: formData.get('name'),
  };

  const response = await fetch(`${API_EDITPOINT}${user}/${id}.json`, {
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
  if (response.status === 500) {
    console.log(response);
    return response;
  }

  if (response.ok) {
    return redirect(`/profil/przewodniki/${user}`);
  } else {
    throw new Error('Request failed with status ' + response.status);
  }
};
