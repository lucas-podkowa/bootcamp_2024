import pool from "../config/db.js";

const getAll = async () => {
    try {
        const query = "SELECT * FROM vuelo";
        const { rows } = await pool.query(query);
        return rows;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getByNumero = async (numero) => {
    try {
        const query = "SELECT * FROM vuelo WHERE numero = $1";
        const { rows } = await pool.query(query, [numero]);
        return rows[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

const getById = async (id) => {
    const query = "SELECT * FROM vuelos WHERE id = $1";
    const { rows } = await _query(query, [id]);
    return rows[0];
};

const create = async (data) => {

    try {
        const { numero, origen, destino, avion_id } = data;
        const sentence = "INSERT INTO vuelo (numero, origen, destino, avion_id) VALUES ($1, $2, $3, $4) RETURNING *";
        const { rows } = await pool.query(sentence, [numero, origen, destino, avion_id]);

        return {
            message: `Vuelo ${numero} insertado con exito`,
            detail: rows[0],
        };
    } catch (error) {
        throw new Error(error.message);
    }

};

const update = async (id, avionData) => {
    const { modelo, fabricante, capacidad } = avionData;
    const query =
        "UPDATE aviones SET modelo = $1, fabricante = $2, capacidad = $3 WHERE id = $4 RETURNING *";
    const { rows } = await _query(query, [modelo, fabricante, capacidad, id]);
    return rows[0];
};

// Eliminar un avión por ID
const deleteOne = async (id) => {
    const query = "DELETE FROM aviones WHERE id = $1 RETURNING *";
    const { rows } = await _query(query, [id]);
    return rows[0];
};

export default {
    getAll,
    getById,
    create,
    update,
    deleteOne,
    getByNumero,
};