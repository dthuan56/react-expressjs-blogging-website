import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BlogPreview } from './BlogPreview';
import { getBlogs } from './reduxSlices/blogSlices';

export const Feed = () => {
  // const user = JSON.parse(localStorage.getItem('user'));
  const blogs = useSelector(state => state.blogs.blogs);
  const dispatch = useDispatch();

  const observer = useRef();
  const lastBlog = useCallback(element => {
    if(observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting) {
        dispatch(getBlogs());
      }
    })

    if(element) {
      observer.current.observe(element);
    }
  }, []);

  useEffect(() => {
    dispatch(getBlogs());
  }, [])
  
  return (
    <div className="feed">
      {
        
        blogs.map((blog, index) => {
          if(index === blogs.length - 1) {
            return <BlogPreview ref={lastBlog} key={index} blog={blog} />
          } else {
            return <BlogPreview key={index} blog={blog} />
          }
          
        })
      }
    </div>

  )
}