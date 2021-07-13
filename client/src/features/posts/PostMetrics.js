import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as noFillThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as filledThumbsUp} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as noFillBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as filledBookmark} from '@fortawesome/free-solid-svg-icons';
import { bookmark, removeBookmark, hasBookmarked, like, removeLike, hasLiked } from '../users/reduxSlices/userSlice';
import { updatePost } from './reduxSlices/postsSlices';

export const PostMetrics = ({ post }) => {
  const liked = useSelector(state => state.users.currentPost.liked);
  const bookmarked = useSelector(state => state.users.currentPost.bookmarked);
  const user = useSelector(state => state.users.loggedInUser);

  const dispatch = useDispatch();

  const likePost = () => {
    if(!liked) {
      dispatch(like({ userId: user.id, postId: post.id }));
      dispatch(updatePost({...post, like: post.like + 1}));
    } else {
      dispatch(removeLike({ userId: user.id, postId: post.id }));
      dispatch(updatePost({...post, like: post.like - 1}));
    }
  }

  const bookmarkPost = () => {
    if(!bookmarked) {
      dispatch(bookmark({ postId: post.id, userId: user.id }));
    } else {
      dispatch(removeBookmark({ postId: post.id, userId: user.id }));
    }
  }

  useEffect(() => {
    if(post && Object.keys(post).length !== 0) {
      dispatch(hasBookmarked({ userId: user.id, postId: post.id }));
      dispatch(hasLiked({ userId: user.id, postId: post.id }));
    }
  }, [post])

  return (
    <div className="postMetrics">
      <div className="postMetrics__item" onClick={likePost}>
        {
          liked 
            ? <FontAwesomeIcon className="postMetrics__item--filled" icon={filledThumbsUp} size="1x"/>
            : <FontAwesomeIcon icon={noFillThumbsUp} size="1x"/>
        }
        <span className="postMetrics__count">{post.like}</span>
      </div>
      <div className="postMetrics__item" onClick={bookmarkPost}>
        {
          bookmarked
            ? <FontAwesomeIcon className="postMetrics__item--filled" icon={filledBookmark} size="1x"/>
            : <FontAwesomeIcon icon={noFillBookmark} size="1x"/>
        }
      </div>
    </div>
  )
}
