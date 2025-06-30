import React from "react";
import { FaPlay, FaStar, FaClock, FaEye, FaCalendar, FaDownload } from 'react-icons/fa';

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
        <div className="flex items-center justify-center">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              download={(!youtubeId && url) ? true : undefined}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-sm font-medium"
            >
              {youtubeId ? <FaPlay className="text-xs" /> : <FaDownload className="text-xs" />}
              <span>{youtubeId ? 'Open Video' : 'Download Video'}</span>
            </a>
          ) : null}
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default VideoCardInline; 