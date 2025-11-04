



'use client';
import React, { useState } from 'react';
import {
    useGetCategoriesQuery,
    useGetItemsQuery,
} from '../../../../api/upload/dataApi';

export default function PortfolioPage() {
    const { data: categories, isLoading: categoriesLoading } = useGetCategoriesQuery();
    const {
        data: itemsData,    
        isLoading: itemsLoading,
        error: itemsError,
        } = useGetItemsQuery();

    const [selectedCategory, setSelectedCategory] = useState('All');
        
    // Filter items by category name
    const filteredItems =
        selectedCategory === 'All'
            ? itemsData
            : itemsData?.filter((item) => item.name === selectedCategory);

    // Remove duplicate "All" if it exists in categories
    const categoryList = categories?.filter((cat, index, self) =>
        index === self.findIndex((c) => c.name === cat.name)
    );

    return (
        <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
            {/* Category Buttons */}
            <div className="text-center py-8">
                {categoriesLoading ? (
                    <p className="text-gray-600">Loading categories...</p>
                ) : (
                    <ul className="flex flex-wrap justify-center gap-4">
                        {categoryList?.map((cat) => (
                            <li key={cat.name}>
                                <button
                                    onClick={() => setSelectedCategory(cat.name)}
                                    className={`px-4 py-2 rounded-full border transition ${selectedCategory === cat.name
                                        ? 'bg-black text-white'
                                        : 'bg-white text-black hover:bg-gray-100'
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Items Grid */}
            <div>
                {itemsError ? (
                    <p className="text-center py-8 text-red-500 font-medium">Error loading items</p>
                ) : itemsLoading ? (
                    <p className="text-center py-8 text-gray-600">Loading items...</p>
                ) : (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
                        {filteredItems?.map((item) => (
                            <li key={item.id} className="relative group overflow-hidden rounded-lg shadow-md">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-left p-6">
                                    <div className="max-w-md">
                                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-sm mb-1">💰 <span className="font-medium">Price:</span> ৳{item.price}</p>
                                        <p className="text-sm mb-1">⭐ <span className="font-medium">Rating:</span> {item.rating}</p>
                                        <p className="text-sm mb-2">🏷️ <span className="font-medium">Tags:</span></p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags?.map((tag, i) => (
                                                <span key={i} className="bg-white text-black text-xs px-2 py-1 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
