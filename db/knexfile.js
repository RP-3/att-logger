module.exports = {

  dev: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'att_logger'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  prod: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'att_logger',
      user: 'postgres',
      password: 'postgres'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
