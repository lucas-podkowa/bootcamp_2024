// el tipo de dato object

// let numero = 10;
// var numero = 10; --> numero = 10;
// const numero = 10;

// undefined = es una palabra reservada que nos dice que algo no esta definido (no existe)
// null = es una palabra reservada, si esta definido pero su valor es null (es un valor que significa vacio o nada)

//esto es una sola persona, es decir, un objeto que entendemos como una persona
let persona = {
    nombre: 'Lucas',
    apellido: 'Perez',
    edad: 15,
    dni: 33333333,
    hobbies: null
}

console.log(`mis hobbies son ${persona.hobbies}`);


if (persona.edad > 18) {
    console.log('la persona es mayor de edad');
} else {
    console.log('la persona es menor de edad');
}

//clave : valor
//un tipo de dato del tipo OBJECTO se define con { } y en su interior los datos seran claves y valores
//separados por un ":"

//imprimiendo el objeto entero, queremos ver todos sus datos

console.log(persona);


//que pasa si quiero tener mas persnas
//let personas = [{}, {}, {}, {}, {}, {}, {}, {}]




// function registrarme(dni, contraseña) {
//     //hacer algo con esos datos
// }

//la funcion ya no lo conoce

