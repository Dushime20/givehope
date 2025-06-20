import React from 'react';

const HeroBlog = () => {
  return (
    <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/images/bg_1.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-3xl">
          <span className="text-sm uppercase tracking-wide text-yellow-300">
            Latest Stories
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 leading-snug">
            Inspiring Change Through Real Stories
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroBlog;
