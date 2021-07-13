import userService from '../services/user.service.js';
import { asyncHandler } from '../middlewares/middlewares.js';

export const hasBookmarked = asyncHandler(async (req, res) => {
  let postId = req.params.postId;
  let userId = req.params.userId;

  let hasBookmarked = await userService.hasBookmarked(userId, postId);

  res
    .status(200)
    .send(hasBookmarked);
})

export const bookmark = asyncHandler(async (req, res) => {
  let userId = req.params.userId;
  let postId = req.body.postId;

  await userService.bookmark(userId, postId);
  
  res.sendStatus(200);
})

export const removeBookmark = asyncHandler(async (req, res) => {
  let userId = req.params.userId;
  let postId = req.params.postId

  await userService.removeBookmark(userId, postId);
  
  res.sendStatus(200);
})

export const hasLiked = asyncHandler(async (req, res) => {
  let postId = req.params.postId;
  let userId = req.params.userId;

  let hasLiked = await userService.hasLiked(userId, postId);

  res
    .status(200)
    .send(hasLiked);
})

export const like = asyncHandler(async (req, res) => {
  let userId = req.params.userId;
  let postId = req.body.postId;
  await userService.like(userId, postId);
  
  res.sendStatus(200);
})

export const removeLike = asyncHandler(async (req, res) => {
  let userId = req.params.userId;
  let postId = req.params.postId;
  await userService.removeLike(userId, postId);
  
  res.sendStatus(200);
})

export const getById = asyncHandler(async (req, res) => {
  let userId = req.params.userId;
  let user = await userService.getById(userId);

  res
    .status(200)
    .send(user);
})

export const follow = asyncHandler(async (req, res) => {
  let followerId = req.params.followerId;
  let followedId = req.body.followedId;
  await userService.follow(followerId, followedId);
  
  res.sendStatus(200);
})

export const hasFollowed = asyncHandler(async (req, res) => {
  let followerId = req.params.followerId;
  let followedId = req.params.followedId;

  let hasFollowed = await userService.hasFollowed(followerId, followedId);

  res
    .status(200)
    .send(hasFollowed);
})

export const removeFollow = asyncHandler(async (req, res) => {
  let followerId = req.params.followerId;
  let followedId = req.params.followedId;
  await userService.removeFollow(followerId, followedId);
  
  res.sendStatus(200);
})

export const getOwnPosts = asyncHandler(async (req, res) => {
  let userId = req.params.userId;
  let page = req.query.page;

  let postPage = await userService.getOwnPosts(page, userId);

  res
    .status(200)
    .send(postPage);
})

export const getBookmarkedPosts = asyncHandler(async (req, res) => {
  let userId = req.params.userId;
  let page = req.query.page;

  let postPage = await userService.getBookmarkedPosts(page, userId);

  res
    .status(200)
    .send(postPage);
})

export const getFollowing = asyncHandler(async (req, res) => {
  let userId = req.params.userId;
  let page = req.query.page;

  let followingList = await userService.getFollowing(page, userId);

  res
    .status(200)
    .send(followingList);
})
