import React from 'react';
import { Link } from 'react-router-dom';

export const PostRecommendation = ({ post }) => {
  return (
    <div className="postRecommendation">
      <Link
        className="postRecommendation__title" 
        to={{
          pathname: `/posts/${post.title}`,
          state: { postId: post.id }
        }}
      >
        {post.title}
      </Link>
      <Link 
          className="postRecommendation__writer"
          to={{
            pathname: `/${post.name}`,
            state: { writerId: post.writer_id }
          }}
        >
          {post.name}
        </Link>
    </div>
  )
}
