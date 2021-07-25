import Post from '../models/post.js';

const postService = {
  getAll: (page) => {
    return  Post.getAll(page);
  },
  newPost: (post) => {
    return Post.newPost(post);
  },
  getTrendingPosts: () => {
    return Post.getTrendingPosts();
  },
  getNewestPosts: () => {
    return Post.getNewestPosts();
  },
  getById: (postId) => {
    return Post.getById(postId);
  },
  getByWriterId: (page, writerId) => {
    return Post.getByWriterId(page, writerId);
  },
  update: (post) => {
    return Post.update(post);
  }
}

export default postService;