import React from 'react';
import 'leaflet/dist/leaflet.css';

import { ComponentDetails } from '../interfaces/Interface';

const ProductDetails: React.FC<ComponentDetails> = ({
  description,
  urlSound,
}) => {
  return (
    <>
      <p className="pb-5">{description}</p>
      <audio controls>
        <source src={urlSound} type="audio/mpeg" />
      </audio>
    </>
  );
};

export default ProductDetails;
