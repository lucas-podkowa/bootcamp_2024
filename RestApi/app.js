import express, { json } from "express";
const app = express();
app.use(express.json());

import avionRoutes from './src/router/avionRoutes.js';
import vueloRoutes from './src/router/vueloRoutes.js';
import ticketsRoutes from './src/router/ticketsRoutes.js';
import usuarioRoutes from './src/router/usuarioRoutes.js';

app.use("/avion", avionRoutes);
app.use("/vuelo", vueloRoutes);
app.use("/tickets", ticketsRoutes);
app.use("/usuario", usuarioRoutes);


app.get('/imprimir', (req, res) => {
    const filePath = './src/nota.txt';
    res.download(filePath, 'pepito.txt', (err) => {
        if (err) {
            console.error('Error al descargar:', err);
        } else {
            console.log('Archivo enviado con éxito');
        }
    });
});


app.listen(8080, (err) => {
    console.log(`escuchando en http://localhost:8080`);
});
