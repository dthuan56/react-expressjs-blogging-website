import faker from 'faker';

export const seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      const comments = [];
      for (let i = 0; i < 50; i++) {
        comments.push({
          user_id: faker.datatype.number({ 'min': 1, 'max': 5}),
          blog_id: faker.datatype.number({ 'min': 1, 'max': 100}),
          content: faker.lorem.paragraphs(3),
          date: faker.date.recent()
        })
      }
      // Inserts seed entries
      return knex('comment').insert(comments);
    });
};
