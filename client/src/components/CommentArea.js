import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addComment } from '../slices/blogSlices';
import './CommentArea.css';

export const CommentArea = ({ comment }) => {
  const [content, setContent] = useState('');
  const user = useSelector(state => state.auth.user);
  const currentBlog = useSelector(state => state.blogs.currentBlog.blog);

  const dispatch = useDispatch();
  const reply = () => {
    let reply = {
      userId: user.id,
      blogId: currentBlog.id,
      parentId: comment.id,
      content: content
    }
    
    dispatch(addComment({
      blogId: currentBlog.id, 
      comment: reply
    }));
  }

  return (
    <div className="commentArea">
      <Link to="/home">
        <img className="commentArea__profile" src={user.profile_img} alt="Profile" />
      </Link>
      <div className="commentArea__reply">
        <textarea 
          className="commentArea__text" 
          value={content} 
          onInput={e => setContent(e.target.value)}
        >
        </textarea> 
        <button onClick={reply}>Post</button>
      </div>
    </div>
  )
}
