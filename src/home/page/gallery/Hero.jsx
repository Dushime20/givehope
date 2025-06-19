import React from "react";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[600px]"
        style={{ backgroundImage: "url('images/bg_1.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Logo */}
        <div className="absolute top-6 left-6 flex items-center z-10 text-white">
          <img
            src="images/Picture1.png"
            alt="LOGO"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto h-full px-4 flex items-center justify-center relative z-10">
          <div className="text-center text-white max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-light leading-snug mb-10">
              Rwanda National <br />
              Association of Deaf <br />
              Women (RNADW)
            </h2>

            {/* Buttons in one row */}
            <div className="flex flex-wrap justify-center items-center gap-6">
              {/* Watch Video Button */}
              <a
                href="https://www.youtube.com/watch?v=SFhndjv-PfY"
                data-fancybox
                className="flex items-center space-x-3 group"
              >
                {/* Circle Play Icon */}
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                  <FaPlay className="text-yellow-400 text-sm group-hover:scale-110 transition-transform duration-200" />
                </div>
                {/* Text */}
                <span className="text-yellow-400 text-lg font-medium group-hover:underline">
                  Watch Video
                </span>
              </a>

              {/* Donate Now Button */}
              <a
                href="/donate-page"
                className="inline-block bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-400 transition"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
