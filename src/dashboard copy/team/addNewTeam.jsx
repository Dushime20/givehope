import React, { useState } from 'react';

const AddNewTeam = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [photo, setPhoto] = useState(null);
  const [joinDate, setJoinDate] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submit
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    setName('');
    setRole('');
    setPhoto(null);
    setJoinDate('');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Add New Team Member</h2>
      {success && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">Team member added successfully!</div>
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
            required
          />
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
          Add Member
        </button>
      </form>
    </div>
  );
};

export default AddNewTeam; 