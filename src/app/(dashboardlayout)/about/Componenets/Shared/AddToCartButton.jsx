



'use client';

import { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';

export default function AddToCartButton() {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(true);
    console.log('Item added to cart!');
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 
        px-4 sm:px-6 md:px-8 py-2 sm:py-3 
        text-sm sm:text-base md:text-lg 
        rounded-full w-full max-w-xs 
        transition-all duration-300 
        ${
          added
            ? 'bg-green-500 text-white'
            : 'bg-pink-500 text-white hover:bg-pink-600'
        }`}
    >
      <FaCartPlus className={`text-xl ${added ? 'animate-bounce' : ''}`} />
      {added ? 'Added!' : 'Add to Cart'}
    </button>
  );
}
