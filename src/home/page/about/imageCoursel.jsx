import React from 'react'

const ImageCoursel = () => {
  return (
    <div>
        <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('images/bg_2.jpg')" }}></div>
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('images/bg_1.jpg')" }}></div>
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('images/bg_3.jpg')" }}></div>
          </div>
        </div>
      </div></div>
  )
}

export default ImageCoursel