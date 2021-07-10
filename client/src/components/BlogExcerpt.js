import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

export const BlogExcerpt = forwardRef(({ blog }, ref) => {

  return (
    <article className="blogExcerpt" ref={ref}>
      <div className="blogExcerpt__profile">
        <Link to="/home">
          <img src={blog.profile_img} alt="Profile" />
        </Link>
      </div>
      <div className="blogExcerpt__info">
        <Link className="blogExcerpt__user" to="/home">{blog.name}</Link>
        <span className="blogExcerpt__date">{new Date(blog.written_date).toString()}</span>
        <Link to={{
            pathname: `/blogs/${blog.title}`,
            state: { blogId: blog.id }
          }}
        >
          <h3 className="blogExcerpt__title">{blog.title}</h3>
        </Link>
        <p className="blogExcerpt__content">{blog.content}</p>
        <div className="blogExcerpt__footer">
          <div className="blogExcerpt__footer__left">
            <div className="blogExcerpt__like">
              <FontAwesomeIcon icon={faThumbsUp} size="1x"/>
              <span className="blogExcerpt__number">{blog.like} likes</span>
            </div>
            <div className="blogExcerpt__comment">
              <FontAwesomeIcon icon={faComments} size="1x" />
              <span className="blogExcerpt__number">4 comments</span>
            </div>
          </div>
          <div className="blogExcerpt__bookmark">
            <FontAwesomeIcon icon={faBookmark} size="1x"/>
          </div>
        </div>
      </div>
    </article>
  )
})