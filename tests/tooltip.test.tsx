import React from "react";
import { render, screen } from "@testing-library/react";
import { Tooltip } from "../src/components/Tooltip";

describe("Tooltip", () => {
  it("renders the tooltip content", () => {
    render(
      <Tooltip label="More info">
        <button type="button">Help</button>
      </Tooltip>,
    );
    expect(screen.getByRole("tooltip")).toHaveTextContent("More info");
  });
});

describe("renders default placement", () => {
  it("defaults to top placement", () => {
    render(<Tooltip label="x"><button>B</button></Tooltip>);
    expect(screen.getByText("B").parentElement).toHaveAttribute("data-placement", "top");
  });
});
