import React from 'react'

const Hero = () => {
  return (
    <div> <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/images/bg_1.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <span className="text-sm uppercase tracking-wider">July 30, 2018 — by Admin</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Water Is Life. We Successfully Provide Clean Water in South East Asia
            </h1>
          </div>
        </div>
      </div></div>
  )
}

export default Hero