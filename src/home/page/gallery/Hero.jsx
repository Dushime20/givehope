import React from 'react'

const Hero = () => {
  return (
    <div>
       
        <div
        className="relative bg-cover bg-center h-[600px]"
         
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-50"
        style={{ backgroundImage: "url('images/bg_1.jpg ')" }}>
          
        

          {/* Center Content */}
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white max-w-4xl">
             <h1 className="text-4xl md:text-5xl font-bold text-white">Our Gallery</h1>
             
            </div>
          </div>

        </div>
      </div>
     
    </div>
  )
}

export default Hero