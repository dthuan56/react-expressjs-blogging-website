import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Feed } from './Feed';
import { Sidebar } from './Sidebar';
import { BlogRecommendationList } from './BlogRecommendationList';
import { selectAllTrendingBlogs, selectAllNewestBlogs, getTrendingBlogs } from '../slices/blogSlices';
import './Home.css'

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingBlogs());
  }, [])

  return (
    <div className="home">
      <div className="home__feed">
       <Feed />
      </div>
      <div className="home__sidebar">
        <Sidebar>
          <BlogRecommendationList selector={selectAllTrendingBlogs} />
          {/* <BlogRecommendationList selector={selectAllNewestBlogs} /> */}
        </Sidebar>
      </div>
    </div>
  )
}