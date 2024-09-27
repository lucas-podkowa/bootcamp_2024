//const fs = require("node:fs");
const fs = require("node:fs");



// //sincrona
// var texto = fs.readFileSync(__dirname + "/archivo.txt", "utf8");
// console.log(texto);


// mostrar = (err, data) => {
//     if (err) {
//         console.error("Error al leer el archivo:", err.message);
//         console.warn(err.message);
//         return;
//     }
//     console.log(data);
// }

// //asincrona
// fs.readFile(__dirname + "/arcivo.txt", "utf8", mostrar);
// console.log("Lectura Asíncrona terminada!");


// async function leerArchivo() {
//     try {
//         const data = await fs.readFile(__dirname + "/archivo.txt", "utf8");
//         console.log("Contenido del archivo:", data);
//     } catch (err) {
//         console.error("Error al leer el archivo:", err.message);
//     }
// }

// leerArchivo(); // Llamamos a la función asíncrona
// console.log("Lectura Asíncrona terminada!");


// //escribir en el archivo.txt
// fs.writeFileSync(__dirname + "/archivo.txt", "ahora tiene esto");

//copiar un archivo con writeFileSync
var texto = fs.readFileSync(__dirname + "/archivo.txt", "utf8");
// fs.writeFileSync(__dirname + "/copiaDelOriginal.txt", texto);




textoReemplazado = texto.replace('archivo', 'documento especial super secreto');
fs.writeFileSync(__dirname + "/nuevoArchivo.txt", textoReemplazado);

//copiar un archivo con copyFile

fs.copyFile(__dirname + "/archivo.txt", __dirname + "/copiaDelArchivo.txt", (err) => {
    if (err) throw err;
    console.log('Archivo copiado!');
});