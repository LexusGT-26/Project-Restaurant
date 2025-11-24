'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to menu page with search query
      router.push(`/menu?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center px-6 md:px-12 lg:px-24 py-12 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/CookingBG.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]"></div>
      
      {/* Content */}
      <div className="w-full flex flex-col items-center justify-center space-y-6 z-[2] relative mt-8 md:mt-0">
        <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl tracking-wide uppercase text-center drop-shadow-md">
          Welcome to
        </h3>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight text-center drop-shadow-lg">
          Jerry&apos;s Lugaw Tokwa&apos;t Baboy
        </h1>
        
        <p className="text-gray-200 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed text-center drop-shadow-md">
          Keep it easy with these simple but delicious recipes from make-ahead lunches and midweek meals to fuss-free sides.
        </p>

        {/* Search Box */}
        <form onSubmit={handleSearch} className="w-full max-w-2xl relative mt-4 shadow-lg rounded-md">
          <div className="flex items-center bg-white border border-gray-100 rounded-md overflow-hidden p-2">
            <div className="pl-4 text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search, Burger..." 
              value={searchQuery}
              onChange={handleInputChange}
              className="flex-grow px-4 py-4 text-lg text-gray-700 focus:outline-none"
            />
            <button 
              type="submit"
              className="text-white font-semibold text-lg px-10 py-4 rounded-md shadow-md transition-colors"
              style={{ backgroundColor: '#D3AC8B' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#C19A7A'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#D3AC8B'}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

