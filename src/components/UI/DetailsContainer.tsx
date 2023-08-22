import React from 'react';
const DetailsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-5 p-3 sm:p-9 xl:flex-row">{children}</div>
  );
};

export default DetailsContainer;
