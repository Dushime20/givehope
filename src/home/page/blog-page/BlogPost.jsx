import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../../../config/ApiConfig';
import Hero from '../home/Hero';


const BlogPost = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await ApiService.getAllBlog();
        if (!response || !response.items) {
          throw new Error('No blogs found');
        }
        console.log('Fetched blogs:', response.items); // Debugging log
        setBlogs(response.items || []);
      } catch (err) {
        setError('Failed to load blogs.');
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center py-16">Loading blogs...</div>;
  }
  if (error) {
    return <div className="text-center py-16 text-red-500">{error}</div>;
  }

  return (
    <div>
      <div className="py-16  bg-gray-50">
          {/* Hero Section */}
      <Hero/>
        <div className="container mx-auto px-4 mt-4">
          <h1 className='text-blue-600 text-3xl font-bold py-6'>Blogs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.length === 0 ? (
              <div className="col-span-3 text-center text-gray-500">No blogs found.</div>
            ) : (
              blogs.map((blog) => (
                <div key={blog.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <Link to={`/blog-single/${blog.id}`} className="block mb-3">
                    <img
                      src={blog.imageUrl || '/src/assets/images/placeholder.jpg'}
                      alt={blog.title || 'Blog image'}
                      className="w-full h-56 object-cover"
                      crossOrigin="anonymous"
                      onError={e => { e.target.src = '/src/assets/images/placeholder.jpg'; }}
                    />
                  </Link>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      <Link to={`/blog-single/${blog.id}`} className="text-gray-900 hover:text-blue-600">
                        {blog.title}
                      </Link>
                    </h3>
                    <span className="text-gray-500 text-sm block mb-4">{new Date(blog.createdAt).toLocaleDateString()}</span>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {(() => {
                        let content = blog.content || '';
                        if (content.startsWith('<p>')) {
                          content = content.replace(/^<p>/, '').replace(/<\/p>$/, '');
                        }
                        return content.slice(0, 120) + (content.length > 120 ? '...' : '');
                      })()}
                    </p>
                    <Link to={`/blog-single/${blog.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                      Read More
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost