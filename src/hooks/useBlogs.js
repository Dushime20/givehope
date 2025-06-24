// src/hooks/useBlogs.js
import { useState, useEffect } from 'react'

const useBlogs = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    // You can replace this with real fetch logic later
    setBlogs([
      { id: 1, title: 'Welcome to the Dashboard!', content: 'Example blog post' }
    ])
  }, [])

  return blogs
}

export default useBlogs
