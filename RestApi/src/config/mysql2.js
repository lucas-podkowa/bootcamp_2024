import { createPool } from 'mysql2/promise';

const configuracion = {
    host: 'localhost',
    user: 'root',
    database: 'finanzas',
    password: 'admin',
    waitForConnections: true
}

const db = createPool(configuracion);

export default db;
