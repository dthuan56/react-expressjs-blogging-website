import knex from '../db/db.config.js';

const pageSize = 1;

const Blog = {
  get: (page) => {
    let offset = (page - 1) * pageSize;
    return Promise.all([
      knex.count('* as count').from('blog').first(),
      knex
      .select('blog.id', 'title', 'content', 'like', 'written_date', 'name', 'profile_img')
      .from('blog')
      .innerJoin('user', 'writer_id', 'user.id')
      .offset(offset).limit(pageSize)
    ]).then(([total, rows]) => {
      console.log(rows);
      return rows;
    
    })  
  }
}

export default Blog;