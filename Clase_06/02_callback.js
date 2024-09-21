//la primer forma de forzar una asinzronia es que la primer funcion invoque o ejecute a la segunda
function primero(callback1, callback2) {
    console.log("esperando 3 segundos ...");
    setTimeout(() => {
        console.log("primero");

        callback1(); //a esta funcion se la llama CallBack
        callback2(); //a esta funcion se la llama CallBack

    }, 3000);
}

function segundo() {
    console.log("soy el segundo")
}
function tercera() {
    console.log("soy el 3ro")
}
function cuarta() {
    console.log("soy el 4to")
}

// al pasar una funcion como parametro de otra funccion, la funcion enviada puede ser ejecutada con posterioridad
// en nuestro ejemplo enviamos a "cuarta" y "tercera" como parametros de la funcion "primero", por lo tanto, en la definicion
// de la funcion primera estamos recibiendo esas funciones como argumentos (callback1, callback2)
// y podemos ejecutarlas en el momento que querramos

primero(cuarta, tercera);

/*
llamamos "parámetros" a los nombres que aparecen en la definición de una función. 
Por su parte, los "argumentos" son los valores que le pasamos (y que, por tanto, recibe) una función
*/

