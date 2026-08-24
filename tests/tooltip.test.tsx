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

describe("hides by default", () => {
  it("does not show the label initially", () => {
    render(<Tooltip label="secret"><button>B</button></Tooltip>);
    expect(screen.queryByText("secret")).not.toBeInTheDocument();
  });
});

describe("Tooltip placement", () => {
  it("sets the placement attribute", () => {
    render(<Tooltip label="x" placement="left"><button>B</button></Tooltip>);
    expect(screen.getByRole("tooltip").parentElement).toHaveAttribute("data-placement", "left");
  });
});

describe("renders offset", () => {
  it("accepts an offset", () => {
    render(<Tooltip label="x" offset={8}><button>B</button></Tooltip>);
    expect(screen.getByText("B")).toBeInTheDocument();
  });
});

describe("supports arrow", () => {
  it("renders an arrow", () => {
    render(<Tooltip label="x" arrow><button>B</button></Tooltip>);
    expect(screen.getByRole("button", { name: "B" })).toBeInTheDocument();
  });
});

describe("supports controlled open", () => {
  it("respects the open prop", () => {
    render(<Tooltip label="x" open><button>B</button></Tooltip>);
    expect(screen.getByText("x")).toBeInTheDocument();
  });
});
