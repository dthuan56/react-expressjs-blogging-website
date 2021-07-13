import express from 'express';
import { bookmark, removeBookmark, hasBookmarked, hasLiked, like, removeLike, getById, hasFollowed, follow, removeFollow, getOwnPosts, getBookmarkedPosts, getFollowing } from '../controllers/user.controller.js';


var router = express.Router();

router.get('/users/:userId/bookmark/:postId', hasBookmarked);
router.post('/users/:userId/bookmark', bookmark);
router.delete('/users/:userId/bookmark/:postId', removeBookmark);
router.get('/users/:userId/bookmark', getBookmarkedPosts);


router.get('/users/:userId/like/:postId', hasLiked);
router.post('/users/:userId/like', like);
router.delete('/users/:userId/like/:postId', removeLike);
router.get('/users/:userId', getById);
router.get('/users/:followerId/follow/:followedId', hasFollowed);
router.post('/users/:followerId/follow', follow);
router.delete('/users/:followerId/follow/:followedId', removeFollow);

router.get('/users/:userId/following', getFollowing);
router.get('/users/:userId/posts', getOwnPosts);
export default router;

