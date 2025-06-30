import React from "react";
import VideoCardInline from "./VideoCardInline";

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

export default VideoSection; 