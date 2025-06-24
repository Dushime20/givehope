import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const mockImages = [
  {
    id: 1,
    title: 'School Event',
    category: 'Events',
    url: '/src/assets/images/img_1.jpg',
    uploadDate: '2024-06-01',
  },
  {
    id: 2,
    title: 'Fundraiser',
    category: 'Fundraising',
    url: '/src/assets/images/img_2.jpg',
    uploadDate: '2024-06-02',
  },
  {
    id: 3,
    title: 'Community',
    category: 'Community',
    url: '/src/assets/images/img_3.jpg',
    uploadDate: '2024-06-03',
  },
  // Add more mock images as needed
];

const categories = ['All', 'Events', 'Fundraising', 'Community'];

const ITEMS_PER_PAGE = 5;

const AllImage = () => {
  const [filter, setFilter] = useState('All');
  const [page, setPage] = useState(1);

  const filteredImages =
    filter === 'All'
      ? mockImages
      : mockImages.filter((img) => img.category === filter);

  const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE);
  const paginatedImages = filteredImages.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="p-6 bg-gray-100 rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">All Images</h2>
        <Link
          to="/dashboard/image/add"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Image
        </Link>
      </div>
      <div className="mb-4">
        <select
          className="border rounded px-3 py-2"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setPage(1);
          }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Preview</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Upload Date</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedImages.map((img) => (
              <tr key={img.id}>
                <td className="py-2 px-4 border-b">
                  <img src={img.url} alt={img.title} className="h-16 w-24 object-cover rounded" />
                </td>
                <td className="py-2 px-4 border-b">{img.title}</td>
                <td className="py-2 px-4 border-b">{img.category}</td>
                <td className="py-2 px-4 border-b">{img.uploadDate}</td>
                <td className="py-2 px-4 border-b">
                  <Link
                    to={`/dashboard/image/edit/${img.id}`}
                    className="text-blue-600 hover:underline mr-2"
                  >
                    Edit
                  </Link>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-2 py-1">{page} / {totalPages}</span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllImage;
