'use client'

import React from 'react';
import Card from '../card/page';

const productData = {
  id: 1,
  name: 'Vans Knu Skool',
  price: 123.45,
  image_url: 'https://i.ebayimg.com/images/g/b~0AAOSwrTxkpqbP/s-l1600.jpg',
  description: 'Zapatillas de patín Vans Knu Skool negras/blancas verdaderas VN0009QC6BT EE. UU. 4-13',
};

export default function Cards() {
  return (
    <div>
      <Card product={productData}/>
    </div>
  );
}
