'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ProductDto } from '@/redux/actions';

interface CardProps {
  product: ProductDto;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const [showDescription, setShowDescription] = useState(false);
  console.log(showDescription);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div>
      <Link href={`/products/${product?.id}`}>
        <div>
          <h3>{product?.brand + ' ' + product?.model}</h3>
        </div>
        <div>
          <span>$ </span>
          {product?.price}
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={product?.img} alt={product?.model} />
          <div>
            <p>{product?.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
