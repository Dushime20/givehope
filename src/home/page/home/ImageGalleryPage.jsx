import { useState } from 'react';

const images = [
  { id: 1, src: '/images/img_1.jpg' },
  { id: 2, src: '/images/img_2.jpg' },
  { id: 3, src: '/images/img_3.jpg' },
  { id: 4, src: '/images/img_4.jpg' },
  { id: 5, src: '/images/img_1.jpg' },
  { id: 6, src: '/images/img_2.jpg' },
  { id: 7, src: '/images/img_3.jpg' },
  { id: 8, src: '/images/bg_3.jpg' },
  { id: 9, src: '/images/bg_2.jpg' },
  { id: 10, src: '/images/bg_1.jpg' },
  // Add more images as needed
];

const ImageGalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 mt-15 mb-3">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Gallery</h2>
      
      {/* Image Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition-transform duration-300">
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className="w-full h-64 object-cover"
              onClick={() => handleImageClick(image.src)}
            />
          </div>
        ))}
      </div>

      {/* Modal for larger image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={handleCloseModal}>
          <div className="relative max-w-3xl max-h-full p-4 bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={handleCloseModal}
            >
              ✖
            </button>
            <img src={selectedImage} alt="Large view" className="w-full h-auto max-h-[80vh] object-contain" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGalleryPage;
