import knex from '../db/db.config.js';

const Comment = {
  getById: (id) => {
    return knex
      .select('comment.id', 'content', 'date', 'post_id', 'user_id', 'name', 'profile_img')
      .from('comment')
      .innerJoin('user', 'comment.user_id', 'user.id')
      .where('comment.id', id)
      .first()
      .then(rows => {
        return rows;
      })
  },
  getLast: () => {
    return knex
    .select('comment.id', 'content', 'date', 'post_id', 'user_id', 'name', 'profile_img')
    .from('comment')
    .innerJoin('user', 'comment.user_id', 'user.id')
    .orderBy([{ column: 'comment.id', order: 'desc'}])
    .limit(1)
    .first()
    .then(lastComment => {
      return lastComment;
    })
  },
  getByPostId: (postId) => {
    return knex
      .select('comment.id', 'content', 'date', 'post_id', 'user_id', 'name', 'profile_img')
      .from('comment')
      .innerJoin('user', 'comment.user_id', 'user.id')
      .where({
        'post_id': postId,
        'parent_id': null
      })
      .then(rows => {
        return rows;
      })
  },
  add: (comment) => {
    return knex('comment')
      .insert({
        user_Id: comment.userId,
        post_Id: comment.postId,
        parent_Id: comment.parentId,
        content: comment.content,
        date: new Date()
      })
  },
  getReplies: (parentId) => {
    return knex
      .select('comment.id', 'content', 'date', 'post_id', 'user_id', 'name', 'profile_img')
      .from('comment')
      .innerJoin('user', 'comment.user_id', 'user.id')
      .where('parent_id', parentId)
      .then(rows => {
        return rows;
      })
  }
}


export default Comment;