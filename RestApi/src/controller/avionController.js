import model from '../model/avion.js';
import multer from 'multer';

//app.METHOD('path', handler)
//http://localhost:8080/avion/     (GET)
//app.get('/', function(req, res)=>{});



export const getAll = async (req, res) => {

    try {
        const aviones = await model.getAll();
        res.status(200).json(aviones);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const create = async (req, res) => {

    const data = req.body;
    data.foto = req.file ? `/uploads/${req.file.originalname}` : null;

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
    const avion = await model.getById(id);

    if (!avion.length > 0) {
        return res.status(404).json({ message: `Avion con id ${id} no encontrado` });
    }

    try {
        const result = await model.update(id, data);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(`ha surgido el actualizanod el avion ${error.message}`);
    }
}

export const deleteOne = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await model.deleteOne(id);
        res.status(200).json({
            message: 'Avion Eliminado con exito',
            detail: result.rows
        });
    } catch (error) {
        res.status(error.status || 500).json({ detail: error.message });
    }
}

export const deleteMany = (avionesToDelete) => {
}


