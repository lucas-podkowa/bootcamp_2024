let tiempo = 0;


reloj = function () {
    setTimeout(() => {
        console.log(tiempo);
        tiempo += 1;
        reloj();
    }, 1000);
}

reloj();
