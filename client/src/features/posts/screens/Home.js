import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Feed } from '../Feed';
import { Sidebar } from '../../layout/Sidebar';
import { PostRecommendationList } from '../PostRecommendationList';
import { selectAllTrendingPosts, selectAllNewestPosts, getTrendingPosts, getPosts, getNewestPosts, selectHomePosts} from '../reduxSlices/postsSlices';

export const Home = () => {
  const dispatch = useDispatch();

  const refreshFeed = () => {
    dispatch(getPosts());
  }

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getTrendingPosts());
    dispatch(getNewestPosts());
  }, [])

  return (
    <div className="home">
      <div className="home__feed">
       <Feed refreshFeed={refreshFeed} selector={selectHomePosts} />
      </div>
      <div className="home__sidebar">
        <Sidebar>
          <PostRecommendationList title={'Trending Posts'} selector={selectAllTrendingPosts} />
          <PostRecommendationList title={'Newest Posts'} selector={selectAllNewestPosts} />
        </Sidebar>
      </div>
    </div>
  )
}