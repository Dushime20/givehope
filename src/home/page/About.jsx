import React from 'react';
import { Link } from 'react-router-dom';
import Features from './home/Features';
import ImageCoursel from './about/imageCoursel';
import HistorySection from './about/HistorySection';
import Hero from './about/Hero';

const About = () => {
  return (
    <div className="min-h-screen">
    

      {/* Hero Section */}
      <Hero/>

      {/* History Section */}
     <HistorySection/>

      {/* Image Carousel Section */}
      <ImageCoursel/>

      {/* Features Section */}
     <Features/>

   
    </div>
  );
};

export default About;