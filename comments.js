// Create web server
// Run server
// Send request to server
// Get response from server
// Close server

const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

let comments = [
  {
    id: 1,
    username: "alice",
    comment: "I love your blog!",
  },
  {
    id: 2,
    username: "bob",
    comment: "Good post.",
  },
  {
    id: 3,
    username: "charlie",
    comment: "I am glad I found your blog.",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/comments", (req, res) => {
  res.send(comments);
});

app.post("/comments", (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.send(comment);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Middleware
