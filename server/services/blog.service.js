import Blog from '../models/blog.js';

const blogService = {
  get: async (page) => {
    const a = await Blog.get(page);
    console.log(a);
    return a;
  }
}

export default blogService;