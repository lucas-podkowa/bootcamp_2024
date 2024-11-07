import pool from "../config/db.js";
import pkg from 'bcryptjs';
const { hashSync } = pkg;

const getAll = async () => {
  try {
    const query = "SELECT * FROM usuario";
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getById = async (id) => {

  try {
    const sentence = "SELECT * FROM usuario WHERE usuario_id = $1";
    const { rows } = await pool.query(sentence, [id]);

    return rows;
  } catch (error) {
    throw new Error(error.message);
  }
};

const create = async (data) => {
  try {
    const { mail, pass } = data;
    const hashpassword = hashSync(pass, 12);
    const sentence = "INSERT INTO usuario (mail, pass) VALUES ($1, $2) RETURNING *";
    const { rows } = await pool.query(sentence, [mail, hashpassword]);

    return {
      message: `usuario ${mail} insertado con exito`,
      detail: rows[0],
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

const update = async (id, data) => {
  try {
    const { mail, pass } = data;
    const sentence =
      "UPDATE usuario SET mail = $1, pass = $2 WHERE id = $3 RETURNING *";
    const { rows } = await pool.query(sentence, [
      mail,
      pass,
      id,
    ]);
    return {
      message: `usuario ${nombre} actualizado con exito`,
      detail: rows[0],
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

// Eliminar un avión por ID
const deleteOne = async (id) => {
  try {
    const sentence = "DELETE FROM usuario WHERE usuario_id = $1 RETURNING *";
    const result = await pool.query(sentence, [id]);

    if (result.rowCount === 0) {
      const error = new Error(`usuario con id ${id} no encontrado`);
      error.status = 404;
      throw error;
    }

    return result;
  } catch (error) {
    throw error;
  }
};

//un metodo que utiliza la funcion del login para saber si existe ese usuario o no

const findByMail = async (mail) => {
  try {
    const consulta = `SELECT mail, pass FROM usuario where mail = $1`;
    const { rows } = await pool.query(consulta, [mail]);

    if (rows.length === 0) {
      const error = new Error(`Usuario no encontrado con el mail : ${mail}`);
      error.status = 404;
      throw error;
    }

    return rows[0]; //si no saltó el error en el if anterior entoces se devuelve el resultado
  } catch (error) {
    throw error;
  }
}

export default {
  getAll,
  getById,
  create,
  update,
  deleteOne,
  findByMail
};
