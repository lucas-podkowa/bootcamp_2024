import app from './src/app.js'
import { swaggerDOC } from './src/docs/swagger.js'

const port = 8080;

swaggerDOC(app, port);

app.listen(port, (err) => {
    console.log(`escuchando en http://localhost:${port}`);
});
