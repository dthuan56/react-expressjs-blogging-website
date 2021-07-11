import React from 'react';
import { Link } from 'react-router-dom';

export const ProfilePreview = ({ id, name, profileImage}) => {

  return (
    <div className="profilePreview">
      <div className="profilePreview__info">
        <Link to="/home">
          <img className="profilePreview__profile" src={profileImage} alt="Profile" />
        </Link>
        <Link className="profilePreview__name" to="/home">{name}</Link>
      </div>
      <span className="profilePreview__description">Description</span>
      <button className="profilePreview__follow">Follow</button>
    </div>
  )
}
