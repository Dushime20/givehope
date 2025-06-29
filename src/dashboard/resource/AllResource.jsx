import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import AddResourceGroup from './AddResourceGroup';
import ApiService from '../../config/ApiConfig';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../../components/ui/alert-dialog';

const AllResources = () => {
  const [resources, setResources] = useState([]); // flat list of all resources
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [resourceToDelete, setResourceToDelete] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      console.log('Fetching resources...'); // Debugging log
      setLoading(true);
      try {
        const res = await ApiService.getAllResources();
            console.log('Fetched resources:', res); // Debugging log
        if (!res || !Array.isArray(res)) {
          throw new Error('Invalid resources data');
        }
        const flatResources = res.flatMap(group =>
          (group.resources || []).map(resource => ({
            ...resource,
            groupName: group.name,
            groupId: group.id
          }))
        );
        setResources(flatResources);
      } catch (err) {
        toast.error('Failed to load resources.');
      } finally {
        setLoading(false);
      }
    };
    fetchResources();
  }, []);

  const filteredResources = useMemo(() => {
    if (!filter.trim()) return resources;
    return resources.filter(resource =>
      (resource.description?.toLowerCase().includes(filter.toLowerCase()) ||
        resource.groupName?.toLowerCase().includes(filter.toLowerCase()))
    );
  }, [resources, filter]);

  const handleDelete = async () => {
    if (!resourceToDelete) return;
    
    setDeleteLoading(true);
    try {
      await ApiService.deleteResourceById(resourceToDelete.id);
      toast.success('Resource deleted successfully');
      // Remove the deleted resource from the list
      setResources(prev => prev.filter(resource => resource.id !== resourceToDelete.id));
    } catch (error) {
      console.error('Error deleting resource:', error);
      toast.error('Failed to delete resource');
    } finally {
      setDeleteLoading(false);
      setResourceToDelete(null);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3 sm:gap-0">
        <h1 className="text-3xl font-bold text-gray-800">All Resources</h1>
        <div className="flex gap-2">
          <Link to="/dashboard/resources/add" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Add New Resource
          </Link>
          <button
            onClick={() => setShowGroupModal(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 shadow"
          >
            + Add Resource Group
          </button>
        </div>
      </div>
      <AddResourceGroup open={showGroupModal} onClose={() => setShowGroupModal(false)} />

      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by resource or group..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {loading ? (
        <div className="text-center py-10 text-blue-600 font-semibold">Loading resources...</div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {filteredResources.length === 0 ? (
            <div className="text-center py-10 text-gray-500 font-semibold">No resources found.</div>
          ) : (
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Description</th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">File</th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Group</th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Created</th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Updated</th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredResources.map(resource => (
                  <tr key={resource.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{resource.description}</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {resource.fileUrl ? (
                        <a href={resource.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Download</a>
                      ) : (
                        <span className="text-gray-400">No file</span>
                      )}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{resource.groupName}</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{new Date(resource.createdAt).toLocaleDateString()}</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{resource.updatedAt ? new Date(resource.updatedAt).toLocaleDateString() : '-'}</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <Link to={`/dashboard/resources/edit/${resource.id}`} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <button 
                            onClick={() => setResourceToDelete(resource)}
                            className="text-red-600 hover:text-red-900 ml-4"
                          >
                            Delete
                          </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete the resource "{resourceToDelete?.description}".
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => setResourceToDelete(null)}>
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={handleDelete}
                              disabled={deleteLoading}
                              className="bg-red-600 hover:bg-red-700"
                            >
                              {deleteLoading ? 'Deleting...' : 'Delete'}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default AllResources;
