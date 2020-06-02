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
//const mongoose = require("mongoose");
const router = require("./router");
const Message = require("./models/messages.js");

// const mongoDB = "mongodb://127.0.0.1/my_database";
// mongoose.connect(mongoDB, { useNewUrlParser: true });
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

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
  });
  socket.on("requestRoomList", () => {
    console.log("Room list requested");
    socket.emit("roomList", { roomList });
  });
  socket.on("message", ({ name, message, room }) => {
    const messageInstance = new Message({
      name: name,
      message: message,
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
