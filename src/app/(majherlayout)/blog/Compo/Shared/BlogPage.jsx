


'use client';
import React from 'react';
import { useGetPostssQuery } from '../../../../api/upload/dataApi';

export default function ProjectsPage() {
  const { data, isLoading } = useGetPostssQuery();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {isLoading ? (
        <p className="text-center py-12 text-lg font-medium">Loading...</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12 container mx-auto">
          {data?.map((project) => (
            <li key={project.id}>
              <a
                href="https://www.prothomalo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block transform transition duration-300 hover:scale-105"
              >
                <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <figure className="relative">
                    <img
                      className="w-full h-64 object-cover"
                      src={project.image}
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-center px-4">
                      <p className="text-sm">{project.content}</p>
                    </div>
                  </figure>
                  <div className="card-body p-4">
                    <h2 className="card-title text-lg font-semibold text-gray-800">
                      {project.title}
                    </h2>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
