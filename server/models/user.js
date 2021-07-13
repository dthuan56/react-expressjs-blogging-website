import knex from '../db/db.config.js';

const pageSize = 5;

const User = {
  getById: (userId) => {
    return knex
      .select('id', 'name', 'profile_img')
      .from('user')
      .where({id: userId})
      .first()
      .then(user => user);
  },
  findByNameAndPassword: (username, password) => {
    return knex('user')
      .where({ name: username })
      .where({ password: password })
      .first()
      .then(user => user);
  },
  bookmark: (userId, postId) => {
    return knex('bookmark')
      .insert({
        user_Id: userId,
        post_Id: postId
      })
  },
  removeBookmark: (userId, postId) => {
    return knex('bookmark')
      .delete({
        user_Id: userId,
        post_Id: postId
      })
      .where({
        user_Id: userId,
        post_Id: postId
      })
  },
  hasBookmarked: (userId, postId) => {
    return knex('bookmark')
      .where({
        user_id: userId,
        post_id: postId
      })
      .first()
      .then(hasBookmarked => {
        if(hasBookmarked) {
          return true;
        } 
        return false;
      });  
  },
  like: (userId, postId) => {
    return knex('user_like')
      .insert({
        user_Id: userId,
        post_Id: postId
      })
  },
  removeLike: (userId, postId) => {
    return knex('user_like')
      .delete({
        user_Id: userId,
        post_Id: postId
      })
      .where({
        user_Id: userId,
        post_Id: postId
      })
  },
  hasLiked: (userId, postId) => {
    return knex('user_like')
      .where({
        user_id: userId,
        post_id: postId
      })
      .first()
      .then(hasLiked => {
        if(hasLiked) {
          return true;
        } 
        return false;
      });  
  },
  follow: (followerId, followedId) => {
    return knex('follow')
      .insert({
        follower_id: followerId,
        followed_id: followedId
      })
  },
  removeFollow: (followerId, followedId) => {
    return knex('follow')
      .delete({
        follower_id: followerId,
        followed_id: followedId
      })
      .where({
        follower_id: followerId,
        followed_id: followedId
      })
  },
  hasFollowed: (followerId, followedId) => {
    return knex('follow')
      .where({
        follower_id: followerId,
        followed_id: followedId
      })
      .first()
      .then(hasFollowed => {
        if(hasFollowed) {
          return true;
        } 
        return false;
      });  
  },
  getFollowing: (page, userId) => {
    let offset = (page - 1) * pageSize;
    return Promise.all([
      knex.count('* as rowCount').from('follow').where({ follower_id: userId}).first(),
      knex
        .select('id', 'name', 'profile_img')
        .from('follow')
        .innerJoin('user', 'followed_id', 'id')
        .where({
          follower_id: userId
        })
        .offset(offset).limit(10)
        .then(rows => rows)
    ]).then(([total, rows]) => {
      let totalRow = total.rowCount;
      let totalPage = Math.ceil(totalRow / pageSize);
      let userPage = {
        totalPage,
        users: rows
      }

      return userPage;
    })
  }
};

export default User;