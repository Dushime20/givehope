import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ApiService from '@/config/ApiConfig';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

const statusOptions = [
  { value: 'DRAFT', label: 'Draft' },
  { value: 'PUBLISHED', label: 'Published' },
  { value: 'FUNDING', label: 'Funding' },
  { value: 'INPROGRESS', label: 'In Progress' },
  { value: 'COMPLETED', label: 'Completed' },
  { value: 'CANCELED', label: 'Canceled' },
  { value: 'ARCHIVED', label: 'Archived' },
];

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [beneficiaries, setBeneficiaries] = useState('');
  const [targetFund, setTargetFund] = useState('');
  const [status, setStatus] = useState('DRAFT');
  const [isFeatured, setIsFeatured] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
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

  // Helper function to format date for datetime-local input
  const formatDateForInput = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().slice(0, 16); // Format: YYYY-MM-DDTHH:MM
  };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await ApiService.getProjectById(id);
        console.log('Project response:', response); // Debug log
        
        // The response is the project object directly
        const projectData = response;
        
        setProject(projectData);
        setTitle(projectData.title || '');
        setDescription(projectData.description || '');
        setStatus(projectData.status || 'DRAFT');
        setTags(parseTags(projectData.tags));
        setBeneficiaries(projectData.beneficiaries || '');
        setTargetFund(projectData.targetFund || '');
        setIsFeatured(projectData.isFeatured || false);
        
        // Format dates for datetime-local inputs
        setStartDate(formatDateForInput(projectData.startDate));
        setEndDate(formatDateForInput(projectData.endDate));
        
        // Set the image preview to the existing image URL
        if (projectData.imageUrl) {
          console.log('Setting image preview to:', projectData.imageUrl);
          setImagePreview(projectData.imageUrl);
        } else {
          console.log('No imageUrl found in response');
        }
      } catch (err) {
        setError('Failed to fetch project.');
        toast.error('Failed to fetch project.');
        console.error('Error fetching project:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
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
      formData.append('description', description);
      formData.append('tags', tags.join(',')); // Comma-separated string
      formData.append('startDate', startDate);
      if (endDate) {
        formData.append('endDate', endDate);
      }
      formData.append('beneficiaries', beneficiaries);
      formData.append('targetFund', targetFund);
      formData.append('status', status);
      formData.append('isFeatured', isFeatured);
      
      if (imageFile) {
        formData.append('file', imageFile);
      }

      console.log('Sending project update data:', {
        title,
        description,
        tags: tags.join(','),
        startDate,
        endDate,
        beneficiaries,
        targetFund,
        status,
        isFeatured
      });

      await ApiService.updateProjectById(id, formData);
      setSuccess('Project updated successfully!');
      toast.success('Project updated successfully!');
      setTimeout(() => navigate('/dashboard/project'), 1200);
    } catch (err) {
      setError('Failed to update project.');
      toast.error('Failed to update project.');
      console.error('Error updating project:', err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-blue-600 font-semibold">Loading project...</div>
    </div>;
  }

  if (!project) {
    return <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-red-600 font-semibold">Project not found.</div>
    </div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Project</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Project Title *
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

            {/* Description */}
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description *
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              ></textarea>
            </div>

            {/* Tags */}
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Tags *</label>
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

            {/* Start Date */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                Start Date *
              </label>
              <input
                id="startDate"
                type="datetime-local"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            {/* End Date */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                End Date
              </label>
              <input
                id="endDate"
                type="datetime-local"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Beneficiaries */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="beneficiaries">
                Number of Beneficiaries *
              </label>
              <input
                id="beneficiaries"
                type="number"
                min="1"
                value={beneficiaries}
                onChange={(e) => setBeneficiaries(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            {/* Target Fund */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="targetFund">
                Target Fund (USD) *
              </label>
              <input
                id="targetFund"
                type="number"
                min="1"
                value={targetFund}
                onChange={(e) => setTargetFund(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                Status
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {statusOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Is Featured */}
            <div className="flex items-center">
              <input
                id="isFeatured"
                type="checkbox"
                checked={isFeatured}
                onChange={(e) => setIsFeatured(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="isFeatured" className="ml-2 block text-sm text-gray-900">
                Featured Project
              </label>
            </div>

            {/* Project Image */}
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Project Image
              </label>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              {project?.imageUrl && !imageFile && (
                <p className="text-xs text-gray-500 mt-1">Current image will be kept if no new image is selected</p>
              )}
            </div>
          </div>

          {error && <div className="text-red-600 mb-4">{error}</div>}
          {success && <div className="text-green-600 mb-4">{success}</div>}

          <div className="flex items-center justify-between mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={submitting}
            >
              {submitting ? 'Updating...' : 'Update Project'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard/project')}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={submitting}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <Toaster position="top-right" richColors />
    </div>
  );
};

export default EditProject; 