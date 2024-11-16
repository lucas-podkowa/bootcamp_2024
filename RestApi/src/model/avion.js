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

  try {
    const sentence = "SELECT * FROM avion WHERE id = $1";
    const { rows } = await pool.query(sentence, [id]);

    return rows;
  } catch (error) {
    throw new Error(error.message);
  }
};

const create = async (data) => {
  try {

    const { nombre, cantidad_asientos, foto } = data;
    const sentence = "INSERT INTO avion (nombre, cantidad_asientos, foto) VALUES ($1, $2, $3) RETURNING *";
    const { rows } = await pool.query(sentence, [nombre, cantidad_asientos, foto]);

    return {
      message: `Avion ${nombre} insertado con exito`,
      detail: rows[0],
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

const update = async (id, data) => {
  try {
    const { nombre, cantidad_asientos } = data;
    const sentence =
      "UPDATE avion SET nombre = $1, cantidad_asientos = $2 WHERE id = $3 RETURNING *";
    const { rows } = await pool.query(sentence, [
      nombre,
      cantidad_asientos,
      id,
    ]);
    return {
      message: `Avion ${nombre} actualizado con exito`,
      detail: rows[0],
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

// Eliminar un avión por ID
const deleteOne = async (id) => {
  try {
    const sentence = "DELETE FROM avion WHERE avion_id = $1 RETURNING *";
    const result = await pool.query(sentence, [id]);

    if (result.rowCount === 0) {
      const error = new Error(`Avion con id ${id} no encontrado`);
      error.status = 404;
      throw error;
    }


    return result;
  } catch (error) {
    throw error;
  }
};

export default {
  getAll,
  getById,
  create,
  update,
  deleteOne,
};
