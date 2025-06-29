import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../../config/ApiConfig';
import { toast } from 'sonner';
import { Toaster } from '../../components/ui/sonner';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '../../components/ui/alert-dialog';

const types = ['All', 'SGBV_VAWG', 'Fundraising', 'Events', 'Community'];
const ITEMS_PER_PAGE = 5;

const AllVideo = () => {
  const [videos, setVideos] = useState([]);
  const [filter, setFilter] = useState('All');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await ApiService.getAllMediaVideos();
        setVideos(res || []);
      } catch (err) {
        setError('Failed to fetch videos.');
        toast.error('Failed to fetch videos.');
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleteLoading(true);
    try {
      await ApiService.deleteMediaVideoById(deleteId);
      setDeleteId(null);
      setVideos((prev) => prev.filter((v) => v.id !== deleteId));
      toast.success('Video deleted successfully!');
    } catch (err) {
      toast.error('Failed to delete video.');
      console.error('Delete error:', err);
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleDeleteClick = (videoId) => {
    setDeleteId(videoId);
  };

  const handleDialogClose = () => {
    setDeleteId(null);
  };

  const filteredVideos =
    filter === 'All'
      ? videos
      : videos.filter((vid) => vid.type === filter);

  const totalPages = Math.ceil(filteredVideos.length / ITEMS_PER_PAGE);
  const paginatedVideos = filteredVideos.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="p-6 bg-gray-100 rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">All Videos</h2>
        <Link
          to="/dashboard/video/add"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Video
        </Link>
      </div>
      <div className="mb-4">
        <select
          className="border rounded px-3 py-2"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setPage(1);
          }}
        >
          {types.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      {loading ? (
        <div className="text-center py-8 text-blue-600 font-semibold">Loading videos...</div>
      ) : error ? (
        <div className="text-center py-8 text-red-600 font-semibold">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Preview</th>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Type</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Featured</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedVideos.map((vid) => (
                <tr key={vid.id}>
                  <td className="py-2 px-4 border-b">
                    {vid.url && vid.url.includes('youtube') ? (
                      <a href={vid.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">YouTube Link</a>
                    ) : vid.url ? (
                      <video src={vid.url} controls className="h-16 w-28 rounded" />
                    ) : (
                      <span className="text-gray-400">No preview</span>
                    )}
                  </td>
                  <td className="py-2 px-4 border-b">{vid.title}</td>
                  <td className="py-2 px-4 border-b">{vid.type}</td>
                  <td className="py-2 px-4 border-b">{vid.status}</td>
                  <td className="py-2 px-4 border-b">{vid.isFeatured ? 'Yes' : 'No'}</td>
                  <td className="py-2 px-4 border-b">
                    <Link
                      to={`/dashboard/video/edit/${vid.id}`}
                      className="text-blue-600 hover:underline mr-2"
                    >
                      Edit
                    </Link>
                    <button 
                      onClick={() => handleDeleteClick(vid.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteId !== null} onOpenChange={handleDialogClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Video</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this video? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleteLoading}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} disabled={deleteLoading}>
              {deleteLoading ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Pagination */}
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-2 py-1">{page} / {totalPages}</span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <Toaster position="top-right" richColors />
    </div>
  );
};

export default AllVideo;
