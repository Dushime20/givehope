import React, { useState, useEffect } from "react";
import ApiService from "../../../config/ApiConfig";
import { toast } from 'sonner';
import { 
  FaSearch, FaFilter, FaPlay, FaTimes, 
  FaShieldAlt, FaBalanceScale, FaHeart, 
  FaClock, FaEye, FaStar, FaCalendar 
} from 'react-icons/fa';

const VideoSection = ({ title, videos, icon: Icon, color }) => {
  if (videos.length === 0) return null;

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          {Icon && <Icon className={`text-3xl ${color}`} />}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {title}
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-400 to-transparent ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
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
      </div>
    </section>
  );
};

const VideoCardInline = ({ id, url, title, type, isFeatured, createdAt, updatedAt }) => {
  const getYouTubeVideoId = (url) => {
    if (!url) return '';
    if (!url.includes('/') && !url.includes('.')) {
      return url;
    }
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  };

  const youtubeId = getYouTubeVideoId(url);

  const getCategoryConfig = (type) => {
    if (!type) return { name: 'Other', color: 'bg-gray-100 text-gray-800', icon: '📹' };
    const typeLower = type.toLowerCase();

    if (typeLower.includes('sgbv') || typeLower.includes('vawg')) {
      return { name: type, color: 'bg-red-100 text-red-800', icon: '🛡️' };
    } else if (typeLower.includes('cedaw')) {
      return { name: type, color: 'bg-green-100 text-green-800', icon: '⚖️' };
    } else if (typeLower.includes('srhr') || typeLower.includes('cse')) {
      return { name: type, color: 'bg-purple-100 text-purple-800', icon: '❤️' };
    } else {
      return { name: type, color: 'bg-gray-100 text-gray-800', icon: '📹' };
    }
  };

  const category = getCategoryConfig(type);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 relative">
      {isFeatured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-blue-400 text-blue-900 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <FaStar className="text-xs" />
            <span>Featured</span>
          </div>
        </div>
      )}

      <div className="absolute top-4 left-4 z-10">
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${category.color} flex items-center gap-1`}>
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </div>
      </div>

      <div className="relative overflow-hidden">
        {youtubeId ? (
          <div className="relative">
            <img
              src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.target.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white bg-opacity-90 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <FaPlay className="text-blue-500 text-xl" />
              </div>
            </div>
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
              <FaClock className="text-xs" />
              <span>Watch</span>
            </div>
          </div>
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <div className="text-center">
              <FaPlay className="text-4xl text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">Invalid video URL</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <FaCalendar className="text-xs" />
              <span>Created: {formatDate(createdAt)}</span>
            </div>
            {updatedAt && updatedAt !== createdAt && (
              <div className="flex items-center gap-1">
                <FaClock className="text-xs" />
                <span>Updated: {formatDate(updatedAt)}</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button 
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-sm font-medium group/btn"
            onClick={() => {
              if (youtubeId) {
                window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
              }
            }}
          >
            <FaPlay className="text-xs" />
            <span>Watch Video</span>
          </button>
          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <FaEye />
            <span>View</span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

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
