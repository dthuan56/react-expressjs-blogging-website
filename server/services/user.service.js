import User from '../models/user.js';

const userService = {
  hasBookmarked: async (userId, blogId) => {
    return await User.hasBookmarked(userId, blogId);
  },
  bookmark: async (userId, blogId) => {
    return await User.bookmark(userId, blogId);
  },
  removeBookmark: async (userId, blogId) => {
    return await User.removeBookmark(userId, blogId);
  },
  hasLiked: async (userId, blogId) => {
    return await User.hasLiked(userId, blogId);
  },
  like: async (userId, blogId) => {
    return await User.like(userId, blogId);
  },
  removeLike: async (userId, blogId) => {
    return await User.removeLike(userId, blogId);
  },
}

export default userService;