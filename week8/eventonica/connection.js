//require packages
const Pool = require("pg").Pool;
const pgKey = require('./keys');
const connection = new Pool({
  user: pgKey.dbUser,
  host: pgKey.dbHost,
  database: pgKey.dbName,
  password: pgKey.dbPassword,
  port: pgKey.dbPort,
})


module.exports = connection;

// https://node-postgres.com/features/connecting

/* === use this to run your postgres database
 pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
 */