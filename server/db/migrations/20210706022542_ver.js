
export const up = function(knex) {
  return knex.schema
    .createTable('user', (table) => {
      table.increments('id');
      table.string('name');
      table.string('password');
      table.text('profile_img')
    })
    .createTable('blog', (table) => {
      table.increments('id');
      table.integer('writer_id').unsigned().references('id').inTable('user');
      table.string('title');
      table.text('content');   
      table.integer('like');
      table.datetime('written_date');
    })
    .createTable('comment', (table) => {
      table.increments('id');
      table.integer('user_id').unsigned().references('id').inTable('user');
      table.integer('blog_id').unsigned().references('id').inTable('blog');
      table.integer('parent_id').unsigned().references('id').inTable('comment');
      table.text('content');   
      table.datetime('date');
    })
    .createTable('bookmark', (table) => {
      table.integer('user_id').unsigned().references('id').inTable('user');
      table.integer('blog_id').unsigned().references('id').inTable('blog');
    })
    .createTable('follow', (table) => {
      table.integer('follower_id').unsigned().references('id').inTable('user');
      table.integer('followed_id').unsigned().references('id').inTable('user');
    })
    .createTable('user_like', (table) => {
      table.integer('user_id').unsigned().references('id').inTable('user');
      table.integer('blog_id').unsigned().references('id').inTable('user');
    })
};

export const down = function(knex) {
};
