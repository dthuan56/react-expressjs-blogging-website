import md5 from 'md5';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import createError from 'http-errors';

const authService = {
  login: async function(name, password) {
    let rows = await User.findByNameAndPassword(name, md5(password));
    if(!rows || rows.length === 0) {
      throw createError(400, 'Username or password is incorrect.');
    } else {
      let user = rows[0];
      let token = this.generateToken(user.name, process.env.SECRET_KEY);
      let userInfo = {
        id: user.id,
        name: user.name,
        profile_img: user.profile_img,
        token: token
      }
      return userInfo;
    }
  },
  generateToken: function(name) {
    return jwt.sign(name, process.env.SECRET_KEY);
  }
  
};

export default authService;