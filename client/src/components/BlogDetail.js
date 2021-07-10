import React from 'react'
import { Link } from 'react-router-dom';
import './BlogDetail.css';

export const BlogDetail = ({ blog }) => {
  
  return (
    <div className="blog">
      <h1 className="blog__title">{blog.title}</h1>
      <div className="blog__info"> 
        <div className="blog__profile">
          <Link to="/home">
            <img src={blog.profile_img} alt="Profile" />
          </Link>
        </div>
        <span className="blog__writer">{blog.name}</span>
        <span className="blog__date">{blog.written_date}</span>
      </div>
      <p>{blog.content}</p>
    </div>
  )
}
