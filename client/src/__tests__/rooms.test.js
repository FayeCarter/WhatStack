import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Rooms from "../component/Rooms";

describe("Rooms", () => {
  test("renders the title, text field and buttons", () => {
    const setUsername = jest.fn()
    render(
      <Router>
        <Rooms username="ED" room="javascript" setUsername={setUsername} />
      </Router>
    );

    expect(screen.getByRole("heading", { name: "Whatstack"})).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("What is on your mind?")).toBeInTheDocument();
  });

  test("renders user's name", () => {
    const setUsername = jest.fn()
    render(
      <Router>
        <Rooms username="ED" room="javascript" setUsername={setUsername} />
      </Router>
    );
    
    expect(screen.getByText('Welcome to Whatstack ED')).toBeInTheDocument();
  });  
})