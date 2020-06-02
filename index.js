const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();
require("./database.js");
const server = http.createServer(app);
const io = socketio(server);
const router = require("./router");
const Message = require("./models/messages.js");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(router);

const roomList = ["C++", "Python"];

io.on("connection", (socket) => {
  console.log("We have a new connnection!");
  socket.on("join", ({ name, room }) => {
    if (!roomList.includes(room)) {
      roomList.push(room);
    }
    socket.join(room);
    console.log(name);

    const q = Message.find({ room });

    q.then((res) => io.sockets.in(room).emit("messages", res));
    //console.log(test.messages);
  });
  socket.on("requestRoomList", () => {
    console.log("Room list requested");
    socket.emit("roomList", { roomList });
  });
  socket.on("message", ({ name, message, room }) => {
    const messageInstance = new Message({
      name: name,
      message: message,
      room: room,
    });
    messageInstance.save(function (err) {
      if (err) {
        return console.error(err);
      }
    });
    console.log("test");
    io.sockets.in(room).emit("message", { name, message });
  });
  socket.on("disconnect", () => {
    console.log("User has left");
  });
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
