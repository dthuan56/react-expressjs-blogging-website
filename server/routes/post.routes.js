import express from 'express';
import { getAll, getTrendingPosts, getById, updatePost, getByWriterId, getNewestPosts, newPost } from '../controllers/post.controller.js';
import { addComment, getCommentsByPostId } from '../controllers/comment.controller.js';


var router = express.Router();

router.get('/posts', getAll);

router.post('/posts', newPost);
router.put('/posts/:id', updatePost);
router.get('/posts/trending', getTrendingPosts);
router.get('/posts/newest', getNewestPosts);
router.get('/posts/writers/:writerId', getByWriterId);
router.get('/posts/:id/comments', getCommentsByPostId);
router.post('/posts/:id/comments', addComment);
router.get('/posts/:id', getById);

export default router;


