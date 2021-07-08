import knex from '../db/db.config.js';

const User = {
  findByNameAndPassword: (username, password) => {
    console.log(username, password);
    return knex('user')
      .where({ name: username })
      .where({ password: password })
  }

};

export default User;