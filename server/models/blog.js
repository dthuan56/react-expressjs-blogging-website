import knex from '../db/db.config.js';

const pageSize = 5;

const Blog = {
  get: (page) => {
    let offset = (page - 1) * pageSize;
    return Promise.all([
      knex.count('* as count').from('blog').first(),
      knex
      .select('blog.id', 'title', 'content', 'like', 'written_date', 'name', 'profile_img')
      .from('blog')
      .innerJoin('user', 'writer_id', 'user.id')
      .innerJoin('bookmark', 'writer_id', 'user.id')
      .offset(offset).limit(pageSize)
    ]).then(([total, rows]) => {
      console.log(rows);
      return rows;
    
    })  
  },
  getTrendingBlogs: () => {
    return knex
      .select('blog.id', 'title', 'name')
      .from('blog')
      .innerJoin('user', 'writer_id', 'user.id')
      .orderBy([{ column: 'like', order: 'desc'}, { column: 'written_date', order: 'desc'}])
      .limit(5)
      .then(rows => {
        return rows;
      })
  },
  getById: (blogId) => {
    return knex
      .select('blog.id', 'title', 'content', 'like', 'written_date', 'writer_id', 'name', 'profile_img')
      .from('blog')
      .innerJoin('user', 'writer_id', 'user.id')
      .where('blog.id', blogId)
      .then(rows => {
        return rows[0];
      })
  },
  update: (blog) => {
    return knex('blog')
      .where({id: blog.id})
      .update({ 
        like: blog.like,
        title: blog.title,
        content: blog.content
      })
      .then(isUpdated => {
        if(isUpdated === 1) {
          return true;
        } 
        return false;
      });
  }
}
export default Blog;