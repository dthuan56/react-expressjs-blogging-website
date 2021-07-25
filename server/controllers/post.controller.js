import postService from '../services/post.service.js';
import { asyncHandler } from '../middlewares/middlewares.js';

export const getAll = asyncHandler(async (req, res, next) => {
  let page = req.query.page;
  let posts = await postService.getAll(page);

  res
    .status(200)
    .send(posts);
});

export const newPost = asyncHandler(async (req, res) => {
  let post = req.body.post;
  await postService.newPost(post);
  res.sendStatus(200);
});

export const getTrendingPosts = asyncHandler(async (req, res) => {
  let trendingPosts = await postService.getTrendingPosts();
  res
    .status(200)
    .send(trendingPosts);
});

export const getNewestPosts = asyncHandler(async (req, res) => {
  let newestPosts = await postService.getNewestPosts();
  res
    .status(200)
    .send(newestPosts);
});

export const getById = asyncHandler(async (req, res) => {
  let postId = req.params.id;
  let post = await postService.getById(postId);
  res
    .status(200)
    .send(post);
});

export const updatePost = asyncHandler(async (req, res) => {
  let post = req.body.post;
  let success = await postService.update(post);
  if(success) {
    post = await postService.getById(post.id);
  }
  
  res
    .status(200)
    .send(post);
});

export const getByWriterId = asyncHandler(async (req, res) => {
  let writerId = req.params.writerId;
  let page = req.query.page;
  let posts = await postService.getByWriterId(page, writerId);
  res
    .status(200)
    .send(posts);
});



