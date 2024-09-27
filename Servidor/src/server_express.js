var express = require('express');
var app = express();

// app.METHOD('path', HANDLER)

handler = () => { 
    //aca programamos toooooda la logica para dar respuesta a esa peticio

    //base_de_datpos--> actualizar perecio del vehiculo + 10%
}

app.put('/vehiculos/vehiculo_1', handler)


app.get('/', function(peticion, respuesta) {
   respuesta.send("Mi primer pagina con express");
});

app.listen(3000);