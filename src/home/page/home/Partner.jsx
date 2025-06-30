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
    <div>
      <div className="py-16 bg-gradient-to-br bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 text-center">Our Partners</h2>
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center text-blue-600">Loading partners...</div>
          ) : error ? (
            <div className="text-center text-red-600">{error}</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
              {partners.length === 0 ? (
                <div className="col-span-3 text-gray-500">No partners found.</div>
              ) : (
                partners.map((partner, i) => (
                  <div
                    key={partner.id || i}
                    className="group p-6 bg-white border border-blue-100 rounded-2xl shadow-lg flex flex-col items-center justify-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300 duration-300 min-w-[200px] max-w-xs w-full"
                  >
                    <div className="bg-gradient-to-tr from-blue-200 via-blue-100 to-white p-1 rounded-full mb-4">
                      {partner.imageUrl ? (
                        <img
                          src={partner.imageUrl}
                          alt={partner.name}
                          className="h-24 w-24 object-cover rounded-full border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300 bg-white"
                          crossOrigin="anonymous"
                        />
                      ) : (
                        <div className="h-24 w-24 flex items-center justify-center bg-gray-200 rounded-full text-gray-400 text-xs mb-2">No Image</div>
                      )}
                    </div>
                    <span className="text-gray-800 font-semibold text-center text-lg tracking-wide group-hover:text-blue-700 transition-colors duration-300">
                      {partner.name}
                    </span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Partner;