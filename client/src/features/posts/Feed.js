import React, { useRef, useCallback } from 'react';
import { useSelector } from 'react-redux'
import { PostPreview } from './PostPreview';
import { UserPreview } from '../users/UserPreview';

export const Feed = ({ refreshFeed, selector, isUserFeed }) => {
  const data = useSelector(selector);

  const observer = useRef();

  const lastPost = useCallback(element => {

    const scrollLoadData = (element) => {
      if(observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting) {
          refreshFeed();
        }
      })
  
      if(element) {
        observer.current.observe(element);
      }
    }

    scrollLoadData(element);

    return () => scrollLoadData();
  }, [refreshFeed, selector]);
  
  return (
    <div className="feed">
      {
        isUserFeed 
          ? data.map((user, index) => {
              if(index === data.length - 1) {
                return <UserPreview ref={lastPost} key={user.id} user={user} />
              } else {
                return <UserPreview key={user.id} user={user} />
              }
            })
          : data.map((post, index) => {
              if(index === data.length - 1) {
                return <PostPreview ref={lastPost} key={post.id} post={post} />
              } else {
                return <PostPreview key={post.id} post={post} />
              }
            })
      }
    </div>

  )
}
