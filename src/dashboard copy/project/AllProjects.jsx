import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Mock data for projects
const mockProjects = [
  { 
    id: 1, 
    title: 'Clean Water Initiative', 
    target: '$50,000',
    raised: '$35,000',
    status: 'Active',
    startDate: '2023-10-01',
    endDate: '2024-02-28'
  },
  { 
    id: 2, 
    title: 'Education for All', 
    target: '$75,000',
    raised: '$45,000',
    status: 'Active',
    startDate: '2023-09-15',
    endDate: '2024-03-15'
  },
  { 
    id: 3, 
    title: 'Food Security Program', 
    target: '$25,000',
    raised: '$25,000',
    status: 'Completed',
    startDate: '2023-08-01',
    endDate: '2023-12-31'
  },
  { 
    id: 4, 
    title: 'Healthcare Access', 
    target: '$100,000',
    raised: '$15,000',
    status: 'Active',
    startDate: '2023-11-01',
    endDate: '2024-05-30'
  },
];

const AllProjects = () => {
  const [projects] = useState(mockProjects);
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  const filteredProjects = useMemo(() => {
    return projects.filter(project =>
      project.title.toLowerCase().includes(filter.toLowerCase()) ||
      project.status.toLowerCase().includes(filter.toLowerCase())
    );
  }, [projects, filter]);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getProgressPercentage = (raised, target) => {
    const raisedAmount = parseFloat(raised.replace('$', '').replace(',', ''));
    const targetAmount = parseFloat(target.replace('$', '').replace(',', ''));
    return Math.round((raisedAmount / targetAmount) * 100);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">All Projects</h1>
        <Link to="/dashboard/projects/add" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add New Project
        </Link>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by title or status..."
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
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Progress</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Duration</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProjects.map(project => (
              <tr key={project.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">{project.title}</p>
                      <p className="text-gray-600 whitespace-no-wrap">Target: {project.target}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="w-full">
                    <div className="text-gray-900 whitespace-no-wrap mb-1">
                      {project.raised} raised
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${getProgressPercentage(project.raised, project.target)}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                    project.status === 'Active' ? 'text-green-900' : 'text-blue-900'
                  }`}>
                    <span aria-hidden className={`absolute inset-0 ${
                      project.status === 'Active' ? 'bg-green-200' : 'bg-blue-200'
                    } opacity-50 rounded-full`}></span>
                    <span className="relative">{project.status}</span>
                  </span>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{project.startDate}</p>
                  <p className="text-gray-600 whitespace-no-wrap">to {project.endDate}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <Link to={`/dashboard/projects/edit/${project.id}`} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
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

export default AllProjects; 