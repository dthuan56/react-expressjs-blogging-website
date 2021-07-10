import React from 'react';
import './BlogRecommendation.css';

export const BlogRecommendation = ({ blog }) => {
  return (
    <div className="blogRecommendation">
      <span className="blogRecommendation__title">{blog.title}</span>
      <span className="blogRecommendation__writer">{blog.name}</span>
    </div>
  )
}
