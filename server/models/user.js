import { hasBookmarked } from '../controllers/user.controller.js';
import knex from '../db/db.config.js';

const User = {
  findByNameAndPassword: (username, password) => {
    return knex('user')
      .where({ name: username })
      .where({ password: password })
      .first()
      .then(user => user);
  },
  bookmark: (userId, blogId) => {
    return knex('bookmark')
      .insert({
        user_Id: userId,
        blog_Id: blogId
      })
  },
  removeBookmark: (userId, blogId) => {
    return knex('bookmark')
      .delete({
        user_Id: userId,
        blog_Id: blogId
      })
  },
  hasBookmarked: (userId, blogId) => {
    return knex('bookmark')
      .where({
        user_id: userId,
        blog_id: blogId
      })
      .first()
      .then(hasBookmarked => {
        if(hasBookmarked) {
          return true;
        } 
        return false;
      });  
  },
  like: (userId, blogId) => {
    return knex('user_like')
      .insert({
        user_Id: userId,
        blog_Id: blogId
      })
  },
  removeLike: (userId, blogId) => {
    return knex('user_like')
      .delete({
        user_Id: userId,
        blog_Id: blogId
      })
  },
  hasLiked: (userId, blogId) => {
    return knex('user_like')
      .where({
        user_id: userId,
        blog_id: blogId
      })
      .first()
      .then(hasLiked => {
        if(hasLiked) {
          return true;
        } 
        return false;
      });  
  }

};

export default User;