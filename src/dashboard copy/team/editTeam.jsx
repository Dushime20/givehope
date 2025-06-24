import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const mockMember = {
  id: 1,
  name: 'Alice Johnson',
  role: 'Director',
  photo: '/src/assets/images/person_1.jpg',
  joinDate: '2022-01-15',
};

const EditTeam = () => {
  const { id } = useParams();
  // In a real app, fetch member by id. Here, use mockMember.
  const [name, setName] = useState(mockMember.name);
  const [role, setRole] = useState(mockMember.role);
  const [photo, setPhoto] = useState(null);
  const [joinDate, setJoinDate] = useState(mockMember.joinDate);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submit
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Edit Team Member</h2>
      {success && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">Team member updated successfully!</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Role</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Photo</label>
          <input
            type="file"
            accept="image/*"
            className="w-full"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
          <div className="mt-2">
            <span className="block text-sm text-gray-500 mb-1">Current Photo:</span>
            <img src={mockMember.photo} alt={mockMember.name} className="h-24 w-24 object-cover rounded-full" />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Join Date</label>
          <input
            type="date"
            className="w-full border rounded px-3 py-2"
            value={joinDate}
            onChange={(e) => setJoinDate(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Update Member
        </button>
      </form>
    </div>
  );
};

export default EditTeam;
