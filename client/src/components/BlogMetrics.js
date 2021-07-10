import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as noFillThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as filledThumbsUp} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as noFillBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as filledBookmark} from '@fortawesome/free-solid-svg-icons';
import { bookmark, removeBookmark, hasBookmarked, like, removeLike, hasLiked } from '../slices/userSlice';
import './BlogMetrics.css';
import { updateBlog } from '../slices/blogSlices';

export const BlogMetrics = () => {
  const liked = useSelector(state => state.auth.currentBlog.liked);
  const bookmarked = useSelector(state => state.auth.currentBlog.bookmarked);
  const user = useSelector(state => state.auth.user);
  const blog = useSelector(state => state.blogs.currentBlog.blog);
  const dispatch = useDispatch();

  const likeBlog = () => {
    if(!liked) {
      dispatch(like({ userId: user.id, blogId: blog.id }));
      dispatch(updateBlog({...blog, like: blog.like + 1}));
    } else {
      dispatch(removeLike({ userId: user.id, blogId: blog.id }));
      dispatch(updateBlog({...blog, like: blog.like - 1}));
    }
  }

  const bookmarkBlog = () => {
    if(!bookmarked) {
      dispatch(bookmark({ blogId: blog.id, userId: user.id }));
    } else {
      dispatch(removeBookmark({ blogId: blog.id, userId: user.id }));
    }
  }

  useEffect(() => {
    dispatch(hasBookmarked({ userId: user.id, blogId: blog.id }));
  }, [blog])

  useEffect(() => {
    dispatch(hasLiked({ userId: user.id, blogId: blog.id }));
  }, [blog])

  return (
    <div className="blogMetrics">
      <div className="blogMetrics__item" onClick={likeBlog}>
        {
          liked 
            ? <FontAwesomeIcon className="blogMetrics__item--filled" icon={filledThumbsUp} size="1x"/>
            : <FontAwesomeIcon icon={noFillThumbsUp} size="1x"/>
        }
        <span className="blogMetrics__count">{blog.like}</span>
      </div>
      <div className="blogMetrics__item" onClick={bookmarkBlog}>
        {
          bookmarked
            ? <FontAwesomeIcon className="blogMetrics__item--filled" icon={filledBookmark} size="1x"/>
            : <FontAwesomeIcon icon={noFillBookmark} size="1x"/>
        }
      </div>
    </div>
  )
}
