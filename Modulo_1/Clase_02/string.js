//En programación, un string es una secuencia de caracteres que se utiliza para representar texto

let nombre = 'Lucas ';
let apellido = 'Gómez';


console.log(nombre.length);
console.log(apellido.length);

//esta es la funcion slice

// console.log(nombre.slice(9, 19));
// console.log(nombre.slice(3));

//el frontend tiene un formulario donde el programador no verifica los datos para enviarte
// entoces debemos hacer cosas como "si debe ser un numero, asegurarnos que sea un numero"

let edad = '450';

if (isNaN(edad)) {
    console.log('Debes ingresar un número');
} else if (edad.length > 2) {
    console.log('La edad no puede tener más de 2 digitos');
}
else {
    edad = parseInt(edad);
    console.log(edad);
}

// con las cadenas de textro tambien tendran que alidarlas, por ejemplo, transformar todo a minusculas, quitar espacion en blancos extras, TAB

let nombreCompleto = nombre + ' ' + apellido;
nombreCompleto = nombreCompleto.trim();
nombreCompleto = nombreCompleto.toLowerCase();

console.log(nombreCompleto);

//este es una ejemplo del metodo replace

let email = 'lucas.gomez@gmail.com';
email = email.replace('@gmail.com', '@arnet.com.ar');
console.log(email);

//el metodo split divide una cadena en un array de cadenas