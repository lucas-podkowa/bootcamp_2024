i = 14;
while (i <= 30) {
    // console.log(`estamos en el día ${i}, aun te falta bastante pa cobrar pue`);
    i++;
}

//console.log('ya viene el sueldo');


/*
Pida un número entero del 1 al 5.
Muestre un mensaje que diga "El número es X" por cada número desde 1 hasta el número ingresado.
Calcule la suma de los números desde 1 hasta ese número.
*/
let suma = 0;
var i = 1;
numero = 0;

while (i <= numero) {
    console.log(`El número es ${i}`);
    suma += i;
    i++;
}
console.log(`La suma de los números es: ${suma}`);


//ahora lo mismo, pero con un do While
// do {
//     console.log(`El número es ${i}`);
//     suma += i;
//     i++;
// } while (i <= numero);

// console.log(`La suma de los números es: ${suma}`);

//----------------------------------------------------------------

// bucle FOR

// for (donde inicio; condicion (mientas esto sea verdadero); a que velocidad) {
//    ejecuto la tarea que quiero mientras la condicion sea verdadera
//    una vez que la condicion deje de ser verdadera, se corta el bucle
// }



var contador = 1;
numero = 10;
for (contador = 1; contador <= numero; contador++) {
    console.log(`contador esta valiendo ${contador}`);
}

console.log(`El valor final del contador es: ${contador}`);