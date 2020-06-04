import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Join from "../component/Join";

describe("Join", () => {
  test("renders text field and buttons", () => {
    render(
      <Router>
        <Join />
      </Router>
    );
    expect(screen.getByRole("button", { name: "Join" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Join" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("name")).toBeInTheDocument();
  });
});
