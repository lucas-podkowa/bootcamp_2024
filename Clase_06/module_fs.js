//hoy en dia se recomienda, si queremos seguir con commonJS a utilizar la palabra node:
var fs = require('node:fs')
var os = require('node:os')


var texto = fs.readFileSync(__dirname + '/archivo.txt', 'utf8');
console.log(texto);
console.log("Lectura Síncrona terminada!")

console.log('----------------------------------------------------------------');


unaFuncion = (err, data) => {

    //aca debo hacer el tratamiento de lo que me hayan pedido con este archivo
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
}

fs.readFile(__dirname + "/archivo.txt", "utf8", unaFuncion); //esto demora por lo menos 1 nanosegundo

//no aca, porque el resultado de la lectura todavia no se ha terminado
console.log("Lectura Asíncrona terminada!");
