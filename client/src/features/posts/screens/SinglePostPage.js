import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { PostDetail } from '../PostDetail';
import { PostMetrics } from '../PostMetrics';
import { Sidebar } from '../../layout/Sidebar';
import { ProfilePreview } from '../../users/ProfilePreview';
import { CommentList } from '../CommentList'
import { PostRecommendationList } from '../PostRecommendationList';
import { getById, selectAllTrendingPosts, getTrendingPosts, getCommentsByPostId } from '../reduxSlices/postsSlices';

export const PostPage = () => {
  const postId = useLocation().state.postId;

  const post = useSelector(state => state.posts.singlePostPage.post);
  const user = useSelector(state => state.users.loggedInUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById({ postId, userId: user.id }));
  }, [])

  useEffect(() => {
    dispatch(getTrendingPosts());
  }, [])

  useEffect(() => {
    dispatch(getCommentsByPostId(postId));
  }, [])

  return (
    <div className="postPage">
      <div className="postPage__postMetrics">
        <PostMetrics post={post}/>
      </div>
      <div className="postPage__post">
        <PostDetail  post={post} />
        <CommentList />
      </div>
      <div className="postPage__sidebar">
        <Sidebar >
          <ProfilePreview writerId={post.writer_id} name={post.name} profileImage={post.profile_img} />
          <div class="postPage__post-list">
            <PostRecommendationList title={'Trending Posts'} selector={selectAllTrendingPosts} />
          </div>
        </Sidebar>
      </div>
      
    </div>
  )
}
