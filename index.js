const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");
require("dotenv").config()

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const router = require('./router');

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(router);

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
