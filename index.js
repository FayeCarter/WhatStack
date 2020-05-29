const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
const server = http.createServer(app);
const io = socketio(server);
require("dotenv").config()

const client_id=process.env.GITHUB_CLIENT_ID
const client_secret=process.env.GITHUB_CLIENT_SECRET

app.get("/", cors(), (req, res) => {
  res.send("Server is up and running");
});

app.get("/login", cors(), (req, res) => {
  const redirect_uri = "http://localhost:5000/login/callback";
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${redirect_uri}`
  );
});

app.get("/login/callback", cors(), (req, res) => {
  res.send("next");
});

app.use(cors());

io.on("connection", (socket) => {
  console.log("We have a new connnection!");
  socket.on("join", ({ name }) => {
    console.log(name);
  });
  socket.on("disconnect", () => {
    console.log("User has left");
  });
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
