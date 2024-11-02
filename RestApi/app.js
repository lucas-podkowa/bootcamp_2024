import express, { json } from "express";
const app = express();
app.use(express.json());


import avionRoutes from './src/router/avionRoutes.js';
import vueloRoutes from './src/router/vueloRoutes.js';
import ticketsRoutes from './src/router/ticketsRoutes.js';

app.use("/avion", avionRoutes);
app.use("/vuelo", vueloRoutes);
app.use("/tickets", ticketsRoutes);


app.listen(8080, (err) => {
    console.log(`escuchando en http://localhost:8080`);
});
