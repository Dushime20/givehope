import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Mock data for blogs
const mockBlogs = [
  { id: 1, title: 'The Importance of Giving Back', author: 'Jane Doe', date: '2023-10-26', status: 'Published' },
  { id: 2, title: 'Our Latest Community Project', author: 'John Smith', date: '2023-10-25', status: 'Draft' },
  { id: 3, title: 'A Day in the Life of a Volunteer', author: 'Alice Johnson', date: '2023-10-24', status: 'Published' },
  { id: 4, title: 'How Donations Make a Difference', author: 'Bob Brown', date: '2023-10-22', status: 'Published' },
  { id: 5, title: 'Upcoming Charity Events', author: 'Jane Doe', date: '2023-10-20', status: 'Draft' },
  { id: 6, title: 'Celebrating Our Milestones', author: 'John Smith', date: '2023-10-18', status: 'Published' },
];

const AllBlogs = () => {
  const [blogs] = useState(mockBlogs);
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog =>
      blog.title.toLowerCase().includes(filter.toLowerCase()) ||
      blog.author.toLowerCase().includes(filter.toLowerCase())
    );
  }, [blogs, filter]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">All Blogs</h1>
        <Link to="/dashboard/blogs/add" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add New Blog
        </Link>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by title or author..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Author</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentBlogs.map(blog => (
              <tr key={blog.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{blog.title}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{blog.author}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{blog.date}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className={`relative inline-block px-3 py-1 font-semibold leading-tight ${blog.status === 'Published' ? 'text-green-900' : 'text-yellow-900'}`}>
                    <span aria-hidden className={`absolute inset-0 ${blog.status === 'Published' ? 'bg-green-200' : 'bg-yellow-200'} opacity-50 rounded-full`}></span>
                    <span className="relative">{blog.status}</span>
                  </span>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <Link to={`/dashboard/blogs/edit/${blog.id}`} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
                  <button className="text-red-600 hover:text-red-900 ml-4">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="py-5">
        <nav className="flex justify-center">
          <ul className="flex list-style-none">
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i}>
                <button
                  onClick={() => paginate(i + 1)}
                  className={`px-3 py-1 border rounded-md mx-1 ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AllBlogs;
