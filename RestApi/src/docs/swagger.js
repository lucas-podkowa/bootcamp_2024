import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";


const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "API de Aviones y Vuelos",
            version: "1.2.15",
            description: "API para administrar aviones y vuelos en un aeropuerto",
        },
        servers: [
            {
                url: "http://localhost:8080",
                description: "API en local",
            },
        ],
    },
    //apis: ["./src/router/*.js"],
    apis: ["./src/docs/*.yml"],
}

const especificaciones = swaggerJSDoc(options);

// http://localhost:8080/documentacion

export const swaggerDOC = (app, port) => {
    app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(especificaciones));
    console.log(`Documentacion disponible en http://localhost:${port}/api-doc`)
}
