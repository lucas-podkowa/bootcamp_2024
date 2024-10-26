let hoy = new Date();

console.log(hoy);

let algunaFecha = new Date(2023, 5, 15); // Año, mes (0-indexado), día
console.log(algunaFecha);



let fecha = new Date();

//formatear fechas
console.log(fecha.toDateString());
console.log(fecha.toISOString());
console.log(fecha.toLocaleDateString("es-ES"));

console.log('--------------------------------');

//declarar fechas a partir de un String
// ISO 8601 (Año-Mes-Día)
let fechaDesdeCadena = new Date("2024-08-31");
console.log(fechaDesdeCadena.toLocaleDateString("es-ES")); // "2024-08-30T00:00:00.000Z"

// Inglés Americano: Mes Día, Año
let fechaIngles = new Date("August 30, 2024");
console.log(fechaIngles.toLocaleDateString("es-ES"));

let fechaMDY = new Date("08/30/2024");
console.log(fechaMDY.toLocaleDateString("es-ES"));

console.log('--------------------------------');
fecha = new Date();


// metodos del objeto fecha para trabajar con ellos
console.log(fecha.getFullYear());
console.log(fecha.getMonth());
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());


// setear o cambiar los datos de una fecha que ya esta creada
fecha = new Date();
fecha.setFullYear(2059);
fecha.setMonth(10); // Diciembre
fecha.setDate(15);
console.log(fecha.toLocaleDateString("es-ES")); // "2025-12-25T00:00:00.000Z"
