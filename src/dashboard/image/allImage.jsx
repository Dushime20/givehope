import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import ApiService from '@/config/ApiConfig';

const AllImage = () => {
  const [images, setImages] = useState([]);
  const [meta, setMeta] = useState({ 
    totalItems: 0, 
    totalPages: 0, 
    currentPage: 1 
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [deletingImageId, setDeletingImageId] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [imageToDelete, setImageToDelete] = useState(null);

  useEffect(() => {
    fetchImages();
  }, [currentPage]);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await ApiService.getAllMediaPhotos();
      console.log('Images response:', response);
      
      if (response.items && Array.isArray(response.items)) {
        setImages(response.items);
        setMeta({
          totalItems: response.totalItems || response.items.length,
          totalPages: response.totalPages || 1,
          currentPage: response.currentPage || 1
        });
      } else {
        // Fallback if response structure is different
        setImages(Array.isArray(response) ? response : []);
        setMeta({
          totalItems: Array.isArray(response) ? response.length : 0,
          totalPages: 1,
          currentPage: 1
        });
      }
    } catch (err) {
      setError('Failed to fetch images.');
      toast.error('Failed to fetch images.');
      console.error('Error fetching images:', err);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to format file size
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString();
  };

  // Helper function to get file extension
  const getFileExtension = (mimeType) => {
    if (!mimeType) return '';
    return mimeType.split('/')[1]?.toUpperCase() || '';
  };

  // Helper function to fix image URLs
  const getImageUrl = (url) => {
    if (!url) return '';
    
    let finalUrl = '';
    
    // If the URL is already a full URL, try to fix it to use the correct API endpoint
    if (url.startsWith('http://') || url.startsWith('https://')) {
      // Replace the domain and path to use the correct API endpoint
      const urlObj = new URL(url);
      const filename = urlObj.pathname.split('/').pop(); // Get the filename
      finalUrl = `https://rnwda-backend.onrender.com/api/media/photo/${filename}`;
    }
    // If it's a relative URL, prepend the API base URL
    else if (url.startsWith('/')) {
      const filename = url.split('/').pop(); // Get the filename
      finalUrl = `https://rnwda-backend.onrender.com/api/media/photo/${filename}`;
    }
    // If it's just a filename, construct the full URL
    else {
      finalUrl = `https://rnwda-backend.onrender.com/api/media/photo/${url}`;
    }
    
    console.log(`Original URL: ${url} -> Final URL: ${finalUrl}`);
    return finalUrl;
  };

  const filteredImages = images.filter(image =>
    (image.title || '').toLowerCase().includes(filter.toLowerCase()) ||
    (image.alt || '').toLowerCase().includes(filter.toLowerCase()) ||
    getFileExtension(image.mimeType).toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteClick = (image) => {
    setImageToDelete(image);
    setShowDeleteDialog(true);
  };

  const handleDeleteConfirm = async () => {
    if (!imageToDelete) return;
    
    try {
      setDeletingImageId(imageToDelete.id);
      await ApiService.deleteMediaPhotoById(imageToDelete.id);
      
      // Remove the image from the local state
      setImages(images.filter(image => image.id !== imageToDelete.id));
      toast.success('Image deleted successfully');
    } catch (err) {
      toast.error('Failed to delete image');
      console.error('Error deleting image:', err);
    } finally {
      setDeletingImageId(null);
      setShowDeleteDialog(false);
      setImageToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteDialog(false);
    setImageToDelete(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">All Images</h1>
        <Link to="/dashboard/image/add">
          <Button className="bg-blue-700 text-white hover:bg-blue-500">
            Add New Image
          </Button>
        </Link>
      </div>

      <div className="mb-4">
        <Input
          type="text"
          placeholder="Filter by title, alt text, or file type..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {loading ? (
        <div className="text-center py-10 text-blue-600 font-semibold">Loading images...</div>
      ) : error ? (
        <div className="text-center py-10 text-red-600 font-semibold">{error}</div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Image Gallery ({meta.totalItems} total images)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Preview</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Image Details</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">File Info</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Upload Date</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredImages.map(image => (
                    <tr key={image.id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <img
                            src={image.url || '/src/assets/images/placeholder.jpg'}
                            alt={image.title || 'Image preview'}
                            className="w-16 h-16 rounded-lg object-cover"
                            crossOrigin="anonymous"
                            onError={e => { e.target.src = '/src/assets/images/placeholder.jpg'; }}
                          />
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div>
                          <p className="text-gray-900 font-semibold whitespace-no-wrap">
                            {image.title || 'Untitled'}
                          </p>
                          <p className="text-gray-600 text-xs whitespace-no-wrap">
                            {image.alt || 'No alt text'}
                          </p>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div>
                          <p className="text-gray-900 whitespace-no-wrap">
                            {getFileExtension(image.mimeType)}
                          </p>
                          <p className="text-gray-600 text-xs whitespace-no-wrap">
                            {formatFileSize(image.size)}
                          </p>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {formatDate(image.createdAt)}
                        </p>
                        {image.updatedAt && (
                          <p className="text-gray-600 text-xs whitespace-no-wrap">
                            Updated: {formatDate(image.updatedAt)}
                          </p>
                        )}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex space-x-2">
                          <Link 
                            to={`/dashboard/image/edit/${image.id}`} 
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </Link>
                          <button 
                            onClick={() => handleDeleteClick(image)}
                            disabled={deletingImageId === image.id}
                            className="text-red-600 hover:text-red-900 disabled:opacity-50"
                          >
                            {deletingImageId === image.id ? 'Deleting...' : 'Delete'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {filteredImages.length === 0 && !loading && !error && (
        <div className="text-center py-10 text-gray-500 font-semibold">No images found.</div>
      )}

      {/* Pagination */}
      {!loading && !error && (
        <div className="flex justify-center items-center mt-6 space-x-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1 || meta.totalPages <= 1}
          >
            Previous
          </Button>
          <span className="px-4 py-2 text-sm text-gray-600">
            Page {currentPage} of {Math.max(1, meta.totalPages)}
          </span>
          <Button
            variant="outline"
            onClick={() => setCurrentPage(Math.min(meta.totalPages, currentPage + 1))}
            disabled={currentPage >= meta.totalPages || meta.totalPages <= 1}
          >
            Next
          </Button>
        </div>
      )}

      {/* AlertDialog for Delete Confirmation */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the image "{imageToDelete?.title || 'Untitled'}" and remove it from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleDeleteCancel}>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDeleteConfirm}
              disabled={deletingImageId === imageToDelete?.id}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {deletingImageId === imageToDelete?.id ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Toaster position="top-right" richColors />
    </div>
  );
};

export default AllImage;
