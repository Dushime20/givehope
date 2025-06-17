import React from 'react'
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div>
         {/* Features Section */}
      <div className="py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="text-blue-600 text-3xl mr-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-gray-600 mb-2">
                  A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </p>
                <Link to="/mission" className="text-blue-600 hover:underline">Learn More</Link>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-blue-600 text-3xl mr-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Make Donations</h3>
                <p className="text-gray-600 mb-2">
                  A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </p>
                <Link to="/donate" className="text-blue-600 hover:underline">Learn More</Link>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-blue-600 text-3xl mr-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">We Need Volunteers</h3>
                <p className="text-gray-600 mb-2">
                  A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </p>
                <Link to="/volunteer" className="text-blue-600 hover:underline">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features