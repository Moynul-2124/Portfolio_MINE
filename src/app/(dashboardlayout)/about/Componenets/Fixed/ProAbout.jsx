



'use client';
import React from 'react';
import { MdDirtyLens } from 'react-icons/md';
import { IoMdRainy } from 'react-icons/io';
import { BsFillRocketFill } from 'react-icons/bs';
import Link from 'next/link';
import { useGetPlansQuery } from '../../../../api/upload/dataApi';

export default function ProAbout() {
  const { data, isLoading, isError } = useGetPlansQuery();
  const plans = data?.planss || [];

  const iconMap = {
    MdDirtyLens: <MdDirtyLens />,
    WiRaindrop: <IoMdRainy />,
    BsFillRocketFill: <BsFillRocketFill />,
  };

  if (isLoading) return <p className="text-white p-6">Loading plans...</p>;
  if (isError) return <p className="text-red-500 p-6">Failed to load plans.</p>;

  return (
    <section className="px-4 sm:px-6 md:px-10 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {plans.map((plan) => (
          <div key={plan.id} className="w-full max-w-sm bg-[#161616] rounded-lg shadow-md p-6 text-center">
            <div className="text-green-500 text-4xl mb-4">
              {iconMap[plan.image] || <MdDirtyLens />}
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{plan.name}</h2>
            <p className="text-xl text-gray-300 mb-4">{plan.price}</p>
            <ul className="text-sm text-gray-400 space-y-2 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Link href={`/about/${plan.id}`}>
              <button className="w-full py-2 rounded bg-green-700 text-white font-semibold hover:bg-green-600 transition">
                {plan.button}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
