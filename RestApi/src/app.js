import express, { json } from "express";
const app = express();
app.use(express.json());

import avionRoutes from './router/avionRoutes.js';
import vueloRoutes from './router/vueloRoutes.js';
import ticketsRoutes from './router/ticketsRoutes.js';
import usuarioRoutes from './router/usuarioRoutes.js';

app.use("/avion", avionRoutes);
app.use("/vuelo", vueloRoutes);
app.use("/tickets", ticketsRoutes);
app.use("/usuario", usuarioRoutes);


app.get('/hola', (req, res) => {
    res.status(200).json(
        {
            message: "Hola mundo"
        });
});

app.get('/', (req, res) => {
    res.status(200).end();
})

export default app;


