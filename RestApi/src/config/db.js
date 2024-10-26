const pg = require('pg');

const pool = new pg.Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'admin',
  database: 'aeropuerto',
  port: 5432
})

pool.on('error', (err, client) => {
  console.error(err);
  process.exit(-1);
});

module.exports = pool;


