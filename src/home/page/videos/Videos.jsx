import React, { useState, useEffect } from "react";
import ApiService from "../../../config/ApiConfig";
import { toast } from 'sonner';
import { 
  FaSearch, FaFilter, FaPlay, FaTimes, 
  FaShieldAlt, FaBalanceScale, FaHeart, 
  FaClock, FaEye, FaStar, FaCalendar 
} from 'react-icons/fa';
import VideoSection from "./VideoSection";
import VideoCardInline from "./VideoCardInline";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [groupedVideos, setGroupedVideos] = useState({});
  const [videoTypes, setVideoTypes] = useState({});

  const getTypeConfig = (type) => {
    const typeLower = type?.toLowerCase() || '';

    if (typeLower.includes('sgbv') || typeLower.includes('vawg')) {
      return { name: type || 'SGBV / VAWG', icon: FaShieldAlt, color: 'text-red-500', bgColor: 'bg-red-100', textColor: 'text-red-800' };
    } else if (typeLower.includes('cedaw')) {
      return { name: type || 'CEDAW', icon: FaBalanceScale, color: 'text-green-500', bgColor: 'bg-green-100', textColor: 'text-green-800' };
    } else if (typeLower.includes('srhr') || typeLower.includes('cse')) {
      return { name: type || 'SRHR / CSE', icon: FaHeart, color: 'text-purple-500', bgColor: 'bg-purple-100', textColor: 'text-purple-800' };
    } else {
      return { name: type || 'Other', icon: FaPlay, color: 'text-gray-500', bgColor: 'bg-gray-100', textColor: 'text-gray-800' };
    }
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await ApiService.getAllMediaVideos();

        if (!response || !Array.isArray(response)) {
          throw new Error('Invalid videos data');
        }

        setVideos(response);

        const uniqueTypes = ApiService.extractVideoTypes(response);
        const dynamicVideoTypes = {};
        uniqueTypes.forEach(type => {
          dynamicVideoTypes[type] = getTypeConfig(type);
        });
        dynamicVideoTypes.OTHER = { name: 'Other Videos', icon: FaPlay, color: 'text-gray-500', bgColor: 'bg-gray-100', textColor: 'text-gray-800' };
        setVideoTypes(dynamicVideoTypes);

        const grouped = {};
        uniqueTypes.forEach(type => {
          grouped[type] = [];
        });
        grouped.OTHER = [];

        response.forEach(video => {
          const type = video.type;
          if (type && grouped[type]) {
            grouped[type].push(video);
          } else {
            grouped.OTHER.push(video);
          }
        });

        setGroupedVideos(grouped);
      } catch (error) {
        console.error('Error fetching videos:', error);
        toast.error('Failed to load videos');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || video.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-400 border-t-transparent mx-auto mb-6"></div>
          <p className="text-gray-600 font-semibold text-lg">Loading videos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white mt-12 min-h-screen py-8">
      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
            selectedCategory === 'all' ? 'bg-blue-500 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Videos ({videos.length})
        </button>
        {Object.entries(groupedVideos).map(([type, vids]) => {
          const Icon = videoTypes[type]?.icon;
          return (
            <button
              key={type}
              onClick={() => setSelectedCategory(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105 ${
                selectedCategory === type ? 'bg-blue-500 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {Icon && <Icon className="text-xs" />}
              <span>{videoTypes[type]?.name || type} ({vids.length})</span>
            </button>
          );
        })}
      </div>

      {selectedCategory === 'all' ? (
        Object.entries(groupedVideos).map(([type, vids]) => (
          <VideoSection
            key={type}
            title={videoTypes[type]?.name || type}
            videos={vids}
            icon={videoTypes[type]?.icon}
            color={videoTypes[type]?.color}
          />
        ))
      ) : (
        <div className="max-w-7xl mx-auto px-4">
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVideos.map((video) => (
                <div key={video.id} className="group transform hover:scale-105 transition-transform duration-300">
                  <VideoCardInline 
                    id={video.id}
                    url={video.url} 
                    title={video.title} 
                    type={video.type}
                    isFeatured={video.isFeatured}
                    createdAt={video.createdAt}
                    updatedAt={video.updatedAt}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500">No videos found for this filter.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Videos;
