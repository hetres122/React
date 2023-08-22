import Point from './UI/Point';
import { ComponentItem, Item } from '../interfaces/Interface';
import React from 'react';
import PointContainer from './UI/PointContainer';

const ProfileGuideList: React.FC<ComponentItem> = ({ pointList }) => {
  return (
    <>
      {pointList &&
        pointList.map((item: Item) => (
          <PointContainer id={item.room_id}>
            <Point
              src={item.media?.[0]?.urlpicture}
              title={item.title}
              to={item.bucketname.toString()}
            />
          </PointContainer>
        ))}
    </>
  );
};

export default ProfileGuideList;
