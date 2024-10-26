//forEach(): recorre cada elemento del array y ejecuta una función para cada uno, pero no devuelve ningún valor.
numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (numero) {
    console.log(numero * 2); // Multiplica cada número por 2
}
);



//----------------------------------------------------------------

//map(): crea un nuevo array aplicando una función a cada elemento del array original.
numeros = [1, 2, 3, 4, 5];

dobles = numeros.map(function (numero) {
    return numero * 2; // Crea un nuevo array con cada número multiplicado por 2
});

console.log(dobles);
console.log(numeros);


//----------------------------------------------------------------

//filter(): crea un nuevo array con los elementos que cumplen una condición.

numeros = [1, 2, 3, 4, 5];

const pares = numeros.filter(function (numero) {
    return numero % 2 === 0; // Crea un nuevo array con los números pares
});


const mayoresQueTres = numeros.filter(function (numero) {
    return numero > 3; // Devuelve un nuevo array con los números mayores que 3
});

console.log(mayoresQueTres);
console.log(pares);
console.log(numeros);


//----------------------------------------------------------------
//some(): devuelve true si al menos un elemento del array cumple con una condición, o false si ninguno lo hace.
numeros = [1, 2, 3, 4, 5];

const algunMayorQueCuatro = numeros.some(function (numero) {
    return numero > 4; // Verifica si al menos un número es mayor que 4
});

console.log(algunMayorQueCuatro);

//----------------------------------------------------------------
//every(): devuelve true si todos los elementos del array cumplen con una condición, o false si al menos uno no lo hace

numeros = [1, 2, 3, 4, 5];

// Verifica si todos los números son pares
const todosPares = numeros.every(function (numero) {
    return numero % 2 === 0;
});

//otro ejemplo: Verifica si todos los números son menores que 6
const todosMenoresQueSeis = numeros.every(function (numero) {
    return numero < 6;
});

console.log(todosPares);
console.log(todosMenoresQueSeis);

