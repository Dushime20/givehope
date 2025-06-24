import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const mockVideo = {
  id: 1,
  title: 'Charity Event Highlights',
  category: 'Events',
  url: 'https://www.w3schools.com/html/mov_bbb.mp4',
};

const categories = ['Events', 'Fundraising', 'Community'];

const EditVideo = () => {
  const { id } = useParams();
  // In a real app, fetch video by id. Here, use mockVideo.
  const [title, setTitle] = useState(mockVideo.title);
  const [category, setCategory] = useState(mockVideo.category);
  const [video, setVideo] = useState(null);
  const [videoUrl, setVideoUrl] = useState(mockVideo.url);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submit
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Edit Video</h2>
      {success && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">Video updated successfully!</div>
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
          <label className="block mb-1 font-semibold">Video File</label>
          <input
            type="file"
            accept="video/*"
            className="w-full"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Or Video URL</label>
          <input
            type="url"
            className="w-full border rounded px-3 py-2"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="https://example.com/video.mp4"
          />
          <div className="mt-2">
            <span className="block text-sm text-gray-500 mb-1">Current Video Preview:</span>
            <video src={videoUrl} controls className="h-24 w-36 rounded" />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Update Video
        </button>
      </form>
    </div>
  );
};

export default EditVideo;
