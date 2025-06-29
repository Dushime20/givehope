import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ApiService from '../../../config/ApiConfig';

const initialComments = [
  {
    id: 1,
    name: 'Jean Doe',
    avatar: '/images/person_1.jpg',
    text: 'Great article! Very informative.',
    time: '2 hours ago',
    replies: [
      {
        id: 2,
        name: 'Admin',
        avatar: '/images/person_2.jpg',
        text: 'Thank you for your feedback!',
        time: '1 hour ago',
        replies: [],
      },
    ],
  },
  {
    id: 3,
    name: 'Alice Smith',
    avatar: '/images/person_2.jpg',
    text: 'How can I get involved?',
    time: '1 day ago',
    replies: [],
  },
];

const BlogSingle = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ firstName: '', lastName: '', email: '', content: '' });
  const [submitting, setSubmitting] = useState(false);
  const [commentError, setCommentError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const response = await ApiService.getBlogById(id);
        setBlog(response);
        setComments(response.comments || []);
      } catch (err) {
        setError('Failed to load blog.');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  // Add new comment
  const handleAddComment = async (e) => {
    e.preventDefault();
    setCommentError(null);
    if (!newComment.firstName.trim() || !newComment.lastName.trim() || !newComment.email.trim() || !newComment.content.trim()) {
      setCommentError('All fields are required.');
      return;
    }
    setSubmitting(true);
    try {
      const formData = {
        firstName: newComment.firstName,
        lastName: newComment.lastName,
        email: newComment.email,
        content: newComment.content,
      };
      const added = await ApiService.addComment(formData, id);
      setComments((prev) => [...prev, added]);
      setNewComment({ firstName: '', lastName: '', email: '', content: '' });
    } catch (err) {
      setCommentError('Failed to post comment.');
    } finally {
      setSubmitting(false);
    }
  };

  // Render comments (no replies)
  const renderComments = (commentsList) =>
    commentsList.map((comment) => (
      <div key={comment.id} className="flex gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">
          {comment.user?.firstName?.[0] || 'U'}
        </div>
        <div className="flex-1">
          <div className="font-semibold">
            {comment.user?.firstName || 'User'}{' '}
            <span className="text-xs text-gray-400 ml-2">{new Date(comment.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="text-gray-700 text-sm">{comment.content}</div>
        </div>
      </div>
    ));

  if (loading) {
    return <div className="text-center py-16">Loading blog...</div>;
  }
  if (error) {
    return <div className="text-center py-16 text-red-500">{error}</div>;
  }
  if (!blog) {
    return <div className="text-center py-16 text-gray-500">Blog not found.</div>;
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-12 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            <img
              src={blog.imageUrl || '/src/assets/images/placeholder.jpg'}
              alt={blog.title || 'Blog image'}
              className="w-full rounded-lg mb-8 h-80 object-cover"
              crossOrigin="anonymous"
              onError={e => { e.target.src = '/src/assets/images/placeholder.jpg'; }}
            />
            <div className="prose max-w-none">
              <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
              <span className="text-gray-500 text-sm block mb-4">{new Date(blog.createdAt).toLocaleDateString()}</span>
              <div className="mb-4 text-gray-700" dangerouslySetInnerHTML={{ __html: blog.content }} />
              {/* Tags */}
           <div>
            <p>Tags</p>
               <div className="flex flex-wrap gap-2 mt-8">
                
                {blog.tags && blog.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-200 rounded-full text-sm">{tag}</span>
                ))}
              </div>
           </div>
            </div>
            {/* Comments and form can remain as static or be removed if not needed */}
          </div>
          {/* Sidebar */}
          <div className="lg:col-span-1">
          

            {/* Comments Section (no replies) */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4">Comments</h3>
              <div className="space-y-6 max-h-80 overflow-y-auto pr-2">
                {comments.length === 0 ? (
                  <div className="text-gray-400 text-center">No comments yet.</div>
                ) : (
                  renderComments(comments)
                )}
              </div>
              {/* Add Comment Form */}
              <form className="mt-6 space-y-3" onSubmit={handleAddComment}>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newComment.firstName}
                  onChange={(e) => setNewComment({ ...newComment, firstName: e.target.value })}
                  disabled={submitting}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newComment.lastName}
                  onChange={(e) => setNewComment({ ...newComment, lastName: e.target.value })}
                  disabled={submitting}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newComment.email}
                  onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                  disabled={submitting}
                />
                <textarea
                  placeholder="Add a comment..."
                  rows="3"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newComment.content}
                  onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                  disabled={submitting}
                ></textarea>
                {commentError && <div className="text-red-500 text-sm">{commentError}</div>}
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full"
                  disabled={submitting}
                >
                  {submitting ? 'Posting...' : 'Post Comment'}
                </button>
              </form>
            </div>
         

          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSingle