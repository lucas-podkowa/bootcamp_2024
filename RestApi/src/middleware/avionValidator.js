import { body, check, validationResult } from "express-validator"



export const rulesCreate = () => [
body("nombre")
    .notEmpty()
    .withMessage("El nombre del avión es obligatorio")
    .isLength({ max: 50 })
    .withMessage("El nombre no puede exceder los 50 caracteres"),
  body("cantidad_asientos")
    .isInt({ min: 1 })
    .withMessage(
      "La cantidad de asientos debe ser un número entero mayor que 0"
    )
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


