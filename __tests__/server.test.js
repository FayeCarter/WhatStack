const io = require("socket.io-client");

const PORT = "http://localhost:5000";
let socket;

describe("Server", () => {
  beforeEach((done) => {
    // Do not hardcode server port and address, square brackets are used for IPv6
    (socket = io.connect(PORT)),
      {
        "reconnection delay": 0,
        "reopen delay": 0,
        "force new connection": true,
        transports: ["websocket"],
      };
    socket.on("connect", () => {
      done();
    });
  });

  afterEach((done) => {
    if (socket.connected) {
      socket.disconnect();
    }
    done();
  });

  test("should send a list of rooms when requested", (done) => {
    socket.emit("requestRoomList");
    socket.on("roomList", (message) => {
      expect(message.roomList).toContain("How do I get a job at WhatStack?");
      done();
    });
  });

  test("should broadcast messages sent by users", (done) => {
    socket.emit("join", {
      room: "How do I use constants in Lua?",
      name: "Phil",
    });
    socket.emit("message", {
      name: "A random github user (test)",
      message: "This is a message",
      room: "How do I use constants in Lua?",
    });
    socket.on("message", (message) => {
      expect(message.message).toBe("This is a message");
      done();
    });
  });
});
