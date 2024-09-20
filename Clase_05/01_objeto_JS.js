let objetito =
{
    //a diferencoia de un JSON, las claves no necesitan "" para ser definidas
    nombre: 'lucas',
    apellido: 'perez',
    edad: 15,
    alumnos: [
        {
            nombre: "María",
            apellido: "Gómez",
            edad: 25
        },
        {
            nombre: "Pedro",
            apellido: "López",
            edad: 30,
            saludar: function () {
                console.log(`Hola soy ${this.nombre}`);
            }
            //a diferencia de un JSON, los objetos de JavaScript pueden conener funciones como valores
        }
    ],
    miContenido: () => {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
        this.alumnos[1].saludar(); //llamando a una función de un objeto dentro del objeto
        //console.log(this.alumnos[1].apellido); //esto no funcionara porque apellido es una propiedad del objeto y no del objeto de la función saludar
    }
};


console.log(objetito.alumnos[1].nombre);
console.log(objetito.alumnos[1].saludar()); 
miContenido
