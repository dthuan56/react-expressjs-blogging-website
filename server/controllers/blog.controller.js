import blogService from '../services/blog.service.js';
import { asyncHandler } from '../middlewares/middlewares.js';

export const get = asyncHandler(async (req, res, next) => {
  let page = req.query.page;
  let blogs = await blogService.get(page);
  res
    .status(200)
    .send(blogs);
});


