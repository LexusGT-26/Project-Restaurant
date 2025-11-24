'use client';

export default function Branches() {
  const branches = [
    {
      id: 'santiago',
      name: "Jerry's LTB — Santiago Branch",
      address: 'Brgy. Centro Norte, Santiago City, Isabela',
      hours: '8:00 AM – 9:00 PM',
      contact: '(078) 123-4567',
      phone: '+63781234567',
      manager: 'Aling Maria',
      popularDishes: 'Adobo, Sinigang na Baboy, Pinakbet',
      mapQuery: 'Santiago%20City%2C%20Isabela%2C%20Philippines',
      mapEmbed: 'https://www.google.com/maps?q=Santiago%20City%2C%20Isabela%2C%20Philippines&z=15&output=embed',
    },
    {
      id: 'old-nabua',
      name: "Jerry's LTB — Old Nabua Branch",
      address: 'Old Market Area, Barangay San Antonio, Nabua, Camarines Sur',
      hours: '7:00 AM – 8:00 PM',
      contact: '(054) 234-5678',
      phone: '+63542345678',
      manager: 'Aling Rosa',
      popularDishes: 'Lugaw, Tinola, Ginataang Tilapia',
      mapQuery: 'Old%20Nabua%2C%20Nabua%2C%20Camarines%20Sur%2C%20Philippines',
      mapEmbed: 'https://www.google.com/maps?q=Old%20Nabua%2C%20Nabua%2C%20Camarines%20Sur%2C%20Philippines&z=15&output=embed',
    },
    {
      id: 'iriga',
      name: "Jerry's LTB — Iriga City Branch",
      address: 'Downtown Area, Iriga City, Camarines Sur',
      hours: '8:00 AM – 9:00 PM',
      contact: '(054) 345-6789',
      phone: '+63543456789',
      manager: 'Aling Lita',
      popularDishes: 'Bulalo, Nilagang Baka, Pancit Canton',
      mapQuery: 'Iriga%20City%2C%20Camarines%20Sur%2C%20Philippines',
      mapEmbed: 'https://www.google.com/maps?q=Iriga%20City%2C%20Camarines%20Sur%2C%20Philippines&z=15&output=embed',
    },
  ];

  const handleCall = (phone) => {
    window.open(`tel:${phone}`);
  };

  const handleOpenMaps = (query) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12" style={{ background: '#fff9f4', minHeight: 'calc(100vh - 200px)' }}>
      <div className="w-full">
        {/* Header */}
        <header className="flex items-center gap-3 mb-6">
          <div 
            className="w-14 h-14 rounded-lg flex items-center justify-center font-bold text-2xl"
            style={{ background: '#ede0d4', color: '#1a0f08' }}
          >
            J
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 font-cooper-black" style={{ color: '#1a0f08', margin: 0 }}>
              Jerry&apos;s LTB — Our Branches
            </h1>
            <p className="text-sm md:text-base" style={{ color: '#6b6b6b' }}>
              Discover our branches located around Bicol and Isabela — serving your favorite lutong-bahay dishes every day.
            </p>
          </div>
        </header>

        {/* Intro Paragraph */}
        <section 
          className="mt-6 mb-8 text-base leading-relaxed rounded-xl p-6"
          style={{ 
            background: '#faf5f1', 
            color: '#4b4b4b',
            borderLeft: '6px solid #ede0d4'
          }}
        >
          Welcome to our branch locator! Here you can easily find our locations across Santiago, Old Nabua, and Iriga City. Each branch brings the same homestyle cooking that feels like home — freshly prepared meals, friendly staff, and a warm atmosphere. Browse the branches below to see their details, operating hours, and exact map locations for quick navigation.
        </section>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {branches.map((branch) => (
            <article 
              key={branch.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              style={{ boxShadow: '0 6px 18px rgba(15,23,42,0.06)' }}
            >
              {/* Map */}
              <div 
                className="w-full h-64 bg-gray-200 relative flex-shrink-0"
                style={{ borderTop: '6px solid #ede0d4' }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={branch.mapEmbed}
                  title={`Map for ${branch.name}`}
                ></iframe>
              </div>

              {/* Branch Info */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="font-bold text-lg mb-2" style={{ color: '#1a0f08' }}>
                  {branch.name}
                </div>
                <div className="text-sm mb-4" style={{ color: '#6b6b6b' }}>
                  {branch.address}
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span 
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ background: '#faf7f4', color: '#2d1f14' }}
                  >
                    Open: {branch.hours}
                  </span>
                  <span 
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ background: '#faf7f4', color: '#2d1f14' }}
                  >
                    Contact: {branch.contact}
                  </span>
                  <span 
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ background: '#faf7f4', color: '#2d1f14' }}
                  >
                    Manager: {branch.manager}
                  </span>
                </div>

                {/* Popular Dishes */}
                <div className="text-sm mb-4" style={{ color: '#6b6b6b' }}>
                  Popular dishes: {branch.popularDishes}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto pt-4">
                  <button
                    onClick={() => handleCall(branch.phone)}
                    className="flex-1 px-4 py-2.5 rounded-lg font-semibold text-sm text-white transition-colors hover:opacity-90"
                    style={{ background: '#1a0f08' }}
                  >
                    Call
                  </button>
                  <button
                    onClick={() => handleOpenMaps(branch.mapQuery)}
                    className="flex-1 px-4 py-2.5 rounded-lg font-semibold text-sm text-white transition-colors hover:opacity-90"
                    style={{ background: '#1a0f08' }}
                  >
                    Open in Maps
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
