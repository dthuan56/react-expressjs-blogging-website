import commentService from '../services/comment.service.js';
import { asyncHandler } from '../middlewares/middlewares.js';

export const getCommentsByPostId = asyncHandler(async (req, res) => {
  let postId = req.params.id;
  let comments = await commentService.getByPostId(postId);
  res
    .status(200)
    .send(comments);
})

export const addComment = asyncHandler(async (req, res) => {
  let comment = req.body.comment;
  await commentService.addComment(comment);
  
  let comments = await commentService.getByPostId(comment.postId);
  
  res
    .status(200)
    .send(comments);
})


