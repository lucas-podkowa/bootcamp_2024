var http = require("node:http");

//req --> request (peticion)
//res --> response (rspuesta)
const miServidor = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html;  charset=utf-8" });
    res.write("Bienvenido a la página de inicio");
    res.end();
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html;  charset=utf-8" });
    res.write("Esta es la página de 'Acerca de'");
    res.end();
  } else if (req.url === "/contact" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Formulario de contacto enviado",
      })
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("Página no encontrada");
    res.end();
  }
});
miServidor.listen(8081);
