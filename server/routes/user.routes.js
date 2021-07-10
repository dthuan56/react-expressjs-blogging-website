import express from 'express';
import { bookmark, removeBookmark, hasBookmarked, hasLiked, like, removeLike } from '../controllers/user.controller.js';


var router = express.Router();

router.get('/users/:userId/bookmark/:blogId', hasBookmarked);
router.post('/users/:userId/bookmark', bookmark);
router.delete('/users/:userId/bookmark', removeBookmark);
router.get('/users/:userId/like/:blogId', hasLiked);
router.post('/users/:userId/like', like);
router.delete('/users/:userId/like', removeLike);
export default router;

