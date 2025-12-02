const express = require("express");
const server = express();
const port = 3001;

server.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});
server.listen(port, () => {
  console.log("Servidor escuchando en el puerto " + port);
});
