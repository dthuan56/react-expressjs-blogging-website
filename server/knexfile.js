export default {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      directory: 'db/migrations'
    },
    seeds: {
      directory: 'db/seeds'
    },
    useNullAsDefault: true
  },
  
};
