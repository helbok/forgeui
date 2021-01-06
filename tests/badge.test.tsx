import React from "react";
import { render, screen } from "@testing-library/react";
import { Badge } from "../src/components/Badge";

describe("Badge", () => {
  it("renders its children", () => {
    render(<Badge variant="success">Active</Badge>);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("applies the variant class", () => {
    render(<Badge variant="danger">Failed</Badge>);
    expect(screen.getByText("Failed")).toHaveClass("fui-badge--danger");
  });
});

describe("renders info variant", () => {
  it("applies the info class", () => {
    render(<Badge variant="info">i</Badge>);
    expect(screen.getByText("i")).toHaveClass("fui-badge--info");
  });
});
