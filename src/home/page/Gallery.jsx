import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: '/images/img_1.jpg' },
    { id: 2, src: '/images/img_2.jpg' },
    { id: 3, src: '/images/img_3.jpg' },
    { id: 4, src: '/images/img_4.jpg' },
    { id: 5, src: '/images/img_1.jpg' },
    { id: 6, src: '/images/img_2.jpg' },
    { id: 7, src: '/images/img_1.jpg' },
    { id: 8, src: '/images/img_2.jpg' },
    { id: 9, src: '/images/img_3.jpg' },
    { id: 10, src: '/images/img_4.jpg' },
    { id: 11, src: '/images/img_1.jpg' },
    { id: 12, src: '/images/img_2.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('/images/bg_1.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Gallery</h1>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-sm">
                <img
                  src={image.src}
                  alt="Gallery"
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Volunteer Section */}
      <div className="relative bg-cover bg-center py-16" style={{ backgroundImage: "url('/images/bg_2.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block">
              <img src="/images/bg_2.jpg" alt="Volunteer" className="rounded-lg shadow-lg" />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Be A Volunteer Today</h2>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    rows="3"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Gallery;