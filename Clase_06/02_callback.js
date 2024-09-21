//la primer forma de forzar una asinzronia es que la primer funcion invoque o ejecute a la segunda
function primero(callback1, callback2) {
    console.log("esperando 3 segundos ...");
    setTimeout(() => {
        console.log("primero");////////////////////////////////

        callback1(); //a esta funcion se la llama CallBack
        callback1(); //a esta funcion se la llama CallBack

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

primero(cuarta, tercera);

