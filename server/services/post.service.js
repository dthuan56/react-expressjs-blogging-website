import Post from '../models/post.js';

const postService = {
  getAll: async (page) => {
    return await Post.getAll(page);
  },
  newPost: async (post) => {
    return await Post.newPost(post);
  },
  getTrendingPosts: async () => {
    return await Post.getTrendingPosts();
  },
  getNewestPosts: async () => {
    return await Post.getNewestPosts();
  },
  getById: async (postId) => {
    return await Post.getById(postId);
  },
  getByWriterId: async (page, writerId) => {
    return await Post.getByWriterId(page, writerId);
  },
  update: async (post) => {
    return await Post.update(post);
  }
}

export default postService;