import React from 'react';
import { Link } from 'react-router-dom';

const BlogSingle = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/images/bg_1.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <span className="text-sm uppercase tracking-wider">July 30, 2018 — by Admin</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Water Is Life. We Successfully Provide Clean Water in South East Asia
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            <img src="/images/bg_1.jpg" alt="Blog post" className="w-full rounded-lg mb-8" />
            
            <div className="prose max-w-none">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.
              </p>
              <p className="mb-4">
                Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                Molestiae cupiditate inventore animi, maxime sapiente optio
              </h2>
              <p className="mb-4">
                Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.
              </p>

              <img src="/images/image_10.jpg" alt="Blog content" className="w-full rounded-lg my-8" />

              <p className="mb-4">
                Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Charities</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Donation</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Child</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">School</span>
              </div>

              {/* Comments Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-8">6 Comments</h3>
                
                {/* Comment List */}
                <div className="space-y-8">
                  {/* Comment Item */}
                  <div className="flex gap-4">
                    <img src="/images/person_1.jpg" alt="User" className="w-12 h-12 rounded-full" />
                    <div>
                      <h4 className="font-bold">Jean Doe</h4>
                      <p className="text-sm text-gray-500">January 9, 2018 at 2:21pm</p>
                      <p className="mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?
                      </p>
                      <button className="text-blue-600 mt-2">Reply</button>
                    </div>
                  </div>

                  {/* Nested Comments */}
                  <div className="ml-12 space-y-8">
                    {/* Similar structure for nested comments */}
                  </div>
                </div>

                {/* Comment Form */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-8">Leave a Comment</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                      <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                      <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
                      <input type="url" id="website" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea id="message" rows="6" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search Box */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <form className="relative">
                <input
                  type="text"
                  placeholder="Type a keyword and hit enter"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="absolute right-3 top-2.5 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-600 hover:text-blue-600">Charity <span className="text-gray-400">(12)</span></Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-600">Donations <span className="text-gray-400">(22)</span></Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-600">News <span className="text-gray-400">(37)</span></Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-600">Updates <span className="text-gray-400">(42)</span></Link></li>
              </ul>
            </div>

            {/* Author Box */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <img src="/images/person_1.jpg" alt="Author" className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-4">About The Author</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!
              </p>
              <Link to="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                Read More
              </Link>
            </div>

            {/* Tag Cloud */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4">Tag Cloud</h3>
              <div className="flex flex-wrap gap-2">
                <Link to="#" className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-blue-100">Charities</Link>
                <Link to="#" className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-blue-100">Missionary</Link>
                <Link to="#" className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-blue-100">School</Link>
                <Link to="#" className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-blue-100">Donation</Link>
                <Link to="#" className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-blue-100">Children</Link>
                <Link to="#" className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-blue-100">Africa</Link>
              </div>
            </div>

            {/* Paragraph */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Paragraph</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;