const Base = [
    { nombre: 'pedro', password: 30 },
    { nombre: 'juan', password: 20 },
];


async function login(name, password) {
    try {
        const user = await buscarUsuario(name, password);
        if (user) {
            return user;
        } else {
            return 'Usuario o contraseña incorrectos';
        }
    } catch (error) {
        console.log(error);
    }
}


// Este seria una logica desde el Back busca en la base de datos
// Simulación de Backend con retardo de 3 segundos
function buscarUsuario(name, password) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simula la búsqueda en la base de datos
            for (const usuario of Base) {
                if (usuario.nombre === name && usuario.password === password) {
                    return resolve(usuario); // Si encuentra el usuario
                }
            }
            resolve(null); // Si no encuentra el usuario
        }, 10000); // Retardo de 10 segundos
    });
}

console.log(login('pedro', 30).then(console.log)); 