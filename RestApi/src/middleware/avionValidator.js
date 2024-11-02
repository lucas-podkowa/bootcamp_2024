import { body, check, validationResult } from "express-validator"


export const rulesCreate = () => [
    check("name")
        .notEmpty().withMessage("El nombre es obligatorio")
        .isAlpha().withMessage('El nombre solo acepta letras'),
    check("email")
        .isEmail()
        .withMessage("Debe ser un email válido")
        .normalizeEmail()
];

export const rulesUpdate = () => [
    check("name")
        .notEmpty().withMessage("El nombre es obligatorio")
        .isAlpha().withMessage('El nombre solo acepta letras'),
    check("email")
        .isEmail()
        .withMessage("Debe ser un email válido")
        .normalizeEmail()
];

export const rulesList = () => [
    check("id")
        .notEmpty().withMessage("el ID no puede ser nulo")
        .isInt().withMessage('El id debe ser un valor numerico')
];




export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};


