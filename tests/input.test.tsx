import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from "../src/components/Input";

describe("Input", () => {
  it("renders a textbox", () => {
    render(<Input placeholder="Name" />);
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
  });

  it("marks invalid inputs", () => {
    render(<Input invalid />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });
});

describe("Input error message", () => {
  it("links the error message via aria", () => {
    render(<Input invalid errorMessage="Too short" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });
});
