import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { follow, removeFollow, hasFollowed } from './reduxSlices/userSlice';

export const ProfilePreview = ({ writerId, name, profileImage}) => {
  const currentUser = useSelector(state => state.users.loggedInUser);
  const followed = useSelector(state => state.users.currentWriter.hasFollowed);
  const dispatch = useDispatch();

  const followWriter = () => {
    if(!followed) {
      dispatch(follow({ followerId: currentUser.id, followedId: writerId }));
    } else {
      dispatch(removeFollow({ followerId: currentUser.id, followedId: writerId }));
    }
  }

  useEffect(() => {
    dispatch(hasFollowed({ followerId: currentUser.id, followedId: writerId }));
  }, [writerId])
  
  return (
    <div className="profilePreview">
      <div className="profilePreview__info">
        <img className="profilePreview__profile" src={profileImage} alt="Profile" />
        <Link 
          className="profilePreview__name"
          to={{
            pathname: `/${name}`,
            state: { writerId: writerId }
          }}
        >
          {name}
        </Link>
      </div>
      <span className="profilePreview__description">Description</span>
      {
        currentUser.id !== writerId
          ? <button className={"profilePreview__follow " + (followed ? "profilePreview__follow-followed" : null)} onClick={followWriter} >
              { followed ? 'Followed' : 'Follow' }
            </button>
          : null
      }
      
    </div>
  )
}
