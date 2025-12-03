// defining the server
const express = require("express");
const server = express();
const port = 3000;

server.use(express.json());
//Creating a CRUD endpoints
let posts = [
  { id: 1, title: "First Post", content: "This is the first post." },
  { id: 2, title: "Second Post", content: "This is the second post." },
];

server.get("/posts", (req, res) => {
  res.status(200).json({
    success: true,
    data: posts,
  });
});

server.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: "Post not found",
    });
  }
  return res.status(200).json(post);
});

server.post("/posts", (req, res) => {
  const { title, content } = req.body;
  let newId = posts.length + 1;

  if (title === undefined || content === undefined) {
    return res.status(400).json({
      success: false,
      message: "The information is incomplete",
    });
  }

  const newPost = {
    id: newId,
    title,
    content,
  };
  posts.push(newPost);

  return res.status(201).json({
    success: true,
    data: newPost,
  });
});
//listening the server
server.listen(port, () => {
  console.log("Server running on port " + port);
});
