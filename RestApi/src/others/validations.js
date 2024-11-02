import { body, validationResult } from "express-validator";

// forma resumida con la desventaja que no puedo reutilizar codigo
const validateUser = [
  body("name").notEmpty().withMessage("El nombre es obligatorio"),
  body("email")
    .isEmail()
    .withMessage("Debe ser un email válido")
    .normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

//forma ampliada con la ventaja que puedo reutilizar la funcion validate
const userValidationRules = () => [
  body("name").notEmpty().withMessage("El nombre es obligatorio"),
  body("email")
    .isEmail()
    .withMessage("Debe ser un email válido")
    .normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

//----------------------------------------------------------------------------------
// ejemplo con validaciones para avion y vuelo

const avionValidationRules = () => [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre del avión es obligatorio")
    .isLength({ max: 50 })
    .withMessage("El nombre no puede exceder los 50 caracteres"),
  body("cantidad_asientos")
    .isInt({ min: 1 })
    .withMessage(
      "La cantidad de asientos debe ser un número entero mayor que 0"
    ),
];

const vueloValidationRules = () => [
  body("numero")
    .notEmpty()
    .withMessage("El número del vuelo es obligatorio")
    .isLength({ max: 10 })
    .withMessage("El número del vuelo no puede exceder los 10 caracteres"),
  body("origen")
    .notEmpty()
    .withMessage("El origen del vuelo es obligatorio")
    .isLength({ max: 100 })
    .withMessage("El origen no puede exceder los 100 caracteres"),
  body("destino")
    .notEmpty()
    .withMessage("El destino del vuelo es obligatorio")
    .isLength({ max: 100 })
    .withMessage("El destino no puede exceder los 100 caracteres"),
  body("avion_id")
    .optional() // Es opcional porque puede ser null o tener un valor
    .isInt()
    .withMessage("El ID del avión debe ser un número entero válido"),
];

export default {
  userValidationRules,
  // avionValidationRules,
  // vueloValidationRules,
  validate,
};
