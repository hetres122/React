import React from 'react';

const PointListContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <div className="my-8 grid  gap-5 sm:mx-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
        {children}
      </div>
    </div>
  );
};

export default PointListContainer;
