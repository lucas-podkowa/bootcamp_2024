

const multiplicar = numero =>  numero * 2 ;


const asincrono = (numero, callback) => {

    setTimeout(() => {
        let resultado = multiplicar(numero);

        callback(resultado); // Aquí se invoca el callback con el resultado
    }, 2000);
}

// Llamando la función asincrónica con un callback
asincrono(5, (resultado) => {
    console.log(`El resultado es: ${resultado}`);
});


// anidanda: aquella funcion que es invocada dentro de otra funcion
// callbacks: es lo mismo pero es aquella funcion que me han pasado por parametro


// ----------------------------------------------------------------
// definimos una funcion
// function calcularPromedio(lista){
//  for (const element of lista) {
//      caclulamos el promedio
//      return del promedio
//  }
// }


// invocando, llamando, haciendo uso de la función
// const notas = [1,2,3,4,5];
// calcularPromedio(notas);


// ----------------------------------------------------------------
// definimos una funcion
// function darRespuesta(resultado) {
//     if (resultado === 'error') {
//         return mensaje_error;
//     } else {
//         return mensaje_exito;
//     }
// }


// function pediDinero(resultado) {
//     if (resultado === 'error') {
//         return mensaje_error;
//     } else {
//         return mensaje_exito;
//     }
// }

// invocando, llamando, haciendo uso de la función

// restpuesta = resultado de alguna cosa


// function buscarRespuesta(pedir, escupir) {
//     restpuesta = resultado de alguna cosa
//     pedir(restpuesta);
//     escupir();

// }

// buscarRespuesta(pediDinero)