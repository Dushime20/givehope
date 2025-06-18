import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('/images/bg_1.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Gallery</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero