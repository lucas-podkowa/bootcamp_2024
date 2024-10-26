

// console.log('Bienvenido ' + nombre);


// console.log('Chau ' + nombre);


function saludar(nombre) {
    console.log('Hola ' + nombre);
}


saludar('lucas');
saludar(5);

// fabricar una calculadora con funciones

function funcionCualquiera(a, b) {

    //aca esta haciendo algo, si esto sale mal, lo de abajo mostrara un error
    //si lo de arriba salio mal;
    return;
    //return corta la ejecucion del codigo en ese moment
    //aca hace algo que depende de lo que hice antes
}


function sumar(a, b) {
    //console.log(1 + 2);
    // corta el codigo pero devuelve algo que yo le diga
    return (a + b);
}
function restar(a, b) {
    return a - b;
}

let resultado = sumar(1, 2);
console.log(resultado);

//ejemplo usando un condifiocnal

notasDeAlumnos = [4, 7, 9, 3, 5.5, 9, 2]
notasDeAlumnos2 = [4, 8, 9, 6, 7, 9, 2]
notasDeAlumnos3 = [6, 7, 9, 3, 4, 1, 2]



function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}



function evaluarAlumnos(algunasNotas) {

    promedio = calcularPromedio(algunasNotas);
    if (promedio >= 6) {
        console.log('alumno aprobado');
    } else {
        console.log('alumno desaprobado, dado que su promedio es' + promedio);
    }
}


evaluarAlumnos(notasDeAlumnos);



//console.log('El promedio es: ' + promedio);