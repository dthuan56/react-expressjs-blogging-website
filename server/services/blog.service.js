import Blog from '../models/blog.js';

const blogService = {
  get: async (page) => {
    return await Blog.get(page);
  },
  getTrendingBlogs: async () => {
    return await Blog.getTrendingBlogs();
  },
  getById: async (blogId) => {
    return await Blog.getById(blogId);
  },
  update: async (blog) => {
    return await Blog.update(blog);
  }
}

export default blogService;