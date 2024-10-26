const express = require("express");
const app = express();
app.use(express.json());

const avionRoutes = require('./src/router/avionRoutes');
const vueloRoutes = require('./src/router/vueloRoutes');
const ticketsRoutes = require('./src/router/ticketsRoutes');

app.use("/avion", avionRoutes);
app.use("/vuelo", vueloRoutes);
app.use("/tickets", ticketsRoutes);


app.listen(8080, (err) => {
    console.log(`escuchando en http://localhost:8080`);
});
