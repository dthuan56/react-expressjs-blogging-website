import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addComment } from './reduxSlices/postsSlices';

export const CommentArea = ({ parent, setShow }) => {
  const [content, setContent] = useState('');
  const user = useSelector(state => state.users.loggedInUser);
  const currentPost = useSelector(state => state.posts.singlePostPage.post);

  const dispatch = useDispatch();
  const postComment = () => {
    let comment = {
      userId: user.id,
      postId: currentPost.id,
      parentId: parent ? parent.id : null,
      content: content
    }
    
    dispatch(addComment({
      postId: currentPost.id, 
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
        <button className="commentArea__reply-button" onClick={postComment}>Post</button>
      </div>
    </div>
  )
}
