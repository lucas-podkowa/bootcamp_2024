// vueloValidator.js

import { body, validationResult } from 'express-validator';

export const validateCreateVuelo = [
    body('numero')
        .isInt()
        .withMessage('El número de vuelo debe ser una cadena de texto.')
        .isLength({ max: 10 })
        .withMessage('El número de vuelo no debe exceder los 10 caracteres.'),

    body('origen')
        .isString()
        .withMessage('El origen debe ser una cadena de texto.')
        .isLength({ max: 100 })
        .withMessage('El origen no debe exceder los 100 caracteres.'),

    body('destino')
        .isString()
        .withMessage('El destino debe ser una cadena de texto.')
        .isLength({ max: 100 })
        .withMessage('El destino no debe exceder los 100 caracteres.'),

    body('avion_id')
        .isInt()
        .withMessage('El ID de avión debe ser un número entero.')
];

export const validateUpdateVuelo = [
    body('numero')
        .optional()
        .isString()
        .withMessage('El número de vuelo debe ser una cadena de texto.')
        .isLength({ max: 10 })
        .withMessage('El número de vuelo no debe exceder los 10 caracteres.'),

    body('origen')
        .optional()
        .isString()
        .withMessage('El origen debe ser una cadena de texto.')
        .isLength({ max: 100 })
        .withMessage('El origen no debe exceder los 100 caracteres.'),

    body('destino')
        .optional()
        .isString()
        .withMessage('El destino debe ser una cadena de texto.')
        .isLength({ max: 100 })
        .withMessage('El destino no debe exceder los 100 caracteres.'),

    body('avion_id')
        .optional()
        .isInt()
        .withMessage('El ID de avión debe ser un número entero.')
];

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
