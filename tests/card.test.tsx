import React from "react";
import { render, screen } from "@testing-library/react";
import { Card, CardBody, CardFooter, CardHeader } from "../src/components/Card";

describe("Card", () => {
  it("renders header, body and footer", () => {
    render(
      <Card>
        <CardHeader>Title</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});

describe("Card polymorphic as", () => {
  it("renders as a custom element", () => {
    render(<Card as="section">Body</Card>);
    expect(screen.getByRole("region").textContent).toBe("Body");
  });
});

describe("renders actions", () => {
  it("renders action buttons", () => {
    render(<Card actions={<button>Go</button>}>C</Card>);
    expect(screen.getByRole("button", { name: "Go" })).toBeInTheDocument();
  });
});
