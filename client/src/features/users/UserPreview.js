import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

export const UserPreview = forwardRef(({ user }, ref) => {

  return (
    <div className="userPreview" ref={ref}>
      <div className="postPreview__profile">
        <img src={user.profile_img} alt="Profile" />
      </div>
      <Link 
          className="postPreview__user"
          to={{
            pathname: `/${user.name}`,
            state: { writerId: user.id }
          }}
        >
          {user.name}
        </Link>
    </div>
  )
})