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

describe("Badge variants", () => {
  it("defaults to the neutral variant", () => {
    render(<Badge>v1</Badge>);
    expect(screen.getByText("v1")).toHaveClass("fui-badge--neutral");
  });
});

describe("Badge subtle variant", () => {
  it("applies the subtle variant", () => {
    render(<Badge variant="neutral">ok</Badge>);
    expect(screen.getByText("ok")).toHaveClass("fui-badge--neutral");
  });
});

describe("renders uppercase", () => {
  it("supports uppercase", () => {
    render(<Badge uppercase>u</Badge>);
    expect(screen.getByText("u")).toHaveClass("fui-badge--uppercase");
  });
});
