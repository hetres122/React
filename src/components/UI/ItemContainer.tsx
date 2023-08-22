import React from 'react';
const ItemContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className=" w-full xl:w-1/2">{children}</div>;
};

export default ItemContainer;
