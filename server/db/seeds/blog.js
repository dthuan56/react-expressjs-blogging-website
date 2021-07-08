import faker from 'faker';

export const seed = function(knex) {
  // Deletes ALL existing entries
  return knex('blog').del()
    .then(function () {
      const blogs = [];
      for (let i = 0; i < 100; i++) {
        blogs.push({
          writer_id: faker.datatype.number({ 'min': 1, 'max': 5}),
          title: faker.lorem.sentence(10),
          content: faker.lorem.paragraphs(20),
          like: faker.datatype.number({ 'min': 1, 'max': 5}),
          written_date: faker.date.recent()
        })
      }
      // Inserts seed entries
      return knex('blog').insert(blogs);
    });
};
