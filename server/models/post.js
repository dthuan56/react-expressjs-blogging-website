import knex from '../db/db.config.js';

const pageSize = 5;

const Post = {
  getAll: (page) => {
    let offset = (page - 1) * pageSize;
    return Promise.all([
      knex.count('* as rowCount').from('post').first(),
      knex
      .select('post.id', 'title', 'content', 'like', 'written_date', 'writer_id', 'name', 'profile_img')
      .from('post')
      .innerJoin('user', 'writer_id', 'user.id')
      .offset(offset).limit(pageSize)
    ]).then(([total, rows]) => {
      let totalRow = total.rowCount;
      let totalPage = Math.ceil(totalRow / pageSize);

      let postPage = {
        totalPage: totalPage,
        posts: rows
      };
      
      return postPage;
    })  
  },
  newPost: (post) => {
    return knex('post')
      .insert({
        writer_id: post.writerId,
        title: post.title,
        content: post.content,
        like: post.like,
        written_date: post.writtenDate
      })
  },
  getTrendingPosts: () => {
    return knex
      .select('post.id', 'title', 'name', 'writer_id')
      .from('post')
      .innerJoin('user', 'writer_id', 'user.id')
      .orderBy([{ column: 'like', order: 'desc'}, { column: 'written_date', order: 'desc'}])
      .limit(5)
      .then(rows => {
        return rows;
      })
  },
  getNewestPosts: () => {
    return knex
      .select('post.id', 'title', 'name', 'writer_id')
      .from('post')
      .innerJoin('user', 'writer_id', 'user.id')
      .orderBy([{ column: 'written_date', order: 'desc'}])
      .limit(5)
      .then(rows => {
        return rows;
      })
  },
  getById: (postId) => {
    return knex
      .select('post.id', 'title', 'content', 'like', 'written_date', 'writer_id', 'name', 'profile_img')
      .from('post')
      .innerJoin('user', 'writer_id', 'user.id')
      .where('post.id', postId)
      .first()
      .then(post => post);
  },
  update: (post) => {
    return knex('post')
      .where({id: post.id})
      .update({ 
        like: post.like,
        title: post.title,
        content: post.content
      })
      .then(isUpdated => {
        if(isUpdated === 1) {
          return true;
        } 
        return false;
      });
  },
  getByWriterId: (page, writerId) => {
    let offset = (page - 1) * pageSize;

    return Promise.all([
      knex.count('* as rowCount').from('post').where('writer_id', writerId).first(),
      knex
      .select('post.id', 'title', 'content', 'like', 'written_date', 'writer_id', 'name', 'profile_img')
      .from('post')
      .innerJoin('user', 'writer_id', 'user.id')
      .where('writer_id', writerId)
      .offset(offset).limit(pageSize)
    ]).then(([total, rows]) => {
      let totalRow = total.rowCount;
      let totalPage = Math.ceil(totalRow / pageSize);
      let postPage = {
        totalPage: totalPage,
        posts: rows
      };
      
      return postPage;
    })
  },
  getBookmarkedPosts: (page, userId) => {
    let offset = (page - 1) * pageSize;

    return Promise.all([
      knex
      .count('* as rowCount')
      .from('post')
      .innerJoin('bookmark', 'post.id', 'bookmark.post_id')
      .where('bookmark.user_id', userId).first(),
      knex
      .select('post.id', 'title', 'content', 'like', 'written_date', 'writer_id', 'name', 'profile_img')
      .from('post')
      .innerJoin('user', 'post.writer_id', 'user.id')
      .innerJoin('bookmark', 'post.id', 'bookmark.post_id')
      .where('bookmark.user_id', userId)
      .offset(offset).limit(pageSize)
    ]).then(([total, rows]) => {
      let totalRow = total.rowCount;
      let totalPage = Math.ceil(totalRow / pageSize);

      let postPage = {
        totalPage: totalPage,
        posts: rows
      };
      
      return postPage;
    })
  }
}

export default Post;