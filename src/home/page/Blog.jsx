import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('/images/bg_1.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Blog</h1>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Link to="/blog-single" className="block mb-3">
                <img src="/images/img_4.jpg" alt="Image placeholder" className="w-full" />
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <Link to="/blog-single" className="text-gray-900 hover:text-blue-600">
                    Be A Volunteer Today
                  </Link>
                </h3>
                <span className="text-gray-500 text-sm block mb-4">July 26, 2018</span>
                <p className="text-gray-600 mb-4">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                </p>
                <Link to="/blog-single" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Link to="/blog-single" className="block mb-3">
                <img src="/images/img_5.jpg" alt="Image placeholder" className="w-full" />
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <Link to="/blog-single" className="text-gray-900 hover:text-blue-600">
                    You May Save The Life of A Child
                  </Link>
                </h3>
                <span className="text-gray-500 text-sm block mb-4">July 26, 2018</span>
                <p className="text-gray-600 mb-4">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                </p>
                <Link to="/blog-single" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Link to="/blog-single" className="block mb-3">
                <img src="/images/img_6.jpg" alt="Image placeholder" className="w-full" />
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <Link to="/blog-single" className="text-gray-900 hover:text-blue-600">
                    Children That Needs Care
                  </Link>
                </h3>
                <span className="text-gray-500 text-sm block mb-4">July 26, 2018</span>
                <p className="text-gray-600 mb-4">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                </p>
                <Link to="/blog-single" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Link to="/blog-single" className="block mb-3">
                <img src="/images/img_4.jpg" alt="Image placeholder" className="w-full" />
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <Link to="/blog-single" className="text-gray-900 hover:text-blue-600">
                    Be A Volunteer Today
                  </Link>
                </h3>
                <span className="text-gray-500 text-sm block mb-4">July 26, 2018</span>
                <p className="text-gray-600 mb-4">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                </p>
                <Link to="/blog-single" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>

            {/* Blog Post 5 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Link to="/blog-single" className="block mb-3">
                <img src="/images/img_5.jpg" alt="Image placeholder" className="w-full" />
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <Link to="/blog-single" className="text-gray-900 hover:text-blue-600">
                    You May Save The Life of A Child
                  </Link>
                </h3>
                <span className="text-gray-500 text-sm block mb-4">July 26, 2018</span>
                <p className="text-gray-600 mb-4">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                </p>
                <Link to="/blog-single" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>

            {/* Blog Post 6 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Link to="/blog-single" className="block mb-3">
                <img src="/images/img_6.jpg" alt="Image placeholder" className="w-full" />
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <Link to="/blog-single" className="text-gray-900 hover:text-blue-600">
                    Children That Needs Care
                  </Link>
                </h3>
                <span className="text-gray-500 text-sm block mb-4">July 26, 2018</span>
                <p className="text-gray-600 mb-4">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                </p>
                <Link to="/blog-single" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>

            {/* Blog Post 7 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Link to="/blog-single" className="block mb-3">
                <img src="/images/img_4.jpg" alt="Image placeholder" className="w-full" />
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <Link to="/blog-single" className="text-gray-900 hover:text-blue-600">
                    Be A Volunteer Today
                  </Link>
                </h3>
                <span className="text-gray-500 text-sm block mb-4">July 26, 2018</span>
                <p className="text-gray-600 mb-4">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                </p>
                <Link to="/blog-single" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>

            {/* Blog Post 8 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Link to="/blog-single" className="block mb-3">
                <img src="/images/img_5.jpg" alt="Image placeholder" className="w-full" />
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <Link to="/blog-single" className="text-gray-900 hover:text-blue-600">
                    You May Save The Life of A Child
                  </Link>
                </h3>
                <span className="text-gray-500 text-sm block mb-4">July 26, 2018</span>
                <p className="text-gray-600 mb-4">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                </p>
                <Link to="/blog-single" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>

            {/* Blog Post 9 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Link to="/blog-single" className="block mb-3">
                <img src="/images/img_6.jpg" alt="Image placeholder" className="w-full" />
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <Link to="/blog-single" className="text-gray-900 hover:text-blue-600">
                    Children That Needs Care
                  </Link>
                </h3>
                <span className="text-gray-500 text-sm block mb-4">July 26, 2018</span>
                <p className="text-gray-600 mb-4">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                </p>
                <Link to="/blog-single" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

 
    </div>
  );
};

export default Blog;