import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ApiService from '@/config/ApiConfig';

const AddImage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    file: null,
    alt: '',
    title: '',
    type: '',
    status: 'ACTIVE'
  });
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');

  const statusOptions = [
    { value: 'ARCHIVED', label: 'Achived' },
    { value: 'PUBLISHED', label: 'Published' },
    { value: 'DELETED', label: 'Deleted' }
  ];

  const typeOptions = [

    { value: 'GALLERY', label: 'Gallery' },
    
    { value: 'PRIMARY', label: 'Primary' }
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
      
      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.file) {
      toast.error('Please select an image file');
      return;
    }

    if (!formData.alt.trim()) {
      toast.error('Alt text is required');
      return;
    }

    setLoading(true);
    
    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append('file', formData.file);
      submitData.append('alt', formData.alt);
      submitData.append('title', formData.title);
      submitData.append('type', formData.type);
      submitData.append('status', formData.status);

      // Call the uploadPhotoMedia method from ApiConfig
      const response = await ApiService.uploadPhotoMedia(submitData);
      
      console.log('Upload response:', response);
      toast.success('Image uploaded successfully!');
      
      // Reset form
      setFormData({
        file: null,
        alt: '',
        title: '',
        type: '',
        status: 'ARCHIVED'
      });
      setPreviewUrl('');
      
      // Navigate back to images list
      setTimeout(() => {
        navigate('/dashboard/image');
      }, 1500);
      
    } catch (error) {
      console.error('Error uploading image:', error);
      const errorMessage = error.response?.data?.message || 'Failed to upload image. Please try again.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/dashboard/image/all');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Add New Image</h1>
      
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Image Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="file" className="text-sm font-medium">
                  Image File *
                </Label>
                <Input
                  id="file"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="cursor-pointer"
                  required
                />
                {previewUrl && (
                  <div className="mt-2">
                    <img 
                      src={previewUrl} 
                      alt="Preview" 
                      className="w-32 h-32 object-cover rounded-lg border"
                    />
                  </div>
                )}
              </div>

              {/* Alt Text */}
              <div className="space-y-2">
                <Label htmlFor="alt" className="text-sm font-medium">
                  Alt Text *
                </Label>
                <Input
                  id="alt"
                  type="text"
                  value={formData.alt}
                  onChange={(e) => handleInputChange('alt', e.target.value)}
                  placeholder="Enter alt text for accessibility"
                  required
                />
              </div>

              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-sm font-medium">
                  Title
                </Label>
                <Input
                  id="title"
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Enter image title"
                />
              </div>

              {/* Type */}
              <div className="space-y-2">
                <Label htmlFor="type" className="text-sm font-medium">
                  Type
                </Label>
                <Select 
                  value={formData.type} 
                  onValueChange={(value) => handleInputChange('type', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select image type" />
                  </SelectTrigger>
                  <SelectContent>
                    {typeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Status */}
              <div className="space-y-2">
                <Label htmlFor="status" className="text-sm font-medium">
                  Status
                </Label>
                <Select 
                  value={formData.status} 
                  onValueChange={(value) => handleInputChange('status', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="flex-1 bg-blue-700 text-white hover:bg-blue-500 disabled:opacity-50"
                >
                  {loading ? 'Adding Image...' : 'Add Image'}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleCancel}
                  disabled={loading}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      
      <Toaster position="top-right" richColors />
    </div>
  );
};

export default AddImage;
