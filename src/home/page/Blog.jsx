import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './home/Hero';
import BlogPost from './blog/BlogPost';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero/>

      {/* Blog Posts Section */}
      <BlogPost/>

 
    </div>
  );
};

export default Blog;