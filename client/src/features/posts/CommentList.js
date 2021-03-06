import React from 'react';
import { useSelector } from 'react-redux';
import { Comment } from './Comment';
import { CommentArea } from './CommentArea';

export const CommentList = () => {
  const comments = useSelector(state => state.posts.singlePostPage.comments);

  return (
    <div className="commentList">
      <h3 className="commentList__header">Comments</h3>
      <CommentArea />
      {
        comments.map(comment => <Comment key={comment.id} comment={comment} />)
      }
    </div>
  )
}
