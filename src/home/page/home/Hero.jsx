import React, { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';

import ApiService from '../../../config/ApiConfig';

const DEFAULT_BG = "images/bg_1.jpg";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [bgImage, setBgImage] = useState(DEFAULT_BG);

  useEffect(() => {
    const fetchPrimaryBg = async () => {
      try {
        const response = await ApiService.getAllMediaPhotos();
        console.log("Fetched media photos:", response);
        const items = response.items || response;
        const primary = Array.isArray(items)
          ? items.find(img => img.type === 'PRIMARY' && img.url)
          : null;

        if (primary && primary.url) {
          setBgImage(primary.url);
        } else {
          // If no primary image found, fallback to default
          setBgImage(DEFAULT_BG);
        }
      } catch (err) {
        console.error("Failed to fetch primary background image:", err);
        setBgImage(DEFAULT_BG);
      }
    };

    fetchPrimaryBg();
  }, []);


  return (
    <div className="relative bg-cover bg-center h-[600px]">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-opacity-50"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {/* Top Logo */}
        {/* <div className="absolute top-6 left-6 flex items-center space-x-3 text-white">
          <img
            src="images/Picture1.png"
            alt="LOGO"
            className="h-10 w-auto object-contain"
          />
        </div> */}

        {/* Center Content */}
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h2 className="font-sans text-3xl md:text-5xl font-light mb-6 leading-snug">
              Rwanda National <br />
              Association of Deaf <br />
              Women (RNADW)
            </h2>

            {/* Buttons Row */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {/* Watch Video Button */}
              <button
                onClick={() => setShowVideo(true)}
                className="flex items-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center transition-transform group-hover:scale-105">
                  <FaPlay className="text-yellow-200 text-sm ml-1" />
                </div>
                <span className="text-yellow-200 font-bold text-sm group-hover:text-white">
                  Watch Video
                </span>
              </button>

              {/* Donate Now Button */}
              <a
                href="/donate"
                className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-400 transition"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl aspect-video">
            <iframe
              className="w-full h-full rounded"
              src="https://www.youtube.com/embed/SFhndjv-PfY?autoplay=1"
              title="RNADW Video"
              allowFullScreen
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded hover:bg-gray-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
