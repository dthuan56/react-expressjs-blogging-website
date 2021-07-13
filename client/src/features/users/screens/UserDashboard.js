import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { 
  resetUserPosts, 
  getOwnPosts, 
  resetBookmarkedPosts, 
  getBookmarkPosts, 
  selectUserPosts, 
  selectUserBookmarkedPosts, 
  getFollowing, 
  resetFollowingWriter, 
  selectUserFollowingList } from '../reduxSlices/dashboardSlice';
import { Feed } from '../../posts/Feed';

export const UserDashboard = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  
  useEffect(() => {
    switch(location.pathname) {
      case '/dashboard/posts': 
        dispatch(resetUserPosts());
        dispatch(getOwnPosts());
        break;
      case '/dashboard/bookmarks':
        dispatch(resetBookmarkedPosts());
        dispatch(getBookmarkPosts());
        break;
      case '/dashboard/followings':
        dispatch(resetFollowingWriter());
        dispatch(getFollowing());
        break;
      default: 
        break;
    };
  }, [location]);

  

  const refreshPostFeed = () => {
    dispatch(getOwnPosts());
  }

  const refreshBookmarkFeed = () => {
    dispatch(getBookmarkPosts());
  }

  const refreshFollowingFeed = () => {
    dispatch(getFollowing());
  }


  return (
    <div className="dashboard">
      <div className="dashboard__sidebar">
        <Link to="/dashboard/posts">Your posts</Link>
        <Link to="/dashboard/bookmarks">Your bookmarks</Link>
        <Link to="/dashboard/followings">Your followings</Link>
      </div>
      <div className="dashboard__main">
        <Switch>
          <Route exact path="/dashboard/posts">
            <Feed refreshFeed={refreshPostFeed} selector={selectUserPosts} />
          </Route>
          <Route exact path="/dashboard/bookmarks">
            <Feed refreshFeed={refreshBookmarkFeed} selector={selectUserBookmarkedPosts} />
          </Route>
          <Route exact path="/dashboard/followings">
            <Feed refreshFeed={refreshFollowingFeed} selector={selectUserFollowingList} isUserFeed={true} />
          </Route>
        </Switch>
      </div>
    </div>
  )
}