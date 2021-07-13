import React from 'react';
import { PostRecommendation } from './PostRecommendation';
import { useSelector } from 'react-redux';

export const PostRecommendationList = ({ title, selector }) => {
  const posts = useSelector(selector);
  
  return (
    <div className="postRecommendationList">
      <h3 className="postRecommendationList__title">{title}</h3>
      {
        posts.map(post => <PostRecommendation key={post.id} post={post} />)
      }
    </div>
  )
}
