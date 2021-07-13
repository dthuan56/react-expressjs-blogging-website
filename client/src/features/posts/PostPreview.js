import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const PostPreview = forwardRef(({ post }, ref) => {
  const convertDate = (dateString) => {
    return moment(new Date(dateString)).fromNow();
  }

  return (
    <article className="postPreview" ref={ref}>
      <div className="postPreview__profile">
        <img src={post.profile_img} alt="Profile" />
      </div>
      <div className="postPreview__info">
        <Link 
          className="postPreview__user"
          to={{
            pathname: `/${post.name}`,
            state: { writerId: post.writer_id }
          }}
        >
          {post.name}
        </Link>
        <span className="postPreview__date">{convertDate(post.written_date)}</span>
        <Link
          className="postPreview__title" 
          to={{
            pathname: `/posts/${post.title}`,
            state: { postId: post.id }
          }}
        >
          {post.title}
        </Link>
        <p className="postPreview__content">{post.content}</p>
      </div>
    </article>
  )
})