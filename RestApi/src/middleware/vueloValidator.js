import { body, check, validationResult } from "express-validator"
import jwt from 'jsonwebtoken';

export const vueloCreateRules = () => [
    body("numero").exists().withMessage('el número de vuelo no puede ser nulo')
        .notEmpty().withMessage('el número de vuelo no puede ser nulo')
        .isInt({ min: 1 }).withMessage("El numero de vuelo debe ser un valor entero")
        .isLength({ max: 10 }).withMessage("El número del vuelo no puede exceder los 10 caracteres"),
    body("origen").notEmpty().withMessage('El origen no puede estar vacío')
        .isLength({ min: 2, max: 100 }).withMessage("El origen debe tener entre 2 y 100 caracteres")
        .isString().isLength({ min: 2 }).withMessage('El origen debe ser una cadena de texto con al menos 2 caracteres.'),
    body("destino").notEmpty().withMessage('El origen no puede estar vacío')
        .isLength({ min: 2, max: 100 }).withMessage("El origen debe tener entre 2 y 100 caracteres"),
    body("avion_id")
        .exists().withMessage('el avion_id no puede ser nulo')
        .notEmpty().withMessage('el avion_id no puede ser nulo')
        .isInt().withMessage("El avion_id debe ser un valor entero")
];


export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

