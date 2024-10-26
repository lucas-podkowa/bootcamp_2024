const express = require('express');
const bodyParser = require('body-parser');
const Validate = require('./06_classValidate');
const app = express();
app.use(bodyParser.json());

//----------------------------------------------------------------

// Ruta para registrar usuario
post.post('/user/register', registrarUsuario);

//----------------------------------------------------------------

// Función para registrar usuario
function registrarUsuario(req, res) {
  const { name, email, birthDate } = req.body;

  if (Validate.isEmpty(name)) {
    return res.status(400).json({ error: 'El nombre no puede estar vacío' });
  }

  if (!Validate.isEmailValid(email)) {
    return res.status(400).json({ error: 'El correo electrónico no es válido' });
  }

  if (!Validate.isEmailComDomain(email)) {
    return res.status(400).json({ error: 'El correo electrónico debe tener un dominio gmail.com' });
  }

  if (!Validate.isDateValid(birthDate)) {
    return res.status(400).json({ error: 'La fecha de nacimiento debe tener el formato YYYY-MM-DD' });
  }

  if (!Validate.isAgeValid(birthDate)) {
    return res.status(400).json({ error: 'La persona no puede tener más de 100 años' });
  }

  // Si todas las validaciones pasan, guardamos el usuario en la base de datos o hacer lo que sea necesario.
  // devolvemos un resultado al front
  res.status(200).json({ message: 'Usuario registrado correctamente' });
}


module.exports = { registerUser };


