import React from 'react';
import { BlogRecommendation } from './BlogRecommendation';
import { useSelector } from 'react-redux';

export const BlogRecommendationList = ({ selector }) => {
  const blogs = useSelector(selector);
  
  return (
    <div className="blogRecommendationList">
      {
        blogs.map(blog => <BlogRecommendation key={blog.id} blog={blog} />)
      }
    </div>
  )
}
