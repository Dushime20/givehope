import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Mock data - in a real app, you'd fetch this
const mockResources = [
  { id: 1, name: 'Community Food Bank Guide', type: 'PDF' },
  { id: 2, name: 'Volunteer Training Manual', type: 'Document' },
];

const EditResource = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resource, setResource] = useState(null);
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    // Find the resource from mock data
    const resourceToEdit = mockResources.find(r => r.id === parseInt(id));
    if (resourceToEdit) {
      setResource(resourceToEdit);
      setName(resourceToEdit.name);
      setType(resourceToEdit.type);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated data to a server
    console.log({ id, name, type });
    alert('Resource updated successfully!');
    navigate('/dashboard/resources');
  };

  if (!resource) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Resource</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Resource Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
              Resource Type
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>PDF</option>
              <option>Document</option>
              <option>Spreadsheet</option>
              <option>Image</option>
              <option>Gallery</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Resource
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard/resources')}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditResource;
