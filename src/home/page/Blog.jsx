import HeroBlog from './blog-details/HeroBlog';
import BlogPost from'./Blog/BlogPost';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HeroBlog Section : the header of all blog news */}
      <HeroBlog/>

      {/* Blog Posts Section */}
    <BlogPost/>
    </div>
  );
};

export default Blog;