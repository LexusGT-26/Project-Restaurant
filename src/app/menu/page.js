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
    { name: 'Lugaw', category: 'lugaw', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop', price: 25 },
    { name: 'Lugaw with Tokwa\'t Baboy', category: 'lugaw', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop', price: 50 },
    { name: 'Lugaw with Chicken', category: 'lugaw', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop', price: 55 },
    { name: 'Lugaw with Beef', category: 'lugaw', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop', price: 60 },
    { name: 'Arroz Caldo', category: 'lugaw', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop', price: 50 },
    
    // Soups items
    { name: 'Sinigang na Baboy', category: 'soups', image: '/image.png', price: 80 },
    { name: 'Tinola', category: 'soups', image: 'https://images.unsplash.com/photo-1604909052743-94d1340e7d51?w=400&h=300&fit=crop', price: 75 },
    { name: 'Nilagang Baka', category: 'soups', image: 'https://images.unsplash.com/photo-1604909052743-94d1340e7d51?w=400&h=300&fit=crop', price: 90 },
    { name: 'Bulalo (if available)', category: 'soups', image: 'https://images.unsplash.com/photo-1604909052743-94d1340e7d51?w=400&h=300&fit=crop', price: 120 },
    
    // Seafood items
    { name: 'Sweet & Sour Fish', category: 'seafood', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop', price: 85 },
    { name: 'Ginataang Tilapia', category: 'seafood', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop', price: 75 },
    { name: 'Daing / Fried Fish', category: 'seafood', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop', price: 70 },
    { name: 'Calamares', category: 'seafood', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop', price: 90 },
    
    // Vegetables items
    { name: 'Pinakbet', category: 'vegetables', image: '/143526-480x270-removebg-preview (1).png', price: 65 },
    { name: 'Chop Suey', category: 'vegetables', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', price: 60 },
    { name: 'Laing', category: 'vegetables', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', price: 65 },
    { name: 'Ginisang Mongo', category: 'vegetables', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', price: 55 },
    
    // Merienda items
    { name: 'Pancit Canton', category: 'merienda', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop', price: 50 },
    { name: 'Spaghetti', category: 'merienda', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop', price: 55 },
    { name: 'Palabok', category: 'merienda', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop', price: 60 },
    { name: 'Turon', category: 'merienda', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=300&fit=crop', price: 20 },
    { name: 'Kutsinta / Puto', category: 'merienda', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=300&fit=crop', price: 15 },
    
    // Drinks items
    { name: 'Iced Tea', category: 'drinks', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop', price: 20 },
    { name: 'Softdrinks', category: 'drinks', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop', price: 25 },
    { name: 'Calamansi Juice', category: 'drinks', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop', price: 30 },
    { name: 'Fresh Buko Juice (optional)', category: 'drinks', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop', price: 40 },
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
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center font-cooper-black" style={{ color: '#1a0f08' }}>Menu</h1>
        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterClick(category.id)}
              className={`px-8 py-3 rounded-full font-medium text-base transition-all duration-300 font-cooper-black ${
                activeFilter === category.id
                  ? 'text-white shadow-lg shadow-[#D3AC8B]/30'
                  : 'bg-white shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-105'
              }`}
              style={activeFilter === category.id 
                ? { backgroundColor: '#D3AC8B', color: '#1a0f08' } 
                : { color: '#2d1f14' }
              }
              onMouseEnter={(e) => {
                if (activeFilter !== category.id) {
                  e.target.style.color = '#D3AC8B';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== category.id) {
                  e.target.style.color = '#2d1f14';
                }
              }}
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
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                style={{
                  animation: 'fadeIn 0.5s ease-in-out'
                }}
              >
                <div className="relative w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 font-cooper-black" style={{ color: '#1a0f08' }}>
                    {item.name}
                  </h3>
                  <p className="text-xl font-bold" style={{ color: '#D3AC8B' }}>
                    ₱{item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl mb-2" style={{ color: '#2d1f14' }}>
              {searchQuery 
                ? `No menu items found for "${searchQuery}"` 
                : 'No items found in this category'}
            </p>
            <p style={{ color: '#5C4033' }}>Try selecting a different filter or search term.</p>
          </div>
        )}
      </div>
    </div>
  );
}
