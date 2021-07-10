import commentService from '../services/comment.service.js';
import { asyncHandler } from '../middlewares/middlewares.js';

export const getByBlogId = asyncHandler(async (req, res) => {
  // let blogId = req.params.id;
  let blogId = 76;
  let comments = await commentService.getByBlogId(blogId);
  res
    .status(200)
    .send(comments);
})

export const addComment = asyncHandler(async (req, res) => {
  let comment = req.body.comment;
  await commentService.addComment(comment);

  let addedComment = await commentService.getLast();
  console.log('added', addedComment);
  
  res
    .status(200)
    .send(addedComment);
})


