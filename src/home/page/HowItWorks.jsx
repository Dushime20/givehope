import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('/images/bg_1.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">How It Works</h1>
            <a
              href="https://vimeo.com/channels/staffpicks/93951774"
              className="inline-flex items-center text-white hover:text-blue-400 transition-colors"
            >
              <span className="mr-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="text-lg">How It Works</span>
            </a>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 md:order-2 mb-8 md:mb-0">
              <img src="/images/bg_1.jpg" alt="Create Campaign" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pr-12 md:order-1">
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-semibold">
                  Step 01
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Create Your Fundraising Campaign</h2>
              <p className="text-gray-600">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/images/bg_2.jpg" alt="Share Campaign" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-semibold">
                  Step 02
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Share with Family and Friends</h2>
              <p className="text-gray-600">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Donations Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Donations</h2>
            <p className="text-lg text-gray-600 mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <Link to="#" className="text-blue-600 hover:text-blue-800 underline">
              View All Donations
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Donation Card 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="text-center p-6">
                <img src="/images/person_1.jpg" alt="Jorge Smith" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-bold mb-2">Jorge Smith</h3>
                <span className="text-gray-500 block mb-3">Donated Just now</span>
                <p className="text-gray-700">
                  Donated <span className="text-green-600 font-semibold">$252</span>
                  <br />
                  <em>for</em>{' '}
                  <Link to="#" className="text-blue-600 hover:text-blue-800 underline">
                    Water Is Life. Clean Water In Urban Area
                  </Link>
                </p>
              </div>
            </div>

            {/* Donation Card 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="text-center p-6">
                <img src="/images/person_2.jpg" alt="Christine Charles" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-bold mb-2">Christine Charles</h3>
                <span className="text-gray-500 block mb-3">Donated 1 hour ago</span>
                <p className="text-gray-700">
                  Donated <span className="text-green-600 font-semibold">$400</span>
                  <br />
                  <em>for</em>{' '}
                  <Link to="#" className="text-blue-600 hover:text-blue-800 underline">
                    Children Needs Education
                  </Link>
                </p>
              </div>
            </div>

            {/* Donation Card 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="text-center p-6">
                <img src="/images/person_3.jpg" alt="Albert Sluyter" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-bold mb-2">Albert Sluyter</h3>
                <span className="text-gray-500 block mb-3">Donated 4 hours ago</span>
                <p className="text-gray-700">
                  Donated <span className="text-green-600 font-semibold">$1,200</span>
                  <br />
                  <em>for</em>{' '}
                  <Link to="#" className="text-blue-600 hover:text-blue-800 underline">
                    Need Shelter for Children in Africa
                  </Link>
                </p>
              </div>
            </div>

            {/* Donation Card 4 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="text-center p-6">
                <img src="/images/person_4.jpg" alt="Andrew Holloway" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-bold mb-2">Andrew Holloway</h3>
                <span className="text-gray-500 block mb-3">Donated 9 hours ago</span>
                <p className="text-gray-700">
                  Donated <span className="text-green-600 font-semibold">$100</span>
                  <br />
                  <em>for</em>{' '}
                  <Link to="#" className="text-blue-600 hover:text-blue-800 underline">
                    Water Is Life. Clean Water In Urban Area
                  </Link>
                </p>
              </div>
            </div>
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

export default HowItWorks;