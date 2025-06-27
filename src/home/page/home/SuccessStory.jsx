import React from 'react'
import { Link } from 'react-router-dom';
const SuccessStory = () => {
  return (
    <div> {/* Success Story Section */}
      <div className="relative bg-cover bg-center py-20" style={{ backgroundImage: "url('images/bg_3.jpg')" }}>
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="images/bg_3.jpg" alt="Success Story" className="w-full rounded-lg" />
            </div>
            <div className="">
              <span className="text-lg font-semibold block mb-3">Success Stories</span>
              <h2 className="text-3xl font-bold mb-4">Water Is Life. We Successfully Provide Clean Water in South East Asia</h2>
              <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <span className="text-xl block mb-8">We have raised $100,000</span>
              <Link to="/story" className="inline-block bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition">
                Read The Full Story
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default SuccessStory