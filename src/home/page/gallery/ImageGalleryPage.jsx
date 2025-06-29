import React, { useEffect, useState } from 'react';
import ApiService from '../../../config/ApiConfig';


const ImageGalleryPage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imgLoading, setImgLoading] = useState({}); // Track loading state per image

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await ApiService.getAllMediaPhotos() ;
        // Only show images with type = 'Gallery' (if type exists)
        const galleryImages = (response.items || []).filter(img => !img.type || img.type === 'Gallery');
        setImages(galleryImages);
      } catch (err) {
        console
        setError('Failed to load gallery images.');
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return <div className="text-center py-16">Loading gallery...</div>;
  }
  if (error) {
    return <div className="text-center py-16 text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 mt-15 mb-3">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Gallery</h2>
      {/* Image Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition-transform duration-300">
            <div className="relative w-full h-64 bg-gray-200 flex items-center justify-center">
              {imgLoading[image.id] && (
                <span className="absolute text-gray-400 text-sm z-10">{image.alt || 'Loading...'}</span>
              )}
              <img
                src={image.url || '/src/assets/images/placeholder.jpg'}
                alt={image.alt || image.title || 'Gallery image'}
                className="w-full h-64 object-cover"
                crossOrigin="anonymous"
                onClick={() => handleImageClick(image)}
                onLoad={() => setImgLoading(l => ({ ...l, [image.id]: false }))}
                onError={e => {
                  e.target.src = '/src/assets/images/placeholder.jpg';
                  setImgLoading(l => ({ ...l, [image.id]: false }));
                }}
                onLoadStart={() => setImgLoading(l => ({ ...l, [image.id]: true }))}
              />
              {/* Show title overlay
              <div className="absolute bottom-0 left-0 right-0 bg-blue-700 bg-opacity-50 text-white text-center py-2 text-sm font-semibold">
                {image.title}
              </div> */}
            </div>
          </div>
        ))}
      </div>
      {/* Modal for larger image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={handleCloseModal}>
          <div className="relative max-w-3xl max-h-full p-4 bg-white rounded-lg shadow-lg" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={handleCloseModal}
            >
              ✖
            </button>
            <img
              src={selectedImage.url || '/src/assets/images/placeholder.jpg'}
              alt={selectedImage.alt || selectedImage.title || 'Gallery image'}
              className="w-full h-auto max-h-[80vh] object-contain"
              crossOrigin="anonymous"
              onError={e => { e.target.src = '/src/assets/images/placeholder.jpg'; }}
            />
            <div className="mt-4 text-center">
              <div className="text-lg font-bold text-gray-800">{selectedImage.title}</div>
              <div className="text-gray-500 text-sm">{selectedImage.alt}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGalleryPage;
