import userService from '../services/user.service.js';
import { asyncHandler } from '../middlewares/middlewares.js';

export const hasBookmarked = asyncHandler(async (req, res) => {
  let blogId = req.params.blogId;
  let userId = req.params.userId;

  let hasBookmarked = await userService.hasBookmarked(userId, blogId);

  res
    .status(200)
    .send(hasBookmarked);
})

export const bookmark = asyncHandler(async (req, res) => {
  let userId = req.params.userId;
  let blogId = req.body.blogId;
  await userService.bookmark(userId, blogId);
  
  res.sendStatus(200);
})

export const removeBookmark = asyncHandler(async (req, res) => {
  let userId = req.params.userId;
  let blogId = req.body.blogId;
  await userService.removeBookmark(userId, blogId);
  
  res.sendStatus(200);
})

export const hasLiked = asyncHandler(async (req, res) => {
  let blogId = req.params.blogId;
  let userId = req.params.userId;

  let hasLiked = await userService.hasLiked(userId, blogId);

  res
    .status(200)
    .send(hasLiked);
})

export const like = asyncHandler(async (req, res) => {
  let userId = req.params.userId;
  let blogId = req.body.blogId;
  await userService.like(userId, blogId);
  
  res.sendStatus(200);
})

export const removeLike = asyncHandler(async (req, res) => {
  let userId = req.params.userId;
  let blogId = req.body.blogId;
  await userService.removeLike(userId, blogId);
  
  res.sendStatus(200);
})