import React, { useState } from 'react';

const statuses = ['Pending', 'Reviewed', 'Implemented'];

const AddSuggestion = () => {
  const [text, setText] = useState('');
  const [user, setUser] = useState('');
  const [status, setStatus] = useState(statuses[0]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submit
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    setText('');
    setUser('');
    setStatus(statuses[0]);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Add Suggestion</h2>
      {success && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">Suggestion added successfully!</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Suggestion</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">User</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Status</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {statuses.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Suggestion
        </button>
      </form>
    </div>
  );
};

export default AddSuggestion;
