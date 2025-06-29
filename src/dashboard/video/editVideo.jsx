import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { toast } from 'sonner';
import { Toaster } from '../../components/ui/sonner';
import ApiService from '../../config/ApiConfig';

const types = [
  'SGBV_VAWG',
  'Fundraising',
  'Events',
  'Community',
];
const statuses = ['PUBLISHED', 'DRAFT'];

const EditVideo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    type: types[0],
    status: statuses[0],
    isFeatured: false
  });
  
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVideo = async () => {
      setLoading(true);
      setError('');
      try {
        const video = await ApiService.getMediaVideoById(id);
        setFormData({
          title: video.title || '',
          url: video.url || '',
          type: video.type || types[0],
          status: video.status || statuses[0],
          isFeatured: video.isFeatured || false
        });
      } catch (err) {
        setError('Failed to fetch video details.');
        toast.error('Failed to fetch video details.');
      } finally {
        setLoading(false);
      }
    };
    
    if (id) {
      fetchVideo();
    }
  }, [id]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await ApiService.updateVideoMedia(id, formData);
      toast.success('Video updated successfully!');
      setTimeout(() => navigate('/dashboard/video'), 1200);
    } catch (err) {
      toast.error('Failed to update video.');
      console.error('Update error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md mt-8">
        <div className="text-center py-8 text-blue-600 font-semibold">Loading video details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md mt-8">
        <div className="text-center py-8 text-red-600 font-semibold">{error}</div>
        <button 
          onClick={() => navigate('/dashboard/video')}
          className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
        >
          Back to Videos
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Edit Video</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Video URL</label>
          <input
            type="url"
            className="w-full border rounded px-3 py-2"
            value={formData.url}
            onChange={(e) => handleInputChange('url', e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Type</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={formData.type}
            onChange={(e) => handleInputChange('type', e.target.value)}
          >
            {types.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Status</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={formData.status}
            onChange={(e) => handleInputChange('status', e.target.value)}
          >
            {statuses.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="mb-4 flex items-center gap-4">
          <label className="font-semibold">Featured?</label>
          <input
            type="checkbox"
            checked={formData.isFeatured}
            onChange={(e) => handleInputChange('isFeatured', e.target.checked)}
            className="h-5 w-5"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            disabled={submitting}
          >
            {submitting ? 'Updating...' : 'Update Video'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/dashboard/video')}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            disabled={submitting}
          >
            Cancel
          </button>
        </div>
      </form>
      <Toaster position="top-right" richColors />
    </div>
  );
};

export default EditVideo;
