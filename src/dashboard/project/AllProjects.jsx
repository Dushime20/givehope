import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '@/config/ApiConfig';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 10, pages: 0 });
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingProjectId, setDeletingProjectId] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await ApiService.getAllProjectsAdmin();
        console.log('Projects response:', response); // Debug log
        
        // Handle the response structure: { data: [...], meta: {...} }
        if (response.data && Array.isArray(response.data)) {
          setProjects(response.data);
          setMeta(response.meta || { total: response.data.length, page: 1, limit: 10, pages: 1 });
        } else {
          // Fallback if response structure is different
          setProjects(Array.isArray(response) ? response : []);
          setMeta({ total: Array.isArray(response) ? response.length : 0, page: 1, limit: 10, pages: 1 });
        }
      } catch (err) {
        setError('Failed to fetch projects.');
        toast.error('Failed to fetch projects.');
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Helper function to format tags display
  const formatTags = (tags) => {
    if (!tags) return '';
    
    if (Array.isArray(tags)) {
      return tags.join(', ');
    }
    
    if (typeof tags === 'string') {
      if (tags.startsWith('[') && tags.endsWith(']')) {
        try {
          const parsed = JSON.parse(tags);
          if (Array.isArray(parsed)) {
            return parsed.join(', ');
          }
        } catch (e) {
          // If JSON parsing fails, return as is
        }
      }
      return tags;
    }
    
    return '';
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString();
  };

  // Helper function to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  // Helper function to calculate progress percentage
  const getProgressPercentage = (raised, target) => {
    if (!target || target === 0) return 0;
    return Math.round((raised / target) * 100);
  };

  const filteredProjects = useMemo(() => {
    return projects.filter(project =>
      (project.title || '').toLowerCase().includes(filter.toLowerCase()) ||
      (project.status || '').toLowerCase().includes(filter.toLowerCase()) ||
      formatTags(project.tags).toLowerCase().includes(filter.toLowerCase())
    );
  }, [projects, filter]);

  const handleDeleteClick = (project) => {
    setProjectToDelete(project);
    setShowDeleteDialog(true);
  };

  const handleDeleteConfirm = async () => {
    if (!projectToDelete) return;
    
    try {
      setDeletingProjectId(projectToDelete.id);
      await ApiService.deleteProjectById(projectToDelete.id);
      
      // Remove the project from the local state
      setProjects(projects.filter(project => project.id !== projectToDelete.id));
      toast.success('Project deleted successfully');
    } catch (err) {
      toast.error('Failed to delete project');
      console.error('Error deleting project:', err);
    } finally {
      setDeletingProjectId(null);
      setShowDeleteDialog(false);
      setProjectToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteDialog(false);
    setProjectToDelete(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">All Projects</h1>
        <Link to="/dashboard/project/add" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add New Project
        </Link>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by title, status, or tags..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {loading ? (
        <div className="text-center py-10 text-blue-600 font-semibold">Loading projects...</div>
      ) : error ? (
        <div className="text-center py-10 text-red-600 font-semibold">{error}</div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Project</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Funding Progress</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tags</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Duration</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map(project => (
                <tr key={project.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      {project.imageUrl && (
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-12 h-12 rounded-lg object-cover mr-3"
                          crossOrigin="anonymous"
                        />
                      )}
                      <div>
                        <p className="text-gray-900 font-semibold whitespace-no-wrap">{project.title}</p>
                        <p className="text-gray-600 text-xs whitespace-no-wrap">
                          {project.beneficiaries} beneficiaries
                        </p>
                        <p className="text-gray-500 text-xs whitespace-no-wrap">
                          Target: {formatCurrency(project.targetFund)}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="w-full">
                      <div className="text-gray-900 whitespace-no-wrap mb-1">
                        {formatCurrency(project.raisedFund)} raised
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${getProgressPercentage(project.raisedFund, project.targetFund)}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {getProgressPercentage(project.raisedFund, project.targetFund)}% complete
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex flex-wrap gap-1">
                      {formatTags(project.tags).split(', ').map((tag, index) => (
                        <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex flex-col gap-1">
                      <span className={`relative inline-block px-3 py-1 font-semibold leading-tight text-xs ${
                        project.status === 'PUBLISHED' ? 'text-green-900' : 
                        project.status === 'FUNDING' ? 'text-blue-900' : 
                        project.status === 'DRAFT' ? 'text-yellow-900' : 'text-gray-900'
                      }`}>
                        <span aria-hidden className={`absolute inset-0 ${
                          project.status === 'PUBLISHED' ? 'bg-green-200' : 
                          project.status === 'FUNDING' ? 'bg-blue-200' : 
                          project.status === 'DRAFT' ? 'bg-yellow-200' : 'bg-gray-200'
                        } opacity-50 rounded-full`}></span>
                        <span className="relative">{project.status}</span>
                      </span>
                      {project.isFeatured && (
                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                          Featured
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{formatDate(project.startDate)}</p>
                    <p className="text-gray-600 whitespace-no-wrap">to {formatDate(project.endDate)}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <Link to={`/dashboard/project/edit/${project.id}`} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</Link>
                    <button 
                      onClick={() => handleDeleteClick(project)}
                      disabled={deletingProjectId === project.id}
                      className="text-red-600 hover:text-red-900 disabled:opacity-50"
                    >
                      {deletingProjectId === project.id ? 'Deleting...' : 'Delete'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {filteredProjects.length === 0 && !loading && !error && (
        <div className="text-center py-10 text-gray-500 font-semibold">No projects found.</div>
      )}

      {/* AlertDialog for Delete Confirmation */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the project "{projectToDelete?.title}" and remove it from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleDeleteCancel}>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDeleteConfirm}
              disabled={deletingProjectId === projectToDelete?.id}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {deletingProjectId === projectToDelete?.id ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Toaster position="top-right" richColors />
    </div>
  );
};

export default AllProjects; 