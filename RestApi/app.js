import express, { json } from "express";
const app = express();
app.use(json());
import fetch from 'node-fetch';

import axios from 'axios'; // Para consumir API externa

import avionRoutes from './src/router/avionRoutes.js';
import vueloRoutes from './src/router/vueloRoutes.js';
import ticketsRoutes from './src/router/ticketsRoutes.js';

// app.use("/avion", avionRoutes);
// app.use("/vuelo", vueloRoutes);
// app.use("/tickets", ticketsRoutes);


// app.get('/api/user', async (req, res) => {

//     try {
//         let users = await get('https://jsonplaceholder.typicode.com/users');
//         res.json(users.data);
//     } catch (error) {
//         console.log(error.code)
//     }
// });


// app.get("/api/users", async (req, res) => {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await response.json();
//       res.json(data);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Error en la petición" });
//     }
//    });

// app.get("/api/users", (req, res) => {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//         .then((response) => {
//             res.json(response.data);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// });


//GET
// app.get("/api/users", async (req, res) => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error en la petición" });
//     }
// });



app.listen(8080, (err) => {
    console.log(`escuchando en http://localhost:8080`);
});
