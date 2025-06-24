import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const mockImage = {
  id: 1,
  title: 'School Event',
  category: 'Events',
  url: '/src/assets/images/img_1.jpg',
};

const categories = ['Events', 'Fundraising', 'Community'];

const EditImage = () => {
  const { id } = useParams();
  // In a real app, fetch image by id. Here, use mockImage.
  const [title, setTitle] = useState(mockImage.title);
  const [category, setCategory] = useState(mockImage.category);
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submit
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Edit Image</h2>
      {success && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">Image updated successfully!</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Category</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div className="mt-2">
            <span className="block text-sm text-gray-500 mb-1">Current Image:</span>
            <img src={mockImage.url} alt={mockImage.title} className="h-24 w-36 object-cover rounded" />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Update Image
        </button>
      </form>
    </div>
  );
};

export default EditImage;
