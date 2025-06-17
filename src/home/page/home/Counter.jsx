import React from 'react'
import { Link } from 'react-router-dom';
const Counter = () => {
  return (
    <div>
        {/* Counter Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <div className="mb-8">
                <span className="text-gray-600 block mb-2">Served Over</span>
                <div className="text-5xl font-bold text-blue-600 mb-2">1,321,901</div>
                <span className="text-gray-600 block mb-4">Children in 150 Countries</span>
                <Link to="/program" className="inline-block bg-gray-100 text-gray-800 px-6 py-2 rounded hover:bg-gray-200 transition">
                  View Our Program
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Who Are We?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
              <p className="text-gray-600 mb-6">
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
              <Link to="/about" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter