import React from 'react';
import { Link } from 'react-router-dom';
import './ProfilePreview.css';
export const ProfilePreview = ({ id, name, profileImg}) => {

  return (
    <div className="profilePreview">
      <div className="profilePreview__info">
        <Link to="/home">
          <img className="profilePreview__profile" src={profileImg} alt="Profile" />
        </Link>
        <span>{name}</span>
      </div>
      <span className="profilePreview__description">Description</span>
      <button className="profilePreview__follow">Follow</button>
    </div>
  )
}
