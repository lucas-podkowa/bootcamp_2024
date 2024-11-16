import { body, check, validationResult } from "express-validator"
import jwt from 'jsonwebtoken';


export const userRules = () => [
  body("mail")
    .isEmail()
    .withMessage("Debe ser un email válido")
    .normalizeEmail(),
  body("pass")
    .isLength({ min: 8, max: 16 })
    .withMessage("La contraseña debe tener entre 8 y 16 caracteres de longitud"),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const isAutenticated = (req, res, next) => {
  if (req.headers['authorization']) {
    try {
      const token = req.headers['authorization'];
      const verified = jwt.verify(token, 'ultraMegaSecretPass');
      if (verified) {
        next();
      } else {
        res.status(403).json({ message: "token invalido" });
      }
    } catch (error) {
      res.status(403).json({ message: error.message });
    }
  } else {
    return res.status(403).json({ message: "No tienes token de autenticación, vuelve a loguear" });
  }
}