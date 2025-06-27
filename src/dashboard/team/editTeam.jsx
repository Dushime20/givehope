import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ApiService from '@/config/ApiConfig';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

const typeOptions = [
  { value: 'STAFF', label: 'Staff' },
  { value: 'EXCUTIVE', label: 'Executive' },
];

const EditTeam = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [bio, setBio] = useState('');
  const [type, setType] = useState('STAFF');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [currentImageUrl, setCurrentImageUrl] = useState('');
  
  // UI state
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Fetch team member data on component mount
  useEffect(() => {
    const fetchTeamMember = async () => {
      if (!id) return;
      
      setFetching(true);
      setError(null);
      
      try {
        console.log('Fetching team member with ID:', id);
        const response = await ApiService.getTeamMemberById(id);
        console.log('Team member data:', response);
        
        // Handle different response structures
        const memberData = response.member || response;
        
        setFirstName(memberData.firstName || '');
        setLastName(memberData.lastName || '');
        setRole(memberData.role || '');
        setBio(memberData.bio || '');
        setType(memberData.type || 'STAFF');
        setCurrentImageUrl(memberData.imageUrl || '');
        
      } catch (err) {
        console.error('Error fetching team member:', err);
        setError('Failed to fetch team member data.');
        toast.error('Failed to fetch team member data.');
      } finally {
        setFetching(false);
      }
    };

    fetchTeamMember();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    
    try {
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('role', role);
      formData.append('bio', bio);
      formData.append('type', type);
      
      // Only append file if a new image is selected
      if (imageFile) {
        formData.append('file', imageFile);
      }

      console.log('Updating team member with ID:', id);
      console.log('Sending data:', {
        firstName,
        lastName,
        role,
        bio,
        type,
        hasNewImage: !!imageFile
      });

      await ApiService.updateTeamMemberById(id, formData);
      setSuccess('Team member updated successfully!');
      toast.success('Team member updated successfully!');
      setTimeout(() => navigate('/dashboard/team'), 1200);
    } catch (err) {
      console.error('Error updating team member:', err);
      
      // Provide more specific error messages
      let errorMessage = 'Failed to update team member';
      if (err.response) {
        if (err.response.status === 404) {
          errorMessage = 'Team member not found';
        } else if (err.response.status === 403) {
          errorMessage = 'You do not have permission to update this team member';
        } else if (err.response.status === 500) {
          errorMessage = 'Server error occurred while updating team member';
        } else if (err.response.data && err.response.data.message) {
          errorMessage = err.response.data.message;
        }
      } else if (err.request) {
        errorMessage = 'Network error. Please check your connection and try again';
      }
      
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="text-center py-10 text-blue-600 font-semibold">
          Loading team member data...
        </div>
      </div>
    );
  }

  if (error && !fetching) {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="text-center py-10 text-red-600 font-semibold">
          {error}
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate('/dashboard/team')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to Team Members
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Team Member</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                First Name *
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                Last Name *
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                Role *
              </label>
              <input
                id="role"
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="e.g., Executive Director, Program Manager"
                required
              />
            </div>

            {/* Type */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
                Type
              </label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {typeOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Bio */}
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
                Bio *
              </label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Tell us about this team member's background, experience, and contributions..."
                required
              ></textarea>
            </div>

            {/* Profile Image */}
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Profile Image
              </label>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              
              {/* Current Image Display */}
              {currentImageUrl && !imagePreview && (
                <div className="mt-2">
                  <span className="block text-sm text-gray-500 mb-1">Current Image:</span>
                  <img 
                    src={currentImageUrl} 
                    alt={`${firstName} ${lastName}`}
                    className="h-32 object-contain rounded"
                    crossOrigin="anonymous"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback avatar */}
                  <div 
                    className="h-32 w-32 rounded flex items-center justify-center text-white font-semibold text-lg hidden"
                    style={{ backgroundColor: `hsl(${Math.abs(id?.charCodeAt(0) || 0) % 360}, 70%, 50%)` }}
                  >
                    {firstName?.charAt(0)?.toUpperCase()}{lastName?.charAt(0)?.toUpperCase()}
                  </div>
                </div>
              )}
              
              {/* New Image Preview */}
              {imagePreview && (
                <div className="mt-2">
                  <span className="block text-sm text-gray-500 mb-1">New Image Preview:</span>
                  <img src={imagePreview} alt="Preview" className="h-32 object-contain rounded" />
                </div>
              )}
            </div>
          </div>

          {error && <div className="text-red-600 mb-4">{error}</div>}
          {success && <div className="text-green-600 mb-4">{success}</div>}

          <div className="flex items-center justify-between mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              {loading ? 'Updating...' : 'Update Team Member'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard/team')}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading}
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

export default EditTeam;
