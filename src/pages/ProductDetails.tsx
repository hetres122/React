import ProductDetails from '../components/ProductDetails';
import ProfilContainer from '../components/UI/ProfilContainer';
import { json, Params, useRouteLoaderData } from 'react-router-dom';
import { getAuthLocalStorageItems } from '../util/auth';
import { API_DETAILS } from '../environment';
import { CodeResponse } from '../interfaces/code-response.enum';
import { Item } from '../interfaces/Interface';
import Header from '../components/UI/Header';
import React from 'react';
import MapComponents from '../components/MapComponents';
import { LatLngTuple } from 'leaflet';
import ItemContainer from '../components/UI/ItemContainer';
import FullscreenImage from '../components/UI/FullscreenImage';
import DetailsContainer from '../components/UI/DetailsContainer';

const ProductDetailsPage = () => {
  const data: Item = useRouteLoaderData('point-detail') as Item;
  const { title, lat, lon, media, description } = data.hits?.[0];
  const urlImage = media[0]?.url ?? '';
  const urlSound = media[1]?.url ?? '';

  const center: LatLngTuple = [lat, lon];
  return (
    <ProfilContainer>
      <Header name={title} />
      <MapComponents center={center} title={title} edit={false} />
      <DetailsContainer>
        <ItemContainer>
          <FullscreenImage src={urlImage} alt={title} />
        </ItemContainer>
        <ItemContainer>
          <ProductDetails urlSound={urlSound} description={description} />
        </ItemContainer>
      </DetailsContainer>
    </ProfilContainer>
  );
};

export default ProductDetailsPage;

export const louder = async ({ params }: { params: Params }) => {
  const { token, email } = getAuthLocalStorageItems();

  const user = params.punkty;
  const id = params.punkt;

  const response = await fetch(`${API_DETAILS}${user}/${id}.json`, {
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

  if (response.status === CodeResponse.UNAUTHORIZED) {
    throw json(
      { message: 'Nie można autoryzować połaczenia' },
      { status: CodeResponse.UNAUTHORIZED },
    );
  }
  if (!response.ok) {
    throw json(
      { message: 'Nie można załadować punktów' },
      { status: CodeResponse.INTERNAL_SERVER_ERROR },
    );
  } else {
    return response;
  }
};
