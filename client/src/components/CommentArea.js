import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addComment } from '../slices/blogSlices';

export const CommentArea = ({ parent, setShow }) => {
  const [content, setContent] = useState('');
  const user = useSelector(state => state.auth.user);
  const currentBlog = useSelector(state => state.blogs.currentBlog.blog);

  const dispatch = useDispatch();
  const postComment = () => {
    let comment = {
      userId: user.id,
      blogId: currentBlog.id,
      parentId: parent ? parent.id : null,
      content: content
    }
    
    dispatch(addComment({
      blogId: currentBlog.id, 
      comment
    }));

    setContent('');
    
    //remove this component when used as reply area for a comment
    if(setShow) {
      setShow(false);
    }
    
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
        <button onClick={postComment}>Post</button>
      </div>
    </div>
  )
}
