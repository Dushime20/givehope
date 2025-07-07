import React, { useEffect, useState } from 'react';
import ApiService from '@/config/ApiConfig';

const Partner = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await ApiService.getAllPartners();
        setPartners(Array.isArray(response) ? response : []);
      } catch (err) {
        setError('Failed to load partners');
      } finally {
        setLoading(false);
      }
    };
    fetchPartners();
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">Our Partners</h2>
        {loading ? (
          <div className="text-center text-blue-600">Loading partners...</div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : partners.length === 0 ? (
          <div className="text-center text-gray-500">No partners found.</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {partners.map((partner, i) => (
              <div
                key={partner.id || i}
                className="bg-white border border-gray-200 shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {partner.imageUrl ? (
                  <img
                    src={partner.imageUrl}
                    alt={partner.name}
                    className="w-full h-32 object-contain p-4"
                    crossOrigin="anonymous"
                  />
                ) : (
                  <div className="w-full h-32 flex items-center justify-center bg-gray-200 text-gray-400 text-sm">
                    No Image
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Partner;
