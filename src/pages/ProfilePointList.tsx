import { Item } from '../interfaces/Interface';
import { useParams, useRouteLoaderData } from 'react-router-dom';
import PointList from '../components/PointList';
import ProfilContainer from '../components/UI/ProfilContainer';
import PointListContainer from '../components/UI/PointListContainer';
import Header from '../components/UI/Header';
import React from 'react';

const ProfilePointListPage = () => {
  const data: Item = useRouteLoaderData('guide-list') as Item;
  const params: any = useParams();
  const paramsId = params.punkty;

  const guide: Item[] = data.hits.filter(
    obiekt => obiekt.bucketname === paramsId && obiekt.typeplace !== 100,
  );
  return (
    <ProfilContainer>
      <Header name="Punkty" />
      <PointListContainer>
        <PointList pointList={guide} />
      </PointListContainer>
    </ProfilContainer>
  );
};
export default ProfilePointListPage;
