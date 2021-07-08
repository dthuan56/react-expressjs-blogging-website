import authService from '../services/auth.service.js';
import { asyncHandler } from '../middlewares/middlewares.js';

export const login = asyncHandler(async (req, res, next) => {
  let name = req.body.name;
  let password = req.body.password;
  console.log('in login');
  let userInfo = await authService.login(name, password);
  console.log(userInfo);
  res
    .status(200)
    .send(userInfo);
});


