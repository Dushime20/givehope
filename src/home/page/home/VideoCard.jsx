import React from 'react';

const VideoCard = ({ videoId, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden transition-transform hover:scale-105 hover:shadow-lg duration-300">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-56"
      ></iframe>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-700 mt-2 leading-relaxed break-words">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
