import md5 from 'md5';
import faker from 'faker';

export const seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      const users = [];
      for(let i = 1; i <= 5; i++) {
        users.push({
          name: faker.internet.userName(),
          password: md5('user' + i),
          profile_img: faker.image.image()
        })
      }
      return knex('user').insert(users);
    });
};
