import React, { useState } from 'react';
import { CommentArea } from './CommentArea';
import moment from 'moment';

export const Comment = ({ comment }) => {
  const [showReply, setShowReply] = useState(false);
  const convertDate = (dateString) => {
    return moment(new Date(dateString)).fromNow();
  }

  return (
    <div className="comment">
      <img className="comment_user-profile" src={comment.profile_img} alt="Profile" />
      <div className="comment__box">
        <div className="comment__content">
          <span className="comment__user-name">{comment.name}</span>
          <p>{comment.content}</p>
        </div>
        
        <div className="comment__footer">
          <div className="comment__reply" onClick={() => setShowReply(!showReply)}>Reply</div>
          <span className="comment__date">{convertDate(comment.date)}</span>
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
