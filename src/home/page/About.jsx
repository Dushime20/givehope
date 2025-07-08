import React from 'react';
import { Link } from 'react-router-dom';
import Features from './home/Features';
import Partner from './home/Partner';
import Team from './home/Team';
import Testimonials from './home/Testimonial';
import Hero from './home/Hero';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
         {/* Hero Section */}
      <Hero/>
       {/* Features Section */}
      <div className="py-12">
        <Features />
      </div>
      

     

    

      <Team/>

    

     <Testimonials/>

       {/* Partner Section */}
      <div className="">
        <Partner />
      </div>
    </div>
  );
};

export default About;