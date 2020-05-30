const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
const server = http.createServer(app);
const io = socketio(server);

app.get("/", cors(), (req, res) => {
  res.send("Server is up and running");
});

app.use(cors());

const roomList = ["C++", "Python"];

io.on("connection", (socket) => {
  console.log("We have a new connnection!");
  socket.on("join", ({ name, room }) => {
    if (!roomList.includes(room)) {
      roomList.push(room);
    }

    socket.join(room);
    console.log(name);
  });
  socket.on("requestRoomList", () => {
    console.log("Room list requested");
    socket.emit("roomList", { roomList });
  });
  socket.on("message", ({ name, message, room }) => {
    io.sockets.in(room).emit("message", { name, message });
  });
  socket.on("disconnect", () => {
    console.log("User has left");
  });
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
