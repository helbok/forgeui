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
