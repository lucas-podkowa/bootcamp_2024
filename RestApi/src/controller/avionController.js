import model from '../model/avion.js';

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
    try {
        const result = await model.update(id, data);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(`ha surgido el actualizanod el avion ${error.message}`);
    }

}

export const deleteOne = (idAvion) => {
}

export const deleteMany = (avionesToDelete) => {
}


