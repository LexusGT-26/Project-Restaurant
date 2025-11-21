'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function Menu() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  useEffect(() => {
    const query = searchParams.get('search') || '';
    setSearchQuery(query);
  }, [searchParams]);

  // Unified menu items array with category metadata
  const menuItems = [
    // Lugaw items
    { name: 'Lugaw', category: 'lugaw' },
    { name: 'Lugaw with Tokwa\'t Baboy', category: 'lugaw' },
    { name: 'Lugaw with Chicken', category: 'lugaw' },
    { name: 'Lugaw with Beef', category: 'lugaw' },
    { name: 'Arroz Caldo', category: 'lugaw' },
    
    // Soups items
    { name: 'Sinigang na Baboy', category: 'soups', image: '/image.png' },
    { name: 'Tinola', category: 'soups' },
    { name: 'Nilagang Baka', category: 'soups' },
    { name: 'Bulalo (if available)', category: 'soups' },
    
    // Seafood items
    { name: 'Sweet & Sour Fish', category: 'seafood' },
    { name: 'Ginataang Tilapia', category: 'seafood' },
    { name: 'Daing / Fried Fish', category: 'seafood' },
    { name: 'Calamares', category: 'seafood' },
    
    // Vegetables items
    { name: 'Pinakbet', category: 'vegetables', image: '/143526-480x270-removebg-preview (1).png' },
    { name: 'Chop Suey', category: 'vegetables' },
    { name: 'Laing', category: 'vegetables' },
    { name: 'Ginisang Mongo', category: 'vegetables' },
    
    // Merienda items
    { name: 'Pancit Canton', category: 'merienda' },
    { name: 'Spaghetti', category: 'merienda' },
    { name: 'Palabok', category: 'merienda' },
    { name: 'Turon', category: 'merienda' },
    { name: 'Kutsinta / Puto', category: 'merienda' },
    
    // Drinks items
    { name: 'Iced Tea', category: 'drinks' },
    { name: 'Softdrinks', category: 'drinks' },
    { name: 'Calamansi Juice', category: 'drinks' },
    { name: 'Fresh Buko Juice (optional)', category: 'drinks' },
  ];

  // Filter categories
  const filterCategories = [
    { id: 'all', label: 'All' },
    { id: 'lugaw', label: 'Lugaw' },
    { id: 'soups', label: 'Soups' },
    { id: 'seafood', label: 'Seafood' },
    { id: 'vegetables', label: 'Vegetables' },
    { id: 'merienda', label: 'Merienda' },
    { id: 'drinks', label: 'Drinks' },
  ];

  // Combined filter and search logic
  const filteredItems = useMemo(() => {
    let filtered = menuItems;

    // Apply category filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(item => item.category === activeFilter);
    }

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeFilter, searchQuery]);

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <div className="w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">Menu</h1>
        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterClick(category.id)}
              className={`px-6 py-2.5 rounded-full font-medium text-base transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-[#E30613] text-white shadow-lg shadow-red-500/40'
                  : 'bg-white text-gray-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:text-[#E30613]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Search Results Message */}
        {searchQuery && (
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-sm text-gray-600 text-center">
              {filteredItems.length > 0 
                ? `Found ${filteredItems.length} result${filteredItems.length !== 1 ? 's' : ''} for "${searchQuery}"` 
                : `No results found for "${searchQuery}"`}
            </p>
          </div>
        )}

        {/* Unified Food Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            {filteredItems.map((item, index) => (
              <div
                key={`${item.category}-${index}`}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-1"
                style={{
                  animation: 'fadeIn 0.5s ease-in-out'
                }}
              >
                {item.image && (
                  <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-2">
              {searchQuery 
                ? `No menu items found for "${searchQuery}"` 
                : 'No items found in this category'}
            </p>
            <p className="text-gray-500">Try selecting a different filter or search term.</p>
          </div>
        )}
      </div>
    </div>
  );
}
