"use client";

import { useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  description: string;
}

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div>
      <Link href={`/products/${product.id}`}>
        <div>
          <h3>{product.name}</h3>
        </div>
        <div>
          <span>$ </span>
          {product.price}
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={product.image_url} alt={product.name} />
          <div>
            <p>{product.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
