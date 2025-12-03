const express = require("express"); // Importa express
const server = express(); // Crea una instancia de express
const port = 3000; // Define el puerto

//Endpont /status que tiene como respuesta un JSON con los campos status y time
server.get("/status", (req, res) => {
  res.json({
    status: "ok",
    time: Date.now(),
  });
});

//Endpoint /saludo que recibe un query param nombre y responde con un saludo
server.get("/saludo", (req, res) => {
  const { nombre } = req.query;

  // Valida que el parametro nombre exista
  if (nombre === "" || nombre === undefined) {
    return res.status(400).json({ Error: "Falta el parametro nombre" });
  }
  res.json("Hola " + nombre);
});

// Inicia el servidor en el puerto definido
server.listen(port, () => {
  console.log("Server corriendo en " + port);
});
