import model from '../model/avion.js';

export const getAll = () => {
    model.getAll();
}

export const create = (datosAvion) => {
    model.creat(datosAvion);
}

export const update = (datosAvion) => {
    model.update(datosAvion);
}

export const deleteOne = (idAvion) => {
}

export const deleteMany = (avionesToDelete) => {
}


