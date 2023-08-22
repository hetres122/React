import React from 'react';
import { PointContainerProps } from '../../interfaces/Interface';

const PointContainer: React.FC<PointContainerProps> = ({ children, id }) => {
  return (
    <div
      key={id}
      className="bottom-1 flex flex-col justify-center gap-3 rounded-md bg-white p-4 pb-2 shadow-lg "
    >
      {children}
    </div>
  );
};

export default PointContainer;
