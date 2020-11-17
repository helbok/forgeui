import React from "react";
import { render, screen } from "@testing-library/react";
import { Spinner } from "../src/components/Spinner";

describe("Spinner", () => {
  it("renders a status element", () => {
    render(<Spinner label="Loading data" />);
    expect(screen.getByRole("status")).toHaveAttribute("aria-label", "Loading data");
  });
});
