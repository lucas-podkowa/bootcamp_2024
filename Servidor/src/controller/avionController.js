const model = require('./../model/avion');

const getAll = () => {
    model.getAll();
}

const create = (datosAvion) => {
    model.create(datosAvion);
}


const update = (datosAvion) => {
    model.update(datosAvion);

}

const deleteOne = (idAvion) => {
}

const deleteMany = (avionesToDelete) => {
}

module.exports = { getAll, create, update, deleteOne, deleteMany };
