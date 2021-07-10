import express from 'express';
import { get, getTrendingBlogs, getById, updateBlog } from '../controllers/blog.controller.js';
import { addComment, getByBlogId } from '../controllers/comment.controller.js';


var router = express.Router();

router.get('/blogs', get);
router.put('/blogs/:id', updateBlog);
router.get('/blogs/trending', getTrendingBlogs);
router.get('/blogs/:id', getById);
router.get('/blogs/:id/comments', getByBlogId);
router.post('/blogs/:id/comments', addComment);

export default router;


