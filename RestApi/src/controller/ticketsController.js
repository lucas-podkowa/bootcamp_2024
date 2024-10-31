import model from '../model/tickets.js';

export const getAll = () => {
    model.getAll();

}

export const create = (datosAvion) => {
    model.create(datosAvion);
}

export const update = (datosAvion) => {
    model.update(datosAvion);
}

export const deleteOne = (idAvion) => {
}

export const deleteMany = (avionesToDelete) => {
}
