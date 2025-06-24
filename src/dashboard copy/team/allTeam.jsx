import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const mockTeam = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'Director',
    photo: '/src/assets/images/person_1.jpg',
    joinDate: '2022-01-15',
  },
  {
    id: 2,
    name: 'Bob Smith',
    role: 'Coordinator',
    photo: '/src/assets/images/person_2.jpg',
    joinDate: '2023-03-10',
  },
  {
    id: 3,
    name: 'Carol Lee',
    role: 'Volunteer',
    photo: '/src/assets/images/person_3.jpg',
    joinDate: '2024-02-20',
  },
  // Add more mock team members as needed
];

const roles = ['All', 'Director', 'Coordinator', 'Volunteer'];
const ITEMS_PER_PAGE = 5;

const AllTeam = () => {
  const [filter, setFilter] = useState('All');
  const [page, setPage] = useState(1);

  const filteredTeam =
    filter === 'All'
      ? mockTeam
      : mockTeam.filter((member) => member.role === filter);

  const totalPages = Math.ceil(filteredTeam.length / ITEMS_PER_PAGE);
  const paginatedTeam = filteredTeam.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="p-6 bg-gray-100 rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">All Team Members</h2>
        <Link
          to="/dashboard/team/add"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Member
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
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Photo</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Join Date</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTeam.map((member) => (
              <tr key={member.id}>
                <td className="py-2 px-4 border-b">
                  <img src={member.photo} alt={member.name} className="h-12 w-12 object-cover rounded-full" />
                </td>
                <td className="py-2 px-4 border-b">{member.name}</td>
                <td className="py-2 px-4 border-b">{member.role}</td>
                <td className="py-2 px-4 border-b">{member.joinDate}</td>
                <td className="py-2 px-4 border-b">
                  <Link
                    to={`/dashboard/team/edit/${member.id}`}
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

export default AllTeam;
