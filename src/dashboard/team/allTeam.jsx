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

const typeOptions = [
  { value: 'STAFF', label: 'Staff' },
  { value: 'EXCUTIVE', label: 'Executive' },
];

const statusOptions = [
  { value: 'ACTIVE', label: 'Active' },
  { value: 'INACTIVE', label: 'Inactive' },
];

const AllTeam = () => {
  const [members, setMembers] = useState([]);
  const [pagination, setPagination] = useState({ page: 0, totalPages: 0, totalItems: 0 });
  const [filter, setFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingMemberId, setDeletingMemberId] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await ApiService.getAllTeamMembersAdmin();
        console.log('Team members response:', response); // Debug log
        
        // Handle the response structure: { members: [...], page: 0, totalPages: 0, totalItems: 0 }
        if (response.members && Array.isArray(response.members)) {
          setMembers(response.members);
          setPagination({
            page: response.page || 0,
            totalPages: response.totalPages || 0,
            totalItems: response.totalItems || 0
          });
        } else {
          // Fallback if response structure is different
          setMembers(Array.isArray(response) ? response : []);
          setPagination({ page: 0, totalPages: 1, totalItems: Array.isArray(response) ? response.length : 0 });
        }
      } catch (err) {
        setError('Failed to fetch team members.');
        toast.error('Failed to fetch team members.');
        console.error('Error fetching team members:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeamMembers();
  }, []);

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString();
  };

  // Helper function to get type label
  const getTypeLabel = (type) => {
    const typeOption = typeOptions.find(opt => opt.value === type);
    return typeOption ? typeOption.label : type;
  };

  // Helper function to get status label
  const getStatusLabel = (status) => {
    const statusOption = statusOptions.find(opt => opt.value === status);
    return statusOption ? statusOption.label : status;
  };

  const filteredMembers = useMemo(() => {
    return members.filter(member => {
      const matchesRole = filter === 'All' || member.role === filter;
      const matchesStatus = statusFilter === 'All' || member.status === statusFilter;
      return matchesRole && matchesStatus;
    });
  }, [members, filter, statusFilter]);

  const handleDeleteClick = (member) => {
    setMemberToDelete(member);
    setShowDeleteDialog(true);
  };

  const handleDeleteConfirm = async () => {
    if (!memberToDelete) return;
    
    try {
      setDeletingMemberId(memberToDelete.id);
      console.log('Attempting to delete team member with ID:', memberToDelete.id);
      
      const response = await ApiService.deleteTeamMemberById(memberToDelete.id);
      console.log('Delete response:', response);
      
      // Remove the member from the local state
      setMembers(members.filter(member => member.id !== memberToDelete.id));
      toast.success('Team member deleted successfully');
    } catch (err) {
      console.error('Error deleting team member:', err);
      
      // Provide more specific error messages
      let errorMessage = 'Failed to delete team member';
      if (err.response) {
        // Server responded with error status
        if (err.response.status === 404) {
          errorMessage = 'Team member not found';
        } else if (err.response.status === 403) {
          errorMessage = 'You do not have permission to delete this team member';
        } else if (err.response.status === 500) {
          errorMessage = 'Server error occurred while deleting team member';
        } else if (err.response.data && err.response.data.message) {
          errorMessage = err.response.data.message;
        }
      } else if (err.request) {
        // Network error
        errorMessage = 'Network error. Please check your connection and try again';
      }
      
      toast.error(errorMessage);
    } finally {
      setDeletingMemberId(null);
      setShowDeleteDialog(false);
      setMemberToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteDialog(false);
    setMemberToDelete(null);
  };

  // Get unique roles for filter dropdown
  const uniqueRoles = useMemo(() => {
    const roles = members.map(member => member.role).filter(Boolean);
    return ['All', ...Array.from(new Set(roles))];
  }, [members]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">All Team Members</h1>
        <Link
          to="/dashboard/team/add"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Member
        </Link>
      </div>

      {/* Filters */}
      <div className="mb-4 flex gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Role</label>
          <select
            className="border rounded px-3 py-2"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            {uniqueRoles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
          <select
            className="border rounded px-3 py-2"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Statuses</option>
            {statusOptions.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10 text-blue-600 font-semibold">Loading team members...</div>
      ) : error ? (
        <div className="text-center py-10 text-red-600 font-semibold">{error}</div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Member</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Type</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member) => (
                <tr key={member.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      {member.imageUrl && (
                        <img 
                          src={member.imageUrl} 
                          alt={`${member.firstName} ${member.lastName}`}
                          className="w-12 h-12 rounded-full object-cover mr-3"
                          crossOrigin="anonymous"
                          onError={(e) => {
                            // Hide the broken image and show fallback
                            e.target.style.display = 'none';
                            // Create or show fallback avatar
                            const fallback = e.target.nextSibling;
                            if (fallback) {
                              fallback.style.display = 'flex';
                            }
                          }}
                        />
                      )}
                      {/* Fallback avatar when image fails to load */}
                      <div 
                        className={`w-12 h-12 rounded-full mr-3 flex items-center justify-center text-white font-semibold text-sm ${
                          member.imageUrl ? 'hidden' : 'flex'
                        }`}
                        style={{ 
                          backgroundColor: `hsl(${Math.abs(member.id?.charCodeAt(0) || 0) % 360}, 70%, 50%)` 
                        }}
                      >
                        {member.firstName?.charAt(0)?.toUpperCase()}{member.lastName?.charAt(0)?.toUpperCase()}
                      </div>
                      <div>
                        <p className="text-gray-900 font-semibold whitespace-no-wrap">
                          {member.firstName} {member.lastName}
                        </p>
                        
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex flex-col gap-1">
                      <p className="text-gray-900 font-medium">{member.role}</p>
                      
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="max-w-xs">
                    <p className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                        {getTypeLabel(member.type)}
                      </p>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className={`relative inline-block px-3 py-1 font-semibold leading-tight text-xs ${
                      member.status === 'ACTIVE' ? 'text-green-900' : 'text-red-900'
                    }`}>
                      <span aria-hidden className={`absolute inset-0 ${
                        member.status === 'ACTIVE' ? 'bg-green-200' : 'bg-red-200'
                      } opacity-50 rounded-full`}></span>
                      <span className="relative">{getStatusLabel(member.status)}</span>
                    </span>
                  </td>
                
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <Link 
                      to={`/dashboard/team/edit/${member.id}`} 
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      Edit
                    </Link>
                    <button 
                      onClick={() => handleDeleteClick(member)}
                      disabled={deletingMemberId === member.id}
                      className="text-red-600 hover:text-red-900 disabled:opacity-50"
                    >
                      {deletingMemberId === member.id ? 'Deleting...' : 'Delete'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {filteredMembers.length === 0 && !loading && !error && (
        <div className="text-center py-10 text-gray-500 font-semibold">No team members found.</div>
      )}

      {/* Pagination Info */}
      {!loading && !error && (
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredMembers.length} of {pagination.totalItems} members
          {pagination.totalPages > 1 && (
            <span> • Page {pagination.page + 1} of {pagination.totalPages}</span>
          )}
        </div>
      )}

      {/* AlertDialog for Delete Confirmation */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the team member "{memberToDelete?.firstName} {memberToDelete?.lastName}" and remove them from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleDeleteCancel}>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDeleteConfirm}
              disabled={deletingMemberId === memberToDelete?.id}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {deletingMemberId === memberToDelete?.id ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Toaster position="top-right" richColors />
    </div>
  );
};

export default AllTeam;
