/*
Problema:
Eres el encargado de procesar las calificaciones de un grupo de estudiantes. 
Debes calcular el promedio de sus calificaciones, 
pero antes debes asegurarte de que todas las calificaciones sean válidas. 
Una calificación válida es un número entre 1 y 10. 
Tu tarea es escribir una función que reciba un array con las calificaciones, 
verifique que todas sean válidas, y luego devuelva el promedio. 
Si alguna calificación no es válida, el programa debe lanzar un error y 
(manejarlo adecuadamente con un try-catch).
*/

/*Codigo mejorado (probar), si el promedio es aprobado, crear un nuevo arreglo donde esten solo los alumnos
que aprobaron, hacer lo mismo con los que desaprobaron, resultado, dos arreglos nuevos.*/

//Arreglo de Objeto, atributos: nombre, edad, calificaciones.
// let estudiantes = [
//     {
//         nombre: "Lucas",
//         calificaciones: [4, 3, 8, 9, 6, 5] //Estudiante[0]
//     },

//     {
//         nombre: "Maria",
//         calificaciones: [8, 6, 3, 9, 8, 7] //Estudiante[1]
//     },

//     {
//         nombre: "Marcos",
//         calificaciones: [9, 3, 2, 7, 8, 9] //Estudiante[2]
//     },

//     {
//         nombre: "Belen",
//         calificaciones: [8, 9, 7, 8, 4, 5] //Estudiante[3]
//     },

//     {
//         nombre: "Adriana",
//         calificaciones: [8, 6, 8, 7, 9, 3] //Estudiante[4]
//     },
// ];



// todasCalific = new Array (estudiantes.length); //nuevo arreglo con dimension de la cantidad de estudiantes

// for (let i = 0; i < estudiantes.length; i++) {
//     todasCalific[i] = estudiantes[i].calificaciones;
// }

// let sumaEstudiantes = []; //nuevo arreglo que contendrá las sumas de cada
// //subarreglo de todasCalific pero para eso necesito recorrer cada uno.

// let promedios = []; //Nuevo arreglo que se almacenara el promedio de cada sumaEstudiantes.
// //recorrer cada subarreglo de todasCalific, y sumar sus elementos de cada uno.

// function CalcSumaProm (calificaciones, nombre) {
//     for (let j = 0; j < todasCalific.length; j++){
//         let sumasSub = 0; //mi acumulador, por cada iteracion, este se resetea a 0

//         for (let l = 0; l < todasCalific[j].length; l++) {
//             sumasSub += todasCalific[j][l];
//         }
//         sumaEstudiantes.push(sumasSub); //los resultados de la suma, se añadiran al arreglo sumaEstudiantes.
//         promedios[j] = sumaEstudiantes[j]/ todasCalific[j].length;

//         console.log(`el promedio de ${estudiantes[j].nombre} es: ${promedios[j]} `);
//     }

// }

// CalcSumaProm(todasCalific, estudiantes.nombre); //invocar funcion.


//----------------------------------------------------------------

//solucion de carlos

// const alumnos = [
//     {nombre: "Ana", notas: [8,6,9]},
//     {nombre: "Carlos", notas: [8,6,9]},
//     {nombre: "Vero", notas: [8,6,9]},
//     {nombre: "Matias", notas: [8,1,1]},
//     {nombre: "Tomas", notas: [8,6,9]}
// ];

// function SumarNotas(notas){
//     return notas.reduce((total, nota) => total + nota, 0);

// }

// function calcularPromedio(notas){
//     const suma = SumarNotas(notas);
//     return suma / notas.length;
// }

// function validarNotas(notas){
//     return notas.every(nota => nota >= 0 && nota <= 10);
// }

// function estadoAlumno(promedio){
//     return promedio >= 6 ? 'Pasó' : 'No pasó';
// }

// alumnos.forEach(alumno => {
//     if (validarNotas(alumno.notas)) {
//         const sumaNotasAlumno = SumarNotas(alumno.notas);
//         const promedio = calcularPromedio(alumno.notas);
//         const estado = estadoAlumno(promedio);


//         console.log(`Alumno: ${alumno.nombre}, Suma: ${sumaNotasAlumno}, Promedio: ${promedio.toFixed(2)}, Estado: ${estado}`);
//     } else {

//         console.log(`Alumno: ${alumno.nombre} nota no validada.`);
//     }
// });


//----------------------------------------------------------------
//otras soluciones


calificaciones = [
  { nombre: "Maria", notas: [9, 4, 6, 8, 2] },
  { nombre: "Jose", notas: [10, 4, 5.5, 9, 1] },
  { nombre: "Carlos", notas: [8, 6, 6, 75, 10] },
];


const resultado = calcularPromedio(calificaciones);

if (!isNaN(resultado)) {
  console.log(`El promedio de calificaciones es: ${resultado}`);
} else {
  console.log(resultado);
}

function calcularPromedio(calificaciones) {

  let totalNotas = 0;
  let cantidadNotas = 0;

  for (let estudiante of calificaciones) {
    for (let nota of estudiante.notas) {
      if (typeof nota !== 'number' || nota < 0 || nota > 10) {
        return (`La calificación ${nota} de ${estudiante.nombre} no es válida.`);

      }
      totalNotas += nota;
      cantidadNotas++;
    }
  }

  const promedio = totalNotas / cantidadNotas;
  return promedio;


}

//----------------------------------------------------------------
// mas una por las dudas utilizando solo un array sencillo


function calcularPromedio(calificaciones) {
  for (let i = 0; i < calificaciones.length; i++) {
    const calificacion = calificaciones[i];
    if (typeof calificacion !== 'number' || calificacion < 0 || calificacion > 10) {
      throw new Error(`Calificación ${calificacion} no válida. Debe ser un número entre 0 y 10.`);
    }
  }

  const suma = calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
  const promedio = suma / calificaciones.length;
  return promedio;
}

// Uso de la función con try-catch

calificaciones = [8, 9, 7, 10, 19];

try {
  const promedio = calcularPromedio(calificaciones);
  console.log(`El promedio es: ${promedio}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}


//----------------------------------------------------------------
//solucion alternativa

function calcularPromedio(calificaciones) {
  //utilizando el metodo every para validar las notas
  const sonValidas = calificaciones.every(function (calificacion) {
    return typeof calificacion === 'number' && calificacion >= 0 && calificacion <= 10;
  });

  if (!sonValidas) {
    throw new Error('Una o más calificaciones no son válidas');
  }

  const total = calificaciones.reduce(function (acumulador, calificacion) {
    return acumulador + calificacion;
  }, 0);

  const promedio = total / calificaciones.length;
  return promedio;
}

const calificaciones = [8, 9, 7, 10, 'once'];

try {
  const promedio = calcularPromedio(calificaciones);
  console.log(`El promedio es: ${promedio}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
