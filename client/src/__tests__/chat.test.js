import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Chat from "../component/Chat";

describe.skip("Chat.", () => {
  test("renders text field and buttons", () => {
    render(
      <Router>
        <Chat username='ED' room='javascript'/>
      </Router>
    );
    
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter message here")).toBeInTheDocument();
  });

  test("renders user's name and room name", () => {
    render(
      <Router>
        <Chat username='ED' room='javascript'/>
      </Router>
    );

    expect(screen.getByRole("heading", { name: "javascript Chat" })).toBeInTheDocument();
    expect(screen.getByText('Welcome ED to the room')).toBeInTheDocument();
  })
});
