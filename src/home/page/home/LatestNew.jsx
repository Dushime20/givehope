import React from 'react'
import { Link } from 'react-router-dom';

const LatestNew = () => {
  return (
    <div>
          {/* Latest News Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Latest News</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* News Cards */}
            <div>
              <img src="images/img_4.jpg" alt="Be A Volunteer" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">
                <Link to="/news/1" className="hover:text-blue-600">Be A Volunteer Today</Link>
              </h3>
              <span className="text-gray-500 block mb-4">July 26, 2018</span>
              <p className="text-gray-600 mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
              <Link to="/news/1" className="text-blue-600 hover:underline">Read More</Link>
            </div>
              <div>
              <img src="images/img_4.jpg" alt="Be A Volunteer" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">
                <Link to="/news/1" className="hover:text-blue-600">Be A Volunteer Today</Link>
              </h3>
              <span className="text-gray-500 block mb-4">July 26, 2018</span>
              <p className="text-gray-600 mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
              <Link to="/news/1" className="text-blue-600 hover:underline">Read More</Link>
            </div>
              <div>
              <img src="images/img_4.jpg" alt="Be A Volunteer" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">
                <Link to="/news/1" className="hover:text-blue-600">Be A Volunteer Today</Link>
              </h3>
              <span className="text-gray-500 block mb-4">July 26, 2018</span>
              <p className="text-gray-600 mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
              <Link to="/news/1" className="text-blue-600 hover:underline">Read More</Link>
            </div>

            {/* Repeat similar cards for other news items */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestNew