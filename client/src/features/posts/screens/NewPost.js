import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { newPost } from '../reduxSlices/postsSlices';

export const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const user = useSelector(state => state.users.loggedInUser);

  const dispatch = useDispatch();
  const history = useHistory();
  
  const createPost = async () => {
    let post = {
      writerId: user.id,
      title: title,
      content: content,
      like: 0,
      writtenDate: new Date().getTime()
    }

    await dispatch(newPost(post));
    history.push('/dashboard/posts');
  }

  return (
    <div className="newPost">
      <textarea 
        value={title} 
        onInput={e => setTitle(e.target.value)}
        className="newPost__title" 
        placeholder="Your post title"
      >
      </textarea>
      <textarea 
        value={content} 
        onInput={e => setContent(e.target.value)}
        className="newPost__content" 
        placeholder="Your your post content"
      >  
      </textarea>
      <button className="newPost__submit-btn" onClick={createPost} >Create new post</button>
    </div>
  )
}
