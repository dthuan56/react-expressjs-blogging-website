import React from 'react';
import { useSelector } from 'react-redux';
import { Comment } from './Comment';
import './CommentList.css';

export const CommentList = () => {
  const comments = useSelector(state => state.blogs.currentBlog.comments);

  return (
    <div className="commentList">
      <h3 className="commentList__header">Comments</h3>
      {
        comments.map(comment => <Comment key={comment.id} comment={comment} />)
      }
    </div>
  )
}
