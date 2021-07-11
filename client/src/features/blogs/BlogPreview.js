import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

export const BlogPreview = forwardRef(({ blog }, ref) => {

  return (
    <article className="blogPreview" ref={ref}>
      <div className="blogPreview__profile">
        <Link to="/home">
          <img src={blog.profile_img} alt="Profile" />
        </Link>
      </div>
      <div className="blogPreview__info">
        <Link className="blogPreview__user" to="/home">{blog.name}</Link>
        <span className="blogPreview__date">{new Date(blog.written_date).toString()}</span>
        <Link to={{
            pathname: `/blogs/${blog.title}`,
            state: { blogId: blog.id }
          }}
        >
          <h3 className="blogPreview__title">{blog.title}</h3>
        </Link>
        <p className="blogPreview__content">{blog.content}</p>
        <div className="blogPreview__footer">
          <div className="blogPreview__footer__left">
            <div className="blogPreview__like">
              <FontAwesomeIcon icon={faThumbsUp} size="1x"/>
              <span className="blogPreview__number">{blog.like} likes</span>
            </div>
            <div className="blogPreview__comment">
              <FontAwesomeIcon icon={faComments} size="1x" />
              <span className="blogPreview__number">4 comments</span>
            </div>
          </div>
          <div className="blogPreview__bookmark">
            <FontAwesomeIcon icon={faBookmark} size="1x"/>
          </div>
        </div>
      </div>
    </article>
  )
})