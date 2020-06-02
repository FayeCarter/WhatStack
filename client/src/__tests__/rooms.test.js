import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Rooms from "../component/Rooms";
const http = require("http");
const ioBack = require("socket.io");

describe("Rooms", () => {
  test("renders the title, text field and buttons", () => {
    const setUsername = jest.fn();
    render(
      <Router>
        <Rooms username="ED" room="javascript" setUsername={setUsername} />
      </Router>
    );

    expect(
      screen.getByRole("heading", { name: "Whatstack" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("What is on your mind?")
    ).toBeInTheDocument();
  });

  test("renders user's name", () => {
    const setUsername = jest.fn();
    render(
      <Router>
        <Rooms username="ED" room="javascript" setUsername={setUsername} />
      </Router>
    );

    expect(screen.getByText("Welcome to Whatstack ED")).toBeInTheDocument();
  });

  describe("socket tests", () => {
    let httpServer;
    let ioServer;

    beforeAll((done) => {
      httpServer = http.createServer().listen(3000);
      ioServer = ioBack(httpServer);
      done();
    });

    afterAll((done) => {
      ioServer.close();
      httpServer.close();
      done();
    });

    test("displays list of rooms received from server", async () => {
      const roomList = ["Java", "MatLab"];
      const setUsername = jest.fn();
      render(
        <Router>
          <Rooms username="ED" room="javascript" setUsername={setUsername} />
        </Router>
      );

      setTimeout(async () => {
        ioServer.on("requestRoomList", () => {
          ioServer.emit("roomList", { roomList });
        });
        await expect(screen.findByText("MatLab")).toBeInTheDocument();
      }, 50);
    });
  });
});
