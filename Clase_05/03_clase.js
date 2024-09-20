//01 - instanciar una clase significa crear un objeto de dicha clase
//02 - las clases siempre se declaran con mayusculas,nos sirve para diferenciar de otra variable o funcion ordinaria
//03 - todos los clases tiene un constructor

class Persona {

    constructor(name, lastName, age, birthDate) {
        //atributos de la clase
        this.nombre = name;
        this.apellido = lastName;
        this.edad = age;
        this.fecha_nacimiento = birthDate != null ? new Date(birthDate) : null;  //formato: YYYY-MM-DD
    }

    // ECMA 2015 --> ES6

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
    }
}

let pepito = new Persona();

let p1 = new Persona('juanchi', 'perez', 35, '1988-08-09');
let p2 = new Persona('juana', 'apellido 2', 30, '2001-09-01');
let p3 = new Persona('elisa', 'apelido3', 25, null);


console.log(pepito);
console.log(p3.saludar());






//----------------------------------------------------------------
// (req, res) -------------------------------- body  -> req.body  -->  {"usser":"pepito", "password": "1234"}

/*
let persona_de_la_base_de_datos = base_de_datos.buscarUsuario(usser)

ponéle que tengas la clase Usuario

u = new Usuario(persona_de_la_base_de_datos);


u.cambiarPassword(password);
u.validar();
u.actualizarMail();

*/