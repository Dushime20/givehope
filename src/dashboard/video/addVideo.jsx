import React, { useState } from 'react';
import ApiService from '../../config/ApiConfig';
import { toast } from 'sonner';
import { Toaster } from '../../components/ui/sonner';
import { useNavigate } from 'react-router-dom';

const types = [
  'SGBV_VAWG',
  'Fundraising',
  'Events',
  'Community',
];
const statuses = ['PUBLISHED', 'DRAFT'];

const AddVideo = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [type, setType] = useState(types[0]);
  const [isFeatured, setIsFeatured] = useState(false);
  const [status, setStatus] = useState(statuses[0]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await ApiService.uploadVideoMedia({ url, title, type, isFeatured, status });
      toast.success('Video added successfully!');
      setTimeout(() => navigate('/dashboard/video'), 1200);
    } catch (err) {
      toast.error('Failed to add video.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Add New Video</h2>
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
          <label className="block mb-1 font-semibold">Video URL</label>
          <input
            type="url"
            className="w-full border rounded px-3 py-2"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Type</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {types.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="mb-4 flex items-center gap-4">
          <label className="font-semibold">Featured?</label>
          <input
            type="checkbox"
            checked={isFeatured}
            onChange={() => setIsFeatured((v) => !v)}
            className="h-5 w-5"
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
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Video'}
        </button>
      </form>
      <Toaster position="top-right" richColors />
    </div>
  );
};

export default AddVideo;
