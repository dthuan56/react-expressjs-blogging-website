import commentService from '../services/comment.service.js';
import { asyncHandler } from '../middlewares/middlewares.js';

export const getByBlogId = asyncHandler(async (req, res) => {
  let blogId = req.params.id;
  let comments = await commentService.getByBlogId(blogId);
  res
    .status(200)
    .send(comments);
})

export const addComment = asyncHandler(async (req, res) => {
  let comment = req.body.comment;
  await commentService.addComment(comment);
  
  let comments = await commentService.getByBlogId(comment.blogId);
  
  res
    .status(200)
    .send(comments);
})


