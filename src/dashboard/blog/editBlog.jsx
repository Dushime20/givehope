import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ApiService from '@/config/ApiConfig';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const statusOptions = [
  { value: 'PUBLISHED', label: 'Published' },
  { value: 'DRAFT', label: 'Draft' },
];

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [title, setTitle] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [status, setStatus] = useState('PUBLISHED');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Helper function to parse tags from backend response
  const parseTags = (tagsData) => {
    if (!tagsData) return [];
    
    // If it's already an array
    if (Array.isArray(tagsData)) {
      return tagsData;
    }
    
    // If it's a string, parse it
    if (typeof tagsData === 'string') {
      // If it looks like JSON, try to parse it
      if (tagsData.startsWith('[') && tagsData.endsWith(']')) {
        try {
          const parsed = JSON.parse(tagsData);
          if (Array.isArray(parsed)) {
            return parsed;
          }
        } catch (e) {
          // If JSON parsing fails, treat as comma-separated
        }
      }
      // Treat as comma-separated string
      return tagsData.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    }
    
    return [];
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await ApiService.getBlogById(id);
        console.log('Blog response:', response); // Debug log
        
        // The response is the blog object directly, not nested
        const blogData = response;
        
        setBlog(blogData);
        setTitle(blogData.title || '');
        setContent(blogData.content || '');
        setStatus(blogData.status || 'PUBLISHED');
        setTags(parseTags(blogData.tags));
        
        // Set the image preview to the existing image URL
        if (blogData.imageUrl) {
          console.log('Setting image preview to:', blogData.imageUrl); // Debug log
          setImagePreview(blogData.imageUrl);
        } else {
          console.log('No imageUrl found in response');
        }
      } catch (err) {
        setError('Failed to fetch blog.');
        console.error('Error fetching blog:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag) => {
    setTags(tags.filter(t => t !== tag));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);
    
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      // Send tags as comma-separated string
      formData.append('tags', tags.join(','));
      formData.append('status', status);
      
      if (imageFile) {
        formData.append('file', imageFile);
      }

      console.log('Sending FormData with tags:', tags.join(',')); // Debug log
      await ApiService.updateBlogById(id, formData);
      setSuccess('Blog updated successfully!');
      console.log('Blog updated with FormData');
      setTimeout(() => navigate('/dashboard/blog'), 1200);
    } catch (err) {
      setError('Failed to update blog.');
      console.error('Error updating blog:', err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-blue-600 font-semibold">Loading blog...</div>
    </div>;
  }

  if (!blog) {
    return <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-red-600 font-semibold">Blog not found.</div>
    </div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Blog</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Blog Image
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block text-sm text-gray-700 border border-gray-300 rounded cursor-pointer focus:outline-none"
            />
            {imagePreview && (
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="mt-2 h-32 object-contain rounded"
                crossOrigin="anonymous"
                onLoad={() => console.log('Image loaded successfully:', imagePreview)}
                onError={(e) => console.error('Image failed to load:', imagePreview, e)}
              />
            )}
            {blog?.imageUrl && !imageFile && (
              <p className="text-xs text-gray-500 mt-1">Current image will be kept if no new image is selected</p>
            )}
          
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Tags</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={tagInput}
                onChange={e => setTagInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? handleAddTag(e) : null}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                placeholder="Add tag"
              />
              <button onClick={handleAddTag} className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600" type="button">Add</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs flex items-center">
                  {tag}
                  <button type="button" className="ml-1 text-red-500" onClick={() => handleRemoveTag(tag)}>&times;</button>
                </span>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
            <select
              value={status}
              onChange={e => setStatus(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            >
              {statusOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
            <ReactQuill theme="snow" value={content} onChange={setContent} className="bg-white" />
          </div>
          {error && <div className="text-red-600 mb-2">{error}</div>}
          {success && <div className="text-green-600 mb-2">{success}</div>}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={submitting}
            >
              {submitting ? 'Updating...' : 'Update Blog'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard/blog')}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={submitting}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
