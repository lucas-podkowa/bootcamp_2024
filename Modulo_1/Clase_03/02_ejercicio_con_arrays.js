/*
Tienes una lista de estudiantes con sus nombres y calificacione
  - Mostrar todos los nombres.
  - Sumar todas las calificaciones.
  - Calcular el promedio de las calificaciones.
*/



let sumar = 0
let promedio = 0
const estudiantes = [
    { nombre: 'Juan', calificacion: 10 }, //0
    { nombre: 'Pedro', calificacion: 8 }, //1
    { nombre: 'Maria', calificacion: 10 }, //2
    { nombre: 'Luis', calificacion: 2 }, //3
    { nombre: 'Sofia', calificacion: 1 }, //4
]


//----------------------------------------------------------------

//solucion con while

let suma = 0;
let i = 0;

while (i < estudiantes.length) {
    console.log(`Nombre: ${estudiantes[i].nombre}`);
    suma += estudiantes[i].calificacion;
    i++;
}

promedio = suma / estudiantes.length;
// console.log(`Suma de calificaciones: ${suma}`);
// console.log(`Promedio: ${promedio}`);


//----------------------------------------------------------------
//solucion con for nomal
suma = 0;

for (let i = 0; i < estudiantes.length; i++) {
    console.log(`Nombre: ${estudiantes[i].nombre}`);
    suma += estudiantes[i].calificacion;
}

promedio = suma / estudiantes.length;
// console.log(`Suma de calificaciones: ${suma}`);
// console.log(`Promedio: ${promedio}`);


//----------------------------------------------------------------
//solucion con forOf

// "for of" toma el array, lo descompone en cada uno de sus elementos, y por cada vuelta (iteracion /recorrido), almacena ese elemento
// en una variable, entonces podemos utilizar esa variable como un valor independiente del resto de elementos

// ej: si tengo numeros =[1, 2, 5, 6, 7, 8]; al decir for (numero OF numeros) sera como decir numero = 1, numero = 2, numero =5, numero = 6
suma = 0;

for (const estudiante of estudiantes) {
    console.log(`Nombre: ${estudiante.nombre}`);
    suma += estudiante.calificacion;
}
promedio = suma / estudiantes.length;
// console.log(`Suma de calificaciones: ${suma}`);
// console.log(`Promedio: ${promedio}`);


//----------------------------------------------------------------
//solucion con forIn

//forOF toma al elemneto de esa posicion
//forIn toma el indice de esa posicion
//for (let i = 0; i < estudiantes.length; i++) == for (let i in estudiantes) 

suma = 0;

for (const indice in estudiantes) {
    console.log(`Nombre: ${estudiantes[indice].nombre}`);
    suma += estudiantes[indice].calificacion;
}

promedio = suma / estudiantes.length;
// console.log(`Suma de calificaciones: ${suma}`);
// console.log(`Promedio: ${promedio}`);


/*
const pi = 3.1415928....
const funcionalidad = funcionalidad que esta declarada en otro lado.
*/


const fruits = ["Banana", "Orange", "Apple", "Mango"];

//imprimiendo el contenido
for (fruta of fruits) {
    console.log(fruta);
}

//imprimiendo los indices
for (fruta in fruits) {
    console.log(fruta);
}

//imprimiendo el contenido
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits.at(i));
}

//imprimiendo los indices
for (let i = 0; i < fruits.length; i++) {
    console.log(i);
}

//agregando un elemento al final
fruits.push('boneno', 'funceno');


//imprimiendo el contenido
for (fruta of fruits) {
    console.log(fruta);
}

//imprimiendo los indices
for (fruta in fruits) {
    console.log(fruta);
}

//imprimiendo el contenido
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits.at(i));
}

//imprimiendo los indices
for (let i = 0; i < fruits.length; i++) {
    console.log(i);
}


//quitando el ultimo elemento del array

fruits.pop(fruits[0]);

//imprimiendo el contenido
for (fruta of fruits) {
    console.log(fruta);
}

//imprimiendo los indices
for (fruta in fruits) {
    console.log(fruta);
}

//imprimiendo el contenido
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits.at(i));
}

//imprimiendo los indices
for (let i = 0; i < fruits.length; i++) {
    console.log(i);
}

//quitando un elemento en una posicion especifica
fruits.splice(2, 1);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits.at(i));
}

