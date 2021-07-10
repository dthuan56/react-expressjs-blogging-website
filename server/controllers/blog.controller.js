import blogService from '../services/blog.service.js';
import { asyncHandler } from '../middlewares/middlewares.js';

export const get = asyncHandler(async (req, res, next) => {
  let page = req.query.page;
  let blogs = await blogService.get(page);
  res
    .status(200)
    .send(blogs);
});

export const getTrendingBlogs = asyncHandler(async (req, res) => {
  let trendingBlogs = await blogService.getTrendingBlogs();
  res
    .status(200)
    .send(trendingBlogs);
})

export const getById = asyncHandler(async (req, res) => {
  let blogId = req.params.id;

  let blog = await blogService.getById(blogId);
  res
    .status(200)
    .send(blog);
})

export const updateBlog = asyncHandler(async (req, res) => {
  let blog = req.body.blog;

  let success = await blogService.update(blog);
  if(success) {
    blog = await blogService.getById(blog.id);
  }
  
  res
    .status(200)
    .send(blog);
})



