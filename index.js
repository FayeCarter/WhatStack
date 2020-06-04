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
const path = require("path");
const router = require("./router");
const Message = require("./models/messages.js");
const RoomList = require("./models/roomList.js");

app.use(cors({ credentials: true, origin: process.env.FRONTEND }));
app.use(router);
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

io.on("connection", (socket) => {
  console.log("We have a new connection!");
  socket.on("join", ({ name, room }) => {
    const roomListInstance = new RoomList({
      room,
    });

    const roomQuery = RoomList.find({ room });

    roomQuery.then((res) => {
      const roomArray = res.map((item) => item.room);

      if (!roomArray.includes(room)) {
        roomListInstance.save(function (err) {
          if (err) {
            return console.error(err);
          }
        });
      }
    });

    socket.join(room);

    const query = Message.find({ room });

    query.then((res) => io.sockets.in(room).emit("messages", res));
  });

  socket.on("requestRoomList", () => {
    console.log("Room list requested");

    const getRoomQuery = RoomList.find();

    getRoomQuery.then((res) => {
      if (res) {
        roomList = res.map((item) => item.room);
        console.log("this is the list");
        console.log(roomList);
      }
      socket.emit("roomList", { roomList });
    });
  });
  socket.on("message", ({ name, message, room }) => {
    const messageInstance = new Message({
      name,
      message,
      room,
    });
    messageInstance.save(function (err) {
      if (err) {
        return console.error(err);
      }
    });
    io.sockets.in(room).emit("message", { name, message });
  });
  socket.on("disconnect", () => {
    console.log("User has left");
  });
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
