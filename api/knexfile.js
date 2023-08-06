require('dotenv').config();

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host : process.env.DB_HOST || 'localhost',
      port : process.env.DB_PORT || 3306,
      user : process.env.DB_USER || 'user',
      password : process.env.DB_USER_PASSWORD || 'password',
      database : process.env.DB_NAME || 'db'
    },
    migrations: {
      directory: './src/database/migrations'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
