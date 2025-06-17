import React from 'react'

const Hero = () => {
  return (
    <div>
          {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[600px]" style={{ backgroundImage: "url('images/bg_1.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-5">Free Website Template for Charity Websites.</h2>
              <a href="https://vimeo.com/channels/staffpicks/93951774" className="inline-flex items-center bg-white bg-opacity-20 px-6 py-3 rounded-full hover:bg-opacity-30 transition">
                <span className="mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm-2 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                </span>
                <span>Watch Video</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero