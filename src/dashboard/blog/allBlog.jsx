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

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingBlogId, setDeletingBlogId] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);
  const blogsPerPage = 5;

  // Helper function to format tags display
  const formatTags = (tags) => {
    if (!tags) return '';
    
    // If tags is already an array
    if (Array.isArray(tags)) {
      return tags.join(', ');
    }
    
    // If tags is a string, handle it directly (backend returns comma-separated)
    if (typeof tags === 'string') {
      // If it looks like JSON, try to parse it
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
      // Return the string as is (comma-separated format)
      return tags;
    }
    
    return '';
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await ApiService.getAllBlog();
        // Use response.items as the blog list
        console.log('Fetched blogs:', response.items); // Debug log
        setBlogs(Array.isArray(response.items) ? response.items : []);
      } catch (err) {
        setError('Failed to fetch blogs.');
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog =>
      (blog.title || '').toLowerCase().includes(filter.toLowerCase()) ||
      formatTags(blog.tags).toLowerCase().includes(filter.toLowerCase())
    );
  }, [blogs, filter]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDeleteClick = (blog) => {
    setBlogToDelete(blog);
    setShowDeleteDialog(true);
  };

  const handleDeleteConfirm = async () => {
    if (!blogToDelete) return;
    
    try {
      setDeletingBlogId(blogToDelete.id);
      await ApiService.deleteBlogById(blogToDelete.id);
      
      // Remove the blog from the local state
      setBlogs(blogs.filter(blog => blog.id !== blogToDelete.id));
      toast.success('Blog deleted successfully');
      
      // Reset pagination if current page becomes empty
      if (currentBlogs.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } catch (err) {
      toast.error('Failed to delete blog');
      console.error('Error deleting blog:', err);
    } finally {
      setDeletingBlogId(null);
      setShowDeleteDialog(false);
      setBlogToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteDialog(false);
    setBlogToDelete(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">All Blogs</h1>
        <Link to="/dashboard/blogs/add" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add New Blog
        </Link>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by title or tags..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {loading ? (
        <div className="text-center py-10 text-blue-600 font-semibold">Loading blogs...</div>
      ) : error ? (
        <div className="text-center py-10 text-red-600 font-semibold">{error}</div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tags</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentBlogs.map(blog => (
                <tr key={blog.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{blog.title}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{formatTags(blog.tags)}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{blog.createdAt ? blog.createdAt.slice(0, 10) : ''}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className={`relative inline-block px-3 py-1 font-semibold leading-tight ${blog.status === 'PUBLISHED' ? 'text-green-900' : 'text-yellow-900'}`}>
                      <span aria-hidden className={`absolute inset-0 ${blog.status === 'PUBLISHED' ? 'bg-green-200' : 'bg-yellow-200'} opacity-50 rounded-full`}></span>
                      <span className="relative">{blog.status === 'PUBLISHED' ? 'Published' : 'Draft'}</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <Link to={`/dashboard/blogs/edit/${blog.id}`} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</Link>
                    <button 
                      onClick={() => handleDeleteClick(blog)}
                      disabled={deletingBlogId === blog.id}
                      className="text-red-600 hover:text-red-900 disabled:opacity-50"
                    >
                      {deletingBlogId === blog.id ? 'Deleting...' : 'Delete'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="py-5">
        <nav className="flex justify-center">
          <ul className="flex list-style-none">
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i}>
                <button
                  onClick={() => paginate(i + 1)}
                  className={`px-3 py-1 border rounded-md mx-1 ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* AlertDialog for Delete Confirmation */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the blog "{blogToDelete?.title}" and remove it from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleDeleteCancel}>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDeleteConfirm}
              disabled={deletingBlogId === blogToDelete?.id}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {deletingBlogId === blogToDelete?.id ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Toaster position="top-right" richColors />
    </div>
  );
};

export default AllBlogs;
