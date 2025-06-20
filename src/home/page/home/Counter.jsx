import React from 'react'
import { Link } from 'react-router-dom';
import CounterSection from './CounterSection';
const Counter = () => {
  return (
    <div>
        {/* Counter Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <div className="mb-8">
                <CounterSection/>
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