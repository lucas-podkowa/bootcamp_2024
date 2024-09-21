function primero() {
    setTimeout(() => {
        console.warn("primero");
    }, 10);
}


function segundo() {
    console.warn("segundo");
}


primero();
segundo();

// el orden de invocacion es primero seguido de segundo, pero en realidad vemos que en la consola
// nos muestra el resultado de "segundo" antes que "primero", esto se debe a que "primero" tiene un retraso de 10 milisegundos
// por lo cual rompe la sincronia provocando un comportamiento asincrono, es decir, no lineal en el tiempo



