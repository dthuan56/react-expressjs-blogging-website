import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CommentArea } from './CommentArea';

export const Comment = ({ comment }) => {
  const [showReply, setShowReply] = useState(false);
  const log = () => {
    console.log('vl');
  }
  return (
    <div className="comment">
      <Link to="/home">
        <img className="comment_user-profile" src={comment.profile_img} alt="Profile" />
      </Link>
      <div className="comment__box">
        <div className="comment__content">
          <span className="comment__user-name">{comment.name}</span>
          <p>{comment.content}</p>
        </div>
        
        <div className="comment__footer">
          <div className="comment__reply" onClick={() => setShowReply(!showReply)}>Reply</div>
          <span className="comment__date">{comment.date}</span>
        </div>
        {
          showReply ? <CommentArea parent={comment} setShow={setShowReply} /> : null
        }
        {
          comment.replies 
            ? comment.replies.map(reply => <Comment key={reply.id} comment={reply} />)
            : null
        }
      </div>
    </div>
  )
}
