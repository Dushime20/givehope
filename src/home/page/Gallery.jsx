
import VolunteerForm from './home/VolunteerForm';

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: '/images/img_1.jpg' },
    { id: 2, src: '/images/img_2.jpg' },
    { id: 3, src: '/images/img_3.jpg' },
    { id: 4, src: '/images/img_4.jpg' },
    { id: 5, src: '/images/img_1.jpg' },
    { id: 6, src: '/images/img_2.jpg' },
    { id: 7, src: '/images/img_1.jpg' },
    { id: 8, src: '/images/img_2.jpg' },
    { id: 9, src: '/images/img_3.jpg' },
    { id: 10, src: '/images/img_4.jpg' },
    { id: 11, src: '/images/img_1.jpg' },
    { id: 12, src: '/images/img_2.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Photo Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-md">
                <img
                  src={image.src}
                  alt={`Gallery ${image.id}`}
                  className="w-full h-72 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
            Join Our Volunteer Program
          </h2>
          <VolunteerForm />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
