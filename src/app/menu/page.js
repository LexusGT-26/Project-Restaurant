'use client';

import Image from 'next/image';

export default function Menu() {
  
  const friedGrilled = [
    'Fried Chicken',
    'Inihaw na Liempo',
    'Inihaw na Manok',
    'Pork Chop',
    'Daing na Bangus'
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

  const bestSellers = [
    'Pork Adobo',
    'Fried Chicken',
    'Sinigang na Baboy',
    'Inihaw na Liempo',
    'Pinakbet'
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <div className="w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Menu</h1>

        {/* Best Sellers Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-lg mb-6">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <span>⭐</span> Best Sellers
            </h2>
            <p className="text-red-100 text-sm">This week&apos;s most-loved dishes recommended by our customers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bestSellers.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                {item === 'Pork Adobo' && (
                  <div className="mb-4 flex justify-center">
                    <Image 
                      src="/Pork_Adobo-removebg-preview.png" 
                      alt="Pork Adobo" 
                      width={200} 
                      height={200}
                      className="object-contain"
                    />
                  </div>
                )}
                {item === 'Fried Chicken' && (
                  <div className="mb-4 flex justify-center">
                    <Image 
                      src="/FriedChicken.png" 
                      alt="Fried Chicken" 
                      width={200} 
                      height={200}
                      className="object-contain"
                    />
                  </div>
                )}
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
                {item === 'Inihaw na Liempo' && (
                  <div className="mb-4 flex justify-center">
                    <Image 
                      src="/Inihaw_na_liempo-removebg-preview (1).png" 
                      alt="Inihaw na Liempo" 
                      width={200} 
                      height={200}
                      className="object-contain"
                    />
                  </div>
                )}
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
                <p className="text-lg font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fried & Grilled Favorites */}
        <section className="mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>🍗</span> Fried & Grilled Favorites
            </h2>
            <p className="text-gray-600 mb-4">Crispy or smoky—our all-time classic comfort food.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {friedGrilled.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                  {item === 'Fried Chicken' && (
                    <div className="mb-4 flex justify-center">
                      <Image 
                        src="/Fried_Chicken-removebg-preview.png" 
                        alt="Fried Chicken" 
                        width={200} 
                        height={200}
                        className="object-contain"
                      />
                    </div>
                  )}
                  {item === 'Inihaw na Liempo' && (
                    <div className="mb-4 flex justify-center">
                      <Image 
                        src="/Inihaw_na_liempo-removebg-preview (1).png" 
                        alt="Inihaw na Liempo" 
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

        {/* Sinigang, Sabaw & Classic Soups */}
        <section className="mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>🍛</span> Sinigang, Sabaw & Classic Soups
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>🐟</span> Seafood Specials
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>🥗</span> Vegetable Favorites
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>🍝</span> Pampahimagas / Merienda
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>🥤</span> Drinks
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
