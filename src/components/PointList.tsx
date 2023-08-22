import { ComponentItem, Item } from '../interfaces/Interface';
import { Link } from 'react-router-dom';
import Point from './UI/Point';
import React from 'react';

import { FiEdit, FiX } from 'react-icons/fi';
import PointContainer from './UI/PointContainer';
const PointList: React.FC<ComponentItem> = ({ pointList }) => {
  return (
    <>
      {pointList &&
        pointList.map((item: Item) => (
          <PointContainer id={item.room_id}>
            <div className="flex items-center justify-end gap-3">
              <Link to={`${item.json.toString().slice(0, -5)}/edit`}>
                <FiEdit className="h-6 w-6 text-gray-700 transition-colors hover:text-primary-500" />
                <span className="sr-only">Edytuj punkt</span>
              </Link>
              <Link to={`${item.json.toString().slice(0, -5)}/edit`}>
                <FiX className="h-6 w-6 text-gray-700 transition-colors hover:text-primary-500" />
                <span className="sr-only">Usuń punkt</span>
              </Link>
            </div>
            <Point
              src={item.media?.[0]?.urlpicture}
              title={item.title}
              to={item.json.toString().slice(0, -5)}
            />
          </PointContainer>
        ))}
    </>
  );
};

export default PointList;
