function buscarLatita(reposnsable, callback) {
    console.log(`Esperando a que ${reposnsable} revise la heladera ...`);

    setTimeout(() => {
        let habia = true;
        if (habia) {
            // queHacer (fracaso , exito)
            callback(null, "heineken helada");
        } else {
            callback("no habia cerveza fria", null);
        }
    }, 3000);


}



// queHacer (fracaso , exito)
function verQueHacer(fracaso, exito) {
    if (fracaso) {
        console.log(`Hubo un problema: ${fracaso}`);
    } else {
        console.log(`Gracias manolito por la ${exito}`);
    }
}

buscarLatita('manolito', verQueHacer);