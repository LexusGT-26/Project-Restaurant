'use client';

import Image from 'next/image';

export default function Menu() {
  
  const lugaw = [
    'Lugaw',
    'Lugaw with Tokwa\'t Baboy',
    'Lugaw with Chicken',
    'Lugaw with Beef',
    'Arroz Caldo'
  ];

  const soups = [
    'Sinigang na Baboy',
    'Tinola',
    'Nilagang Baka',
    'Bulalo (if available)'
  ];

  const seafood = [
    'Sweet & Sour Fish',
    'Ginataang Tilapia',
    'Daing / Fried Fish',
    'Calamares'
  ];

  const vegetables = [
    'Pinakbet',
    'Chop Suey',
    'Laing',
    'Ginisang Mongo'
  ];

  const merienda = [
    'Pancit Canton',
    'Spaghetti',
    'Palabok',
    'Turon',
    'Kutsinta / Puto'
  ];

  const drinks = [
    'Iced Tea',
    'Softdrinks',
    'Calamansi Juice',
    'Fresh Buko Juice (optional)'
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <div className="w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Menu</h1>

        {/* Lugaw */}
        <section className="mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Lugaw
            </h2>
            <p className="text-gray-600 mb-4">Warm and comforting rice porridge—perfect for any time of day.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lugaw.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="text-lg font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sinigang, Sabaw & Classic Soups */}
        <section className="mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Sinigang, Sabaw & Classic Soups
            </h2>
            <p className="text-gray-600 mb-4">Warm, hearty soups cooked low and slow to bring out authentic flavors.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {soups.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                  {item === 'Sinigang na Baboy' && (
                    <div className="mb-4 flex justify-center">
                      <Image 
                        src="/image.png" 
                        alt="Sinigang na Baboy" 
                        width={200} 
                        height={200}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <p className="text-lg font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seafood Specials */}
        <section className="mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Seafood Specials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {seafood.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="text-lg font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vegetable Favorites */}
        <section className="mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Vegetable Favorites
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {vegetables.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                  {item === 'Pinakbet' && (
                    <div className="mb-4 flex justify-center">
                      <Image 
                        src="/143526-480x270-removebg-preview (1).png" 
                        alt="Pinakbet" 
                        width={200} 
                        height={200}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <p className="text-lg font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pampahimagas / Merienda */}
        <section className="mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Pampahimagas / Merienda
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {merienda.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="text-lg font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Drinks */}
        <section className="mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Drinks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {drinks.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="text-lg font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
