import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CommentArea } from './CommentArea';
import './Comment.css';

export const Comment = ({ comment }) => {
  const [showReply, setShowReply] = useState(false);

  return (
    <div className="comment">
      <Link to="/home">
        <img className="comment_user-profile" src={comment.profile_img} alt="Profile" />
      </Link>
      <div className="comment__box">
        <p className="comment__content">{comment.content}</p>
        <div className="comment__footer">
          <div className="comment__reply" onClick={() => setShowReply(!showReply)}>Reply</div>
          <span className="comment__date">{comment.date}</span>
        </div>
        {
          showReply ? <CommentArea comment={comment} /> : null
        }
      </div>
    </div>
  )
}
