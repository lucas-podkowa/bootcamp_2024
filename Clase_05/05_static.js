class Libro {
    //puedo tener un atributo estatico que no necesita ser instanciado, por ejemplo:
    static paginas = 300;

    constructor(titulo, autor, año) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
    }

    static saludar(nombre) {
        console.log(`Hola soy un libro de la empresa Fulana de Tal S.A.`);
    }


    // Método para mostrar los detalles del libro
    mostrarDetalles() {
        return `Título: "${this.titulo}", Autor: ${this.autor}, Año: ${this.año} y tengo ${Libro.paginas} paginas`;
    }
}


let unLibroCualquiera = new Libro('La Psicología del Dinero', 'Eduard Algo', 2019);

console.log(unLibroCualquiera);
console.log(unLibroCualquiera.mostrarDetalles());

console.log(Libro.saludar()); // imprime 300