const pool = require("../config/db");

const getAll = async () => {

    const query = "SELECT * FROM aviones";
    const { rows } = await pool.query(query);
    return rows;
};

const getById = async (id) => {
    const query = "SELECT * FROM aviones WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0];
};

const create = async (avionData) => {
    const { modelo, fabricante, capacidad } = avionData;
    const query =
        "INSERT INTO aviones (modelo, fabricante, capacidad) VALUES ($1, $2, $3) RETURNING *";
    const { rows } = await pool.query(query, [modelo, fabricante, capacidad]);
    return rows[0];
};

const update = async (id, avionData) => {
    const { modelo, fabricante, capacidad } = avionData;
    const query =
        "UPDATE aviones SET modelo = $1, fabricante = $2, capacidad = $3 WHERE id = $4 RETURNING *";
    const { rows } = await pool.query(query, [modelo, fabricante, capacidad, id]);
    return rows[0];
};

// Eliminar un avión por ID
const deleteOne = async (id) => {
    const query = "DELETE FROM aviones WHERE id = $1 RETURNING *";
    const { rows } = await pool.query(query, [id]);
    return rows[0];
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteOne,
};