import React from 'react'
import { Link } from 'react-router-dom';

const Foundraisers = () => {
  return (
    <div>
         {/* Fundraisers Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Programs</h2>
            <p className="text-gray-600 mb-4">
              Empowering Deaf women through training, education, and inclusive community programs.
            </p>
            <Link to="/projects" className="text-blue-600 hover:underline">View All Projects</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Fundraiser Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="images/img_1.jpg" alt="Water Is Life" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <Link to="/fundraiser/1" className="hover:text-blue-600">Water Is Life. Clean Water In Urban Area</Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <span className="text-gray-500 text-sm block mb-4">Last donation 1w ago</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '28%' }}></div>
                </div>
                <span className="text-gray-600">$12,000 raised of $30,000</span>
              </div>
            </div>

            {/* Fundraiser Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="images/img_7.jpg" alt="Shelter for Children" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <Link to="/fundraiser/2" className="hover:text-blue-600">Need Shelter for Children in Africa</Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <span className="text-gray-500 text-sm block mb-4">Last donation 1w ago</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '28%' }}></div>
                </div>
                <span className="text-gray-600">$12,000 raised of $30,000</span>
              </div>
            </div>

            {/* Fundraiser Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="images/img_3.jpg" alt="Children Education" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <Link to="/fundraiser/3" className="hover:text-blue-600">Children Needs Education</Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <span className="text-gray-500 text-sm block mb-4">Last donation 1w ago</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '28%' }}></div>
                </div>
                <span className="text-gray-600">$12,000 raised of $30,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Foundraisers