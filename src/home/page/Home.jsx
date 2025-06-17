import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
    

      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[600px]" style={{ backgroundImage: "url('images/bg_1.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-5">Free Website Template for Charity Websites.</h2>
              <a href="https://vimeo.com/channels/staffpicks/93951774" className="inline-flex items-center bg-white bg-opacity-20 px-6 py-3 rounded-full hover:bg-opacity-30 transition">
                <span className="mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm-2 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                </span>
                <span>Watch Video</span>
              </a>
            </div>
          </div>
        </div>
      </div>

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

      {/* Fundraisers Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Fundraisers</h2>
            <p className="text-gray-600 mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <Link to="/fundraisers" className="text-blue-600 hover:underline">View All Fundraisers</Link>
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

      {/* Latest Donations Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Donations</h2>
            <p className="text-gray-600 mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <Link to="/donations" className="text-blue-600 hover:underline">View All Donations</Link>
          </div>
        </div>
      </div>






      

      {/* Success Story Section */}
      <div className="relative bg-cover bg-center py-20" style={{ backgroundImage: "url('images/bg_3.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="images/bg_3.jpg" alt="Success Story" className="w-full rounded-lg" />
            </div>
            <div className="text-white">
              <span className="text-lg font-semibold block mb-3">Success Stories</span>
              <h2 className="text-3xl font-bold mb-4">Water Is Life. We Successfully Provide Clean Water in South East Asia</h2>
              <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <span className="text-xl block mb-8">We have raised $100,000</span>
              <Link to="/story" className="inline-block bg-green-600 text-white px-8 py-3 rounded hover:bg-green-700 transition">
                Read The Full Story
              </Link>
            </div>
          </div>
        </div>
      </div>

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

            {/* Repeat similar cards for other news items */}
          </div>
        </div>
      </div>

      {/* Volunteer Form Section */}
      <div className="relative bg-cover bg-center py-20" style={{ backgroundImage: "url('images/bg_2.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
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
  );
};

export default Home;