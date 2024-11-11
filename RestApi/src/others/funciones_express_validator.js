//Verifica que el campo exista en la solicitud (tenga un valor o no).
body("nombre").exists().withMessage("Debe proporcionar un nombre");

//Verifica la longitud del valor. Puedes establecer un mínimo y/o un máximo.
body("nombre")
  .isLength({ min: 3, max: 50 })
  .withMessage("El nombre debe tener entre 3 y 50 caracteres");

//Verifica que el valor no esté vacío. Esto es útil para campos obligatorios.
body("nombre").notEmpty().withMessage("El nombre es obligatorio");

//Verifica que el valor solo contenga letras (a-zA-Z).
body("nombre").isAlpha().withMessage("El nombre solo debe contener letras");

//Verifica que el valor sea un correo electrónico válido.
body("email").isEmail().withMessage("Debe proporcionar un email válido");

//Verifica que el valor sea un número entero. Puedes establecer límites mínimos y máximos.
body("edad")
  .isInt({ min: 1, max: 120 })
  .withMessage("Debe proporcionar una edad válida");

//Verifica que el valor sea numérico (puede ser un número entero o decimal).
body("precio").isNumeric().withMessage("Debe proporcionar un valor numérico");

//Verifica que el valor sea un número decimal válido.
body("precio").isDecimal().withMessage("Debe proporcionar un número decimal");

//Verifica que el valor sea un número de punto flotante (decimal). Puedes establecer límites mínimos y máximos.
body("peso")
  .isFloat({ min: 0.1 })
  .withMessage("Debe proporcionar un peso válido");

//Verifica que el valor sea un booleano (true o false).
body("activo").isBoolean().withMessage("Debe ser un valor booleano");

//Verifica que el valor sea una fecha válida.
body("fecha_nacimiento")
  .isDate()
  .withMessage("Debe proporcionar una fecha válida");

//Verifica que el valor solo contenga letras y números.
body("username")
  .isAlphanumeric()
  .withMessage("El nombre de usuario solo debe contener letras y números");

//Verifica que el valor sea un UUID válido (puedes especificar la versión: 1, 2, 3, 4 o 5).
body("id").isUUID(4).withMessage("Debe proporcionar un UUID válido");

//Verifica que el valor sea una URL válida.
body("website").isURL().withMessage("Debe proporcionar una URL válida");

//Verifica que el valor sea un número de teléfono móvil válido según el país especificado.
body("telefono")
  .isMobilePhone("es-ES")
  .withMessage("Debe proporcionar un número de teléfono válido");

//Verifica que el valor sea un número de tarjeta de crédito válido.
body("tarjeta")
  .isCreditCard()
  .withMessage("Debe proporcionar un número de tarjeta válido");

//Permite que un campo sea opcional, es decir, si no está presente, no se valida.
body("nickname")
  .optional()
  .isLength({ max: 30 })
  .withMessage("El apodo no puede exceder los 30 caracteres");

//Verifica que el valor esté dentro de un conjunto de valores específicos.
body("tipo")
  .isIn(["admin", "user"])
  .withMessage('El tipo debe ser "admin" o "user"');

//Verifica que el valor coincida con una expresión regular.
body("password")
  .matches(/\d/)
  .withMessage("La contraseña debe contener al menos un número");

//Verifica que la contraseña sea fuerte (contiene letras mayúsculas, minúsculas, números y símbolos).
body("password")
  .isStrongPassword()
  .withMessage("La contraseña debe ser fuerte");
