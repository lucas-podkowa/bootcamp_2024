function primero() {

    setTimeout(() => {
        console.warn("primero");
    }, 1);
}



function segundo() {
    console.warn("segundo");
}


primero(); //llamamos primero a PRIMERO pero en realidad vemos que primero se ejecura SEGUNDA
segundo();



