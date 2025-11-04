



'use client';
import React from 'react';
import { useGetServicesQuery } from '../../../../api/upload/dataApi';

export default function ServicesAbout() {
  const { data, isLoading, isError } = useGetServicesQuery();
  const services = data || [];

  if (isLoading) return <p className="text-white p-6">Loading services...</p>;
  if (isError) return <p className="text-red-500 p-6">Failed to load services.</p>;

  return (
    <section className="px-4 sm:px-6 md:px-10 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {services.map((service) => (
          <div key={service.id} className="bg-base-300 rounded-lg shadow-md w-full max-w-sm p-6">
            <div className="flex flex-col items-center text-center">
              <img
                src={service.icon}
                alt={service.name}
                className="rounded-full mb-4"
                width={64}
                height={64}
              />
              <h2 className="text-xl font-bold text-gray-300 tracking-wide mb-2">
                {service.name}
              </h2>
              <p className="text-sm text-gray-400 tracking-wide">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
