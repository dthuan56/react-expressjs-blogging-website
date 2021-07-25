import Post from '../models/post.js';
import User from '../models/user.js';

const userService = {
  getById: (userId) => {
    return User.getById(userId);
  },
  hasBookmarked: (userId, postId) => {
    return User.hasBookmarked(userId, postId);
  },
  bookmark: (userId, postId) => {
    return User.bookmark(userId, postId);
  },
  removeBookmark: (userId, postId) => {
    return User.removeBookmark(userId, postId);
  },
  hasLiked: (userId, postId) => {
    return User.hasLiked(userId, postId);
  },
  like: (userId, postId) => {
    return User.like(userId, postId);
  },
  removeLike: (userId, postId) => {
    return User.removeLike(userId, postId);
  },
  follow: (followerId, followedId) => {
    return User.follow(followerId, followedId);
  },
  removeFollow: (followerId, followedId) => {
    return User.removeFollow(followerId, followedId);
  },
  hasFollowed: (followerId, followedId) => {
    return User.hasFollowed(followerId, followedId);
  },
  getOwnPosts: (page, userId) => {
    return Post.getByWriterId(page, userId);
  },
  getBookmarkedPosts: (page, userId) => {
    return Post.getBookmarkedPosts(page, userId);
  },
  getFollowing: (page, userId) => {
    return User.getFollowing(page, userId);
  }
  
}

export default userService;