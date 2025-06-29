import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ApiService from '../../config/ApiConfig';
import { toast } from 'sonner';
import { Toaster } from '../../components/ui/sonner';

const EditResource = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    description: '',
    groupId: '',
    file: null
  });
  
  const [resourceGroups, setResourceGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [filePreview, setFilePreview] = useState('');
  const [currentFile, setCurrentFile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        // Fetch resource details
        const resource = await ApiService.getResourceById(id);
        console.log('Fetched resource:', resource);
        
        setFormData({
          description: resource.description || '',
          groupId: resource.groupId || resource.group?.id || '',
          file: null
        });
        
        // Store current file information
        if (resource.fileUrl) {
          setCurrentFile({
            url: resource.fileUrl,
            name: resource.fileUrl.split('/').pop() || 'Current file'
          });
        }
        
        // Fetch resource groups for dropdown
        const groups = await ApiService.getAllResourceGroups();
        setResourceGroups(groups || []);
      } catch (err) {
        setError('Failed to fetch resource details.');
        toast.error('Failed to fetch resource details.');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };
    
    if (id) {
      fetchData();
    }
  }, [id]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
      setFilePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const updateData = new FormData();
      updateData.append('description', formData.description);
      updateData.append('groupId', formData.groupId);
      if (formData.file) {
        updateData.append('file', formData.file);
      }

      await ApiService.updateResourceById(id, updateData);
      toast.success('Resource updated successfully!');
      setTimeout(() => navigate('/dashboard/resources'), 1200);
    } catch (err) {
      toast.error('Failed to update resource.');
      console.error('Update error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="text-center py-8 text-blue-600 font-semibold">Loading resource details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="text-center py-8 text-red-600 font-semibold">{error}</div>
        <button 
          onClick={() => navigate('/dashboard/resources')}
          className="w-full max-w-md mx-auto block bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          Back to Resources
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Resource</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="groupId">
              Resource Group
            </label>
            <select
              id="groupId"
              value={formData.groupId}
              onChange={(e) => handleInputChange('groupId', e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select a resource group</option>
              {resourceGroups.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
              File
            </label>
            
            {/* Current file display */}
            {currentFile && (
              <div className="mb-3 p-3 bg-gray-50 rounded border">
                <p className="text-sm text-gray-600 mb-1">Current file:</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600">{currentFile.name}</span>
                  <a 
                    href={currentFile.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-blue-500 hover:text-blue-700 underline"
                  >
                    View File
                  </a>
                </div>
              </div>
            )}
            
            {/* New file upload */}
            <input
              id="file"
              type="file"
              onChange={handleFileChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              accept="*/*"
            />
            <p className="text-xs text-gray-500 mt-1">
              {currentFile ? 'Upload a new file to replace the current one' : 'Select a file to upload'}
            </p>
            
            {filePreview && (
              <div className="mt-2 p-2 bg-green-50 rounded border">
                <p className="text-sm text-gray-600">New file preview:</p>
                <p className="text-sm text-green-600">{formData.file?.name}</p>
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={submitting}
            >
              {submitting ? 'Updating...' : 'Update Resource'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard/resources')}
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

export default EditResource;
