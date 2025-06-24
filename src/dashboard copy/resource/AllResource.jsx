import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Mock data for resources
const mockResources = [
  { id: 1, name: 'Community Food Bank Guide', type: 'PDF', date: '2023-10-26' },
  { id: 2, name: 'Volunteer Training Manual', type: 'Document', date: '2023-10-25' },
  { id: 3, name: 'Donation Impact Report', type: 'Spreadsheet', date: '2023-10-24' },
  { id: 4, name: 'Shelter Location Map', type: 'Image', date: '2023-10-22' },
  { id: 5, name: 'Annual Charity Gala Photos', type: 'Gallery', date: '2023-10-20' },
  { id: 6, name: 'Legal Aid Contact List', type: 'PDF', date: '2023-10-18' },
];

const AllResources = () => {
  const [resources] = useState(mockResources);
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const resourcesPerPage = 5;

  const filteredResources = useMemo(() => {
    return resources.filter(resource =>
      resource.name.toLowerCase().includes(filter.toLowerCase()) ||
      resource.type.toLowerCase().includes(filter.toLowerCase())
    );
  }, [resources, filter]);

  const indexOfLastResource = currentPage * resourcesPerPage;
  const indexOfFirstResource = indexOfLastResource - resourcesPerPage;
  const currentResources = filteredResources.slice(indexOfFirstResource, indexOfLastResource);
  const totalPages = Math.ceil(filteredResources.length / resourcesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">All Resources</h1>
        <Link to="/dashboard/resources/add" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add New Resource
        </Link>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by name or type..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Type</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentResources.map(resource => (
              <tr key={resource.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{resource.name}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{resource.type}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{resource.date}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <Link to={`/dashboard/resources/edit/${resource.id}`} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
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

export default AllResources;
