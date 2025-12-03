//Creacion del servidor
const express = require("express");
const server = express();
const port = 3000;
server.use(express.json());

//Definicion de endpoints o rutas
let posts = [
  { id: 1, title: "Primer post", content: "Contenido del primer post" },
  { id: 2, title: "Segundo post", content: "Contenido del segundo post" },
];
server.get("/posts", (req, res) => {
  res.json({ posts });
});

server.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      error: "Post no encontrado",
    });
  }

  return res.status(200).json({ post });
});

server.post("/posts", (req, res) => {
  const { title, content } = req.body;

  if (title === undefined || content === undefined) {
    return res.status(400).json({
      error: "Error con los parametros",
    });
  }
  const newPost = {
    id: posts.length + 1,
    title,
    content,
  };

  posts.push(newPost);
  return res.status(201).json({
    message: "Post creado correctamente",
  });
});
server.delete("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex === -1) {
    return res.status(404).json({
      error: "Post no encontrado",
    });
  }
  posts.splice(postIndex, 1);
});
server.listen(port, () => {
  console.log("Servidor escuchando en el puerto " + port);
});
