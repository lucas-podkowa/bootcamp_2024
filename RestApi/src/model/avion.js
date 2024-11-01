import pool from "../config/db.js";


const getAll = async () => {

    try {
        const query = "SELECT * FROM avion";
        const { rows } = await pool.query(query);
        return rows;
    } catch (error) {
        throw new Error(error.message);
    }

};

const getById = async (id) => {
    // const query = "SELECT * FROM avion WHERE id = $1";
    // const { rows } = await pool(query, [id]);
    // return rows[0];
};

const create = async (data) => {

    try {
        const { nombre, cantidad_asientos } = data;
        const sentence = "INSERT INTO avion (nombre, cantidad_asientos) VALUES ($1, $2)";
        const { rows } = await pool.query(sentence, [nombre, cantidad_asientos]);

        return {
            message: `Avion ${nombre} insertado con exito`,
            detail: rows
        }

    } catch (error) {
        throw new Error(error.message);
    }





    //return rows[0];
};

const update = async (id, data) => {

    try {
        const { nombre, cantidad_asientos } = data;
        const sentence =
            "UPDATE avion SET nombre = $1, cantidad_asientos = $2 WHERE id = $3";
        const { rows } = await pool.query(sentence, [nombre, cantidad_asientos, id]);
        return {
            message: `Avion ${nombre} actualizado con exito`,
            detail: rows[0]
        }
    } catch (error) {
        throw new Error(error.message);
    }




};

// Eliminar un avión por ID
const deleteOne = async (id) => {
    const query = "DELETE FROM aviones WHERE id = $1 RETURNING *";
    const { rows } = await pool(query, [id]);
    return rows[0];
};

export default {
    getAll,
    getById,
    create,
    update,
    deleteOne,
};