import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { BlogDetail } from '../BlogDetail';
import { BlogMetrics } from '../BlogMetrics';
import { Sidebar } from '../../layout/Sidebar';
import { ProfilePreview } from '../../users/ProfilePreview';
import { CommentList } from '../CommentList'
import { BlogRecommendationList } from '../BlogRecommendationList';
import { getById, selectAllTrendingBlogs, getTrendingBlogs, getCommentsByBlogId, hasBookmarked } from '../reduxSlices/blogSlices';

export const BlogPage = () => {
  const blogId = useLocation().state.blogId;

  const blog = useSelector(state => state.blogs.currentBlog.blog);
  const user = useSelector(state => state.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById({ blogId, userId: user.id }));
  }, [])

  useEffect(() => {
    dispatch(getTrendingBlogs());
  }, [])

  useEffect(() => {
    dispatch(getCommentsByBlogId(blogId));
  }, [])

  return (
    <div className="blogPage">
      <div className="blogPage__blogMetrics">
        <BlogMetrics blog={blog}/>
      </div>
      <div className="blogPage__blog">
        <BlogDetail  blog={blog} />
        <CommentList />
      </div>
      <div className="blogPage__sidebar">
        <Sidebar >
          <ProfilePreview id={blog.writer_id} name={blog.name} profileImage={blog.profile_img} />
          <BlogRecommendationList selector={selectAllTrendingBlogs} />
        </Sidebar>
      </div>
      
    </div>
  )
}
