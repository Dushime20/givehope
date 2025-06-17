import React from 'react'
import { Link } from 'react-router-dom';

const VolunteerForm = () => {
  return (
    <div>
        {/* Volunteer Form Section */}
      <div className="relative bg-cover bg-center py-20" style={{ backgroundImage: "url('images/bg_2.jpg')" }}>
        <div className="absolute inset-0 bg-[#f2c44a] bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="images/bg_2.jpg" alt="Volunteer" className="w-full rounded-lg" />
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Be A Volunteer Today</h2>
              <form>
                <div className="mb-4">
                  <input type="text" className="w-full px-4 py-2 border rounded" placeholder="Enter your name" />
                </div>
                <div className="mb-4">
                  <input type="email" className="w-full px-4 py-2 border rounded" placeholder="Enter your email" />
                </div>
                <div className="mb-4">
                  <textarea className="w-full px-4 py-2 border rounded" rows="3" placeholder="Write your message"></textarea>
                </div>
                <button type="submit" className="bg-white text-gray-800 px-8 py-2 rounded hover:bg-gray-100 transition">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VolunteerForm