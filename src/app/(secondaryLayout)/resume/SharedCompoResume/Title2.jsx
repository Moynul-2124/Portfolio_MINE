


import React from 'react';

const Title2 = ({ gud, voda }) => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10">
      <div className="text-center flex flex-col gap-4 sm:gap-6">
        <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-500 transition-opacity">
          {gud}
        </p>
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold transition-shadow">
          {voda}
        </p>
      </div>
    </div>
  );
};

export default Title2;
