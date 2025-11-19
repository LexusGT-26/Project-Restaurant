'use client';

export default function Hero() {
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
        <h3 className="text-red-400 font-bold text-2xl md:text-3xl lg:text-4xl tracking-wide uppercase text-center drop-shadow-md">
          Welcome to
        </h3>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight text-center drop-shadow-lg">
          The world of <br />
          <span className="text-white">Tasty & Fresh Food.</span>
        </h1>
        
        <p className="text-gray-200 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed text-center drop-shadow-md">
          Keep it easy with these simple but delicious recipes from make-ahead lunches and midweek meals to fuss-free sides.
        </p>

        {/* Search Box */}
        <div className="w-full max-w-2xl relative mt-4 shadow-lg rounded-md">
          <div className="flex items-center bg-white border border-gray-100 rounded-md overflow-hidden p-2">
            <div className="pl-4 text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search, Burger..." 
              className="flex-grow px-4 py-4 text-lg text-gray-700 focus:outline-none"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-10 py-4 rounded-md shadow-md">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

