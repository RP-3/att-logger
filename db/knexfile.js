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
  }

};
