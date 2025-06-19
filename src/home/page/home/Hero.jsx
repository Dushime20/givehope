import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[600px]"
         
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-50"
        style={{ backgroundImage: "url('images/bg_1.jpg ')" }}>
          
          {/* Top Logo */}
          <div className="absolute top-6 left-6 flex items-center space-x-3 text-white">
            <img
              src="images/Picture1.png"
              alt="LOGO"
              className="h-10 w-auto object-contain"
            />
           </div>

          {/* Center Content */}
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white max-w-4xl">
              <h2 className="font-sans text-3xl md:text-5xl font-light mb-6 leading-snug">
                Rwanda National <br />
                Association of Deaf <br />
                Women (RNADW)
              </h2>
              <div>
                 <div>
                <p style={{ display: "inline-block" }}>
      <a
        href="https://www.youtube.com/watch?v=SFhndjv-PfY"
        data-fancybox
        className="ftco-play-video d-flex"
      >
        <span className="play-icon-wrap align-self-center mr-4">
          <FaPlay />
        </span>
        <span className="align-self-center">Watch Video</span>
      </a>
    </p>
              </div>
                  <div><a
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
      </div>
    </div>
  );
};

export default Hero;
