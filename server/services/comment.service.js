import Comment from '../models/comment.js';

const commentService = {
  getById: async (id) => {
    return await Comment.getById(id);
  },
  getLast: async () => {
    return await Comment.getLast();
  },
  getByBlogId: async (blogId) => {
    return await Comment.getByBlogId(blogId);
  },
  addComment: async (comment) => {
    return await Comment.add(comment);
  }
}

export default commentService;