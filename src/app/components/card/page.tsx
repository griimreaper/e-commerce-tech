'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ProductDto } from '@/redux/actions';

interface CardProps {
  product: ProductDto;
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
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-950 dark:border-gray-900">
      <Link href={`/products/${product?.id}`}>
        <div
          className="relative rounded-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#">
            <img src={product?.img} alt={product?.model} className="p-8" />
            {showDescription && (
              <div className="absolute inset-0 bg-opacity-75 bg-gray-900 flex justify-center items-center">
                <p className="text-white text-center">{product?.description}</p>
              </div>
            )}
          </a>
        </div>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product?.brand + ' ' + product?.model}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              {/* ... (SVG path data) */}
            </svg>
            {/* Repeat the SVG elements as needed */}
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product?.price}
            </span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
