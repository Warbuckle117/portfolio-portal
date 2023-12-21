// Update with your config settings.
require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'portal-db',
      user: 'postgres',
      password: 'password',
      database: 'portal-db',
      port: 5432,
    },
    migrations: {
        directory: './db/migrations',
    },
  },
};
