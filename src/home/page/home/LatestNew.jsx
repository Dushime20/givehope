import React from 'react'
import { Link } from 'react-router-dom';
import BlogPost from '../blog-page/BlogPost';

const LatestNew = () => {
  return (
    <div>
          {/* Latest News Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Latest News</h2>
           <BlogPost/>
        </div>
      </div>
    </div>
  )
}

export default LatestNew