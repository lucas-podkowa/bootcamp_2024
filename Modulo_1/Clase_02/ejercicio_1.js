/*
Escriba un algoritmo que recorra los números del 1 al 20. 
Para cada número, dicho algoritmo debe imprimir por consola si el número es par o impar.
*/

for (let i = 1; i <= 20; i++) {
    if ((i % 2) == 0) {
        console.log("número par")
    }else {
        console.log("número impar")
    }
    console.log('el numero actual es:' + i)
}

//ahora utilizando un while

let j = 1;

while (j <= 20) {

    if ((j % 2) == 0) {
        console.log("número par")
    }
    else {
        console.log("número impar")
    }

    console.log('el numero actual es:' + j)
    j++ //aca aumento el contador para que vaya al numero siguiente
}