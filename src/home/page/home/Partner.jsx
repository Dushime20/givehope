import React from 'react'

const Partner = () => {
  return (
    <div>
        <div className="py-16 bg-gray-50">
  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 text-center">Our Partners</h2>
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-items-center">
      {["UN_WOMEN_Logo.svg.png", "UNFPA_logo.svg.png", "USAID.png"].map((logo, i) => (
        <div key={i} className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center">
          <img
            src={`/images/${logo}`}
            alt={`Partner ${i + 1}`}
            className="h-20 object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</div>
    </div>
  )
}

export default Partner