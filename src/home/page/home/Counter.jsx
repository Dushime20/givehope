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
                Rwanda National Association of Deaf Women (RNADW) is an Organization of People with Disabilities (OPD) which is fully registered with Rwanda Governance Board (RGB). Founded in 2005 by a group of Deaf women human rights activist to advocate for the rights of women and girls, after realizing the gaps in service provision, insufficient advocacy efforts to fight for her rights and social integrations in the entire Rwandan community as whole.
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