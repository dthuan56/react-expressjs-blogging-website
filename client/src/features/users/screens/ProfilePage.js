import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { getById, getWriterPosts, resetCurrentWriter, selectCurrentWriterPosts } from '../reduxSlices/userSlice';
import { Feed } from '../../posts/Feed';
import { ProfilePreview } from '../ProfilePreview';

export const ProfilePage = () => {
  // get id of writer passed from react-router Link
  const writerId = useLocation().state.writerId;

  // get current writer from store
  const currentWriter = useSelector(state => state.users.currentWriter.writer)
  const dispatch = useDispatch();

  useEffect(() => {
    const loadWriterAndPosts = async () => {
      // get writer by id 
      await dispatch(getById(writerId));
      dispatch(resetCurrentWriter());

      // get writer posts after writer has been loaded to store
      dispatch(getWriterPosts());
    }
    
    loadWriterAndPosts();
  }, [writerId])

  // function to refresh Feed component
  const refreshFeed = () => {
    dispatch(getWriterPosts());
  }


  return (
    <div className="profilePage">
      <div className="profilePage__info">
        <ProfilePreview writerId={currentWriter.id} name={currentWriter.name} profileImage={currentWriter.profile_img} />
      </div>
      <div className="profilePage__feed">
        <Feed refreshFeed={refreshFeed} selector={selectCurrentWriterPosts} />
      </div>
    </div>
  )
}
