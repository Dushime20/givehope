import React from 'react'

const Hero = () => {
  return (
    <div>
         {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('images/bg_2.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold">About The Organization</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero