import React from 'react';

const ProfilContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex w-full items-center sm:p-4 md:ml-72 md:w-2/3 2xl:w-1200">
      <div className=" w-full rounded-lg border-2">{children}</div>
    </div>
  );
};

export default ProfilContainer;
