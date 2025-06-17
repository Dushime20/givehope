import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">GiveHope</Link>
            <button className="md:hidden">
              <span className="sr-only">Menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <Link to="/how-it-works" className="hover:text-gray-300">How It Works</Link>
              <Link to="/donate" className="hover:text-gray-300">Donate</Link>
              <Link to="/gallery" className="hover:text-gray-300">Gallery</Link>
              <Link to="/blog" className="hover:text-gray-300">Blog</Link>
              <Link to="/about" className="text-blue-400">About</Link>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('images/bg_2.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold">About The Organization</h2>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-8">Our History</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, necessitatibus officiis facere nisi et, ut adipisci a quis quisquam vitae doloremque tempora repellat quae accusantium atque eum voluptatibus aperiam cumque.
                </p>
                <p className="text-gray-700">
                  Quia ratione, eum harum ab similique mollitia, nisi itaque vel voluptas ipsam dolore perferendis. Deleniti voluptatum error possimus ipsum, sed, obcaecati. Sit unde quia eum repudiandae molestiae reprehenderit harum nesciunt.
                </p>
              </div>
              <div>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, necessitatibus officiis facere nisi et, ut adipisci a quis quisquam vitae doloremque tempora repellat quae accusantium atque eum voluptatibus aperiam cumque.
                </p>
                <p className="text-gray-700">
                  Quia ratione, eum harum ab similique mollitia, nisi itaque vel voluptas ipsam dolore perferendis. Deleniti voluptatum error possimus ipsum, sed, obcaecati. Sit unde quia eum repudiandae molestiae reprehenderit harum nesciunt.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Leadership</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Leadership Cards */}
              <div className="text-center">
                <div className="mb-4">
                  <img src="images/person_1.jpg" alt="Greeg Graham" className="w-32 h-32 rounded-full mx-auto" />
                  <h3 className="text-xl font-bold mt-4">Greeg Graham</h3>
                  <p className="text-gray-600">CEO</p>
                </div>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <img src="images/person_2.jpg" alt="Jennifer Greive" className="w-32 h-32 rounded-full mx-auto" />
                  <h3 className="text-xl font-bold mt-4">Jennifer Greive</h3>
                  <p className="text-gray-600">President</p>
                </div>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <img src="images/person_3.jpg" alt="Patrick Marx" className="w-32 h-32 rounded-full mx-auto" />
                  <h3 className="text-xl font-bold mt-4">Patrick Marx</h3>
                  <p className="text-gray-600">Marketer</p>
                </div>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <img src="images/person_4.jpg" alt="Mike Coolbert" className="w-32 h-32 rounded-full mx-auto" />
                  <h3 className="text-xl font-bold mt-4">Mike Coolbert</h3>
                  <p className="text-gray-600">Partner</p>
                </div>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Carousel Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('images/bg_2.jpg')" }}></div>
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('images/bg_1.jpg')" }}></div>
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('images/bg_3.jpg')" }}></div>
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
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
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
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400 mb-4">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <p className="text-gray-400 mb-4">
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
              <Link to="/about" className="text-blue-400 hover:underline">Read More</Link>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Recent Blog</h3>
              {/* Blog Posts */}
              <div className="flex mb-4">
                <img src="images/img_1.jpg" alt="Blog Post" className="w-20 h-20 object-cover mr-4" />
                <div>
                  <h4 className="font-semibold mb-2">
                    <Link to="/blog/1" className="hover:text-blue-400">Water Is Life. Clean Water In Urban Area</Link>
                  </h4>
                  <div className="text-sm text-gray-400">
                    <span className="mr-4">July 29, 2018</span>
                    <span className="mr-4">Admin</span>
                    <span>19</span>
                  </div>
                </div>
              </div>

              <div className="flex mb-4">
                <img src="images/img_2.jpg" alt="Blog Post" className="w-20 h-20 object-cover mr-4" />
                <div>
                  <h4 className="font-semibold mb-2">
                    <Link to="/blog/2" className="hover:text-blue-400">Life Is Short So Be Kind</Link>
                  </h4>
                  <div className="text-sm text-gray-400">
                    <span className="mr-4">July 29, 2018</span>
                    <span className="mr-4">Admin</span>
                    <span>19</span>
                  </div>
                </div>
              </div>

              <div className="flex mb-4">
                <img src="images/img_4.jpg" alt="Blog Post" className="w-20 h-20 object-cover mr-4" />
                <div>
                  <h4 className="font-semibold mb-2">
                    <Link to="/blog/3" className="hover:text-blue-400">Unfortunate Children Need Your Love</Link>
                  </h4>
                  <div className="text-sm text-gray-400">
                    <span className="mr-4">July 29, 2018</span>
                    <span className="mr-4">Admin</span>
                    <span>19</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Get Connected</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+2 392 3929 210</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@yourdomain.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-gray-400 pt-8 border-t border-gray-800">
            <p>
              Copyright © {new Date().getFullYear()} All rights reserved | This template is made with{' '}
              <span className="text-red-500">♥</span> by{' '}
              <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Colorlib
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;