import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

export const PostDetail = ({ post }) => {

  const convertDate = (dateString) => {
    return moment(new Date(dateString)).fromNow();
  }

  return (
    <div className="post">
      <h1 className="post__title">{post.title}</h1>
      <div className="post__info"> 
        <div className="post__profile">
          <img src={post.profile_img} alt="Profile" />
        </div>
        <Link 
          className="post__writer"
          to={{
            pathname: `/${post.name}`,
            state: { writerId: post.writer_id }
          }}
        >
          {post.name}
        </Link>
        <span className="post__date">{convertDate(post.written_date)}</span>
      </div>
      <p>{post.content}</p>
    </div>
  )
}
