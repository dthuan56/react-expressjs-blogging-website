import Post from '../models/post.js';
import User from '../models/user.js';

const userService = {
  getById: async (userId) => {
    return await User.getById(userId);
  },
  hasBookmarked: async (userId, postId) => {
    return await User.hasBookmarked(userId, postId);
  },
  bookmark: async (userId, postId) => {
    return await User.bookmark(userId, postId);
  },
  removeBookmark: async (userId, postId) => {
    return await User.removeBookmark(userId, postId);
  },
  hasLiked: async (userId, postId) => {
    return await User.hasLiked(userId, postId);
  },
  like: async (userId, postId) => {
    return await User.like(userId, postId);
  },
  removeLike: async (userId, postId) => {
    return await User.removeLike(userId, postId);
  },
  follow: async (followerId, followedId) => {
    return await User.follow(followerId, followedId);
  },
  removeFollow: async (followerId, followedId) => {
    return await User.removeFollow(followerId, followedId);
  },
  hasFollowed: async (followerId, followedId) => {
    return await User.hasFollowed(followerId, followedId);
  },
  getOwnPosts: async (page, userId) => {
    return await Post.getByWriterId(page, userId);
  },
  getBookmarkedPosts: async (page, userId) => {
    return await Post.getBookmarkedPosts(page, userId);
  },
  getFollowing: async (page, userId) => {
    return await User.getFollowing(page, userId);
  }
  
}

export default userService;