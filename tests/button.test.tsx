import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../src/components/Button";

describe("Button", () => {
  it("renders its children", () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });

  it("applies the active variant class", () => {
    render(<Button variant="secondary">Save</Button>);
    expect(screen.getByRole("button")).toHaveClass("fui-button--secondary");
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Save</Button>);
    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe("renders ghost variant", () => {
  it("applies the ghost class", () => {
    render(<Button variant="ghost">G</Button>);
    expect(screen.getByRole("button")).toHaveClass("fui-button--ghost");
  });
});

describe("sets type submit", () => {
  it("forwards the type attribute", () => {
    render(<Button type="submit">Send</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });
});

describe("renders danger class", () => {
  it("applies danger styling", () => {
    render(<Button variant="danger">D</Button>);
    expect(screen.getByRole("button")).toHaveClass("fui-button--danger");
  });
});
