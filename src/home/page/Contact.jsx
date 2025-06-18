import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('/images/bg_2.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Get In Touch.</h1>
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    rows="7"
                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div id="map" className="w-full h-full min-h-[400px]"></div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Contact;