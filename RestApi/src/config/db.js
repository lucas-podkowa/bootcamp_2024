import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
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

export default pool;


