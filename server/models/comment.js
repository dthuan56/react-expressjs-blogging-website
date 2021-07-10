import knex from '../db/db.config.js';

const Comment = {
  getById: (id) => {
    return knex
      .select('comment.id', 'content', 'date', 'blog_id', 'user_id', 'name', 'profile_img')
      .from('comment')
      .innerJoin('user', 'comment.user_id', 'user.id')
      .where('comment.id', id)
      .first()
      .then(rows => {
        console.log(rows);
        return rows;
      })
  },
  getLast: () => {
    return knex
    .select('comment.id', 'content', 'date', 'blog_id', 'user_id', 'name', 'profile_img')
    .from('comment')
    .innerJoin('user', 'comment.user_id', 'user.id')
    .orderBy([{ column: 'comment.id', order: 'desc'}])
    .limit(1)
    .first()
    .then(lastComment => {
      return lastComment;
    })
  },
  getByBlogId: (blogId) => {
    return knex
      .select('comment.id', 'content', 'date', 'blog_id', 'user_id', 'name', 'profile_img')
      .from('comment')
      .innerJoin('user', 'comment.user_id', 'user.id')
      .where('blog_id', blogId)
      .then(rows => {
        return rows;
      })
  },
  add: (comment) => {
    return knex('comment')
      .insert({
        user_Id: comment.userId,
        blog_Id: 76,
        parent_Id: comment.parentId,
        content: comment.content,
        date: new Date()
      })
  }
}


export default Comment;