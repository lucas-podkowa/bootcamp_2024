let nota = 3;


if (nota >= 0 && nota <= 4) {
    console.log("mal");
} else if (nota >= 5 && nota <= 6) {
    console.log("regular");
} else if (nota >= 7 && nota <= 8) {
    console.log("bueno");
} else if (nota >= 9 && nota <= 10) {
    console.log("excelente");
} else {
    console.log("Nota invalida");
}

//Switch

// Evaluación de un día de la semana
let dia = 'pepito';

switch (dia) {
    case 'lunes':
        console.log('Es Lunes');
        break;
    case 'martes':
        console.log('Es Martes');
        break;
    case 'miércoles':
        console.log('Es Miércoles');
        break;
    case 'jueves':
        console.log('Es Jueves');
        break;
    case 'viernes':
        console.log('Es Viernes');
        break;
    case 'sábado':
        console.log('Es Sábado');
        break;
    case 'domingo':
        console.log('Es Domingo');
        break;
    default:
        console.log('Día inválido');
        break;
}

//otro ejemplo de switch
//hagamoslo primero con if para ver la diferencia
fruta = 'Banana';
if (fruta === 'Manzana') {
    console.log('El color de la Manzana es rojo.');
} else if (fruta === 'Banana') {
    console.log('El color de la Banana es amarillo.');
} else if (fruta === 'Naranja') {
    console.log('El color de la Naranja es naranja.');
} else if (fruta === 'Uva') {
    console.log('El color de la Uva es morado.');
} else {
    console.log(`No conocemos el color de la fruta ${fruta}.`);
}

switch (fruta) {
    case 'Manzana':
        console.log('El color de la Manzana es rojo.');
        break;
    case 'Banana':
        console.log('El color de la Banana es amarillo.');
        break;
    case 'Naranja':
        console.log('El color de la Naranja es naranja.');
        break;
    case 'Uva':
        console.log('El color de la Uva es morado.');
        break;
    default:
        console.log(`No conocemos el color de la fruta ${fruta}.`);
        break;
}


//otro ejemplo de IF por las dudas:

const numero = 5;

if (numero > 0) {
    console.log(`${numero} es un número positivo.`);
} else if (numero < 0) {
    console.log(`${numero} es un número negativo.`);
} else {
    console.log(`${numero} es cero.`);
}
