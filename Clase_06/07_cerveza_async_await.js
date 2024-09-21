function buscarLatita(responsable) {
    console.log(responsable + " está revisando la heladera...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let habia = false;
            if (habia) {
                resolve("una gaseosa helada");  // Resolvemos la promesa con éxito
            } else {
                reject("no habia gaseosa fría");  // Rechazamos la promesa por fracaso
            }
        }, 2000);
    });
}

async function verQueHacer() {
    try {
        const exito = await buscarLatita('pedrito');
        console.info("Genial, gracias hijo por traer", exito);
    } catch (err) {
        console.warn("Tendré que esperar porque", err);
    }
}

verQueHacer();
