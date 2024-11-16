import model from '../model/vuelo.js';
import fs from 'node:fs'

export const getAll = async (req, res) => {
    try {
        const vuelos = await model.getAll();
        res.status(200).json(vuelos);

    } catch (error) {
        res.status(error.status || 500).json(error.message);

    }
}

export const getByNumero = async (req, res) => {
    const { numero } = req.params;
    try {
        const vuelo = await model.getByNumero(numero);
        res.status(200).json(vuelo);

    } catch (error) {
        res.status(error.status || 500).json(error.message);

    }
}


export const create = async (req, res) => {

    const data = req.body;
    //res.send(data)
    try {
        const result = await model.create(data);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const update = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const vuelo = await model.getById(id);

    if (!vuelo.length === 1) {
        return res.status(404).json({ message: `Vuelo con id ${id} no encontrado` });
    }

    try {
        const result = await model.update(id, data);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(`ha surgido un error actualizando elvuelo: ${error.message}`);
    }
}

export const deleteOne = (idAvion) => {
}

export const deleteMany = (avionesToDelete) => {
}


