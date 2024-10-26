const path = require('node:path');

// linux(/)
// windows (\)

console.log(path.sep)

//unir rutas path.join
console.log(path.join('home', 'lucas', 'ditextoriox', 'xyz.css'));

//obtener el archivo base con path.basename
const archivo = path.join('home', 'pepito', '/carpeta', 'archivo.css');
console.log(path.basename(archivo));

//archivo base sin la extension
const fileName = path.join('algunaCarpeta', 'secretNASA', '/topSecret', 'noVer.txt');
console.log(path.basename(fileName, '.txt'));

//extension de un archivo con path.extname
const extension = path.extname('image.asd.docx');
console.log(extension);