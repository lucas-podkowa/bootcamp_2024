//esto vendria de una base de datos (que aun no lo vimos)
base = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Maria', edad: 30 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'Ana', edad: 35 }
];


function getDatos(funcioncita) { //getDatos probablemente pueda demrar en el tiempo, no es instantanea   
    setTimeout(() => {
        funcioncita(base);
    }, 1000);

}

//te voy a meter un delay de 1 segundo
//getEdades(getDatos());

getDatos(getEdades);
getDatos(getNombres);


function getEdades(listaAlumnos) {

}

function getNombres(listaAlumnos) {
    for (const alumno of listaAlumnos) {
        console.log(alumno.nombre);
    }
}

function imprimirDatos(datos) {
    console.log(datos);
}

//----------------------------------------------------------------

/*
async function imprimirDatos(){
    
    return await (Promise) getDatos(); // esto signidica que imprimir solo va a retornar despues de "esperar" los datos
}

*/