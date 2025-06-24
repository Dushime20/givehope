import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const mockSuggestions = [
  {
    id: 1,
    text: 'Add a donation progress bar on the homepage.',
    user: 'John Doe',
    date: '2024-06-01',
    status: 'Pending',
  },
  {
    id: 2,
    text: 'Feature more success stories.',
    user: 'Jane Smith',
    date: '2024-06-02',
    status: 'Reviewed',
  },
  {
    id: 3,
    text: 'Add a volunteer signup form.',
    user: 'Alice Lee',
    date: '2024-06-03',
    status: 'Implemented',
  },
  // Add more mock suggestions as needed
];

const statuses = ['All', 'Pending', 'Reviewed', 'Implemented'];
const ITEMS_PER_PAGE = 5;

const AllSuggestion = () => {
  const [filter, setFilter] = useState('All');
  const [page, setPage] = useState(1);

  const filteredSuggestions =
    filter === 'All'
      ? mockSuggestions
      : mockSuggestions.filter((s) => s.status === filter);

  const totalPages = Math.ceil(filteredSuggestions.length / ITEMS_PER_PAGE);
  const paginatedSuggestions = filteredSuggestions.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="p-6 bg-gray-100 rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">All Suggestions</h2>
        <Link
          to="/dashboard/suggestion/add"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Suggestion
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
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Suggestion</th>
              <th className="py-2 px-4 border-b">User</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedSuggestions.map((s) => (
              <tr key={s.id}>
                <td className="py-2 px-4 border-b">{s.text}</td>
                <td className="py-2 px-4 border-b">{s.user}</td>
                <td className="py-2 px-4 border-b">{s.date}</td>
                <td className="py-2 px-4 border-b">{s.status}</td>
                <td className="py-2 px-4 border-b">
                  <Link
                    to={`/dashboard/suggestion/edit/${s.id}`}
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

export default AllSuggestion; 