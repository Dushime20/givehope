import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './blog-details/Hero';
import MainContent from './blog-details/Main-content';

const BlogSingle = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
     {/* <Hero/> */}

      {/* Main Content */}
      <MainContent/>
    </div>
  );
};

export default BlogSingle;