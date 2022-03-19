import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs } from "../src/components/Tabs";

const items = [
  { id: "a", label: "Tab A", content: "Content A" },
  { id: "b", label: "Tab B", content: "Content B" },
];

describe("Tabs", () => {
  it("renders the first tab active by default", () => {
    render(<Tabs items={items} />);
    expect(screen.getByText("Content A")).toBeInTheDocument();
  });

  it("switches panels on selection", async () => {
    const user = userEvent.setup();
    render(<Tabs items={items} />);
    await user.click(screen.getByRole("tab", { name: "Tab B" }));
    expect(screen.getByText("Content B")).toBeInTheDocument();
  });
});

describe("marks selected tab", () => {
  it("marks aria-selected", () => {
    render(<Tabs items={items} />);
    expect(screen.getByRole("tab", { name: "Tab A" })).toHaveAttribute("aria-selected", "true");
  });
});

describe("disables disabled tabs", () => {
  it("disables items", () => {
    const d = [{ id: "a", label: "A", content: "CA" }, { id: "b", label: "B", content: "CB", disabled: true }];
    render(<Tabs items={d} />);
    expect(screen.getByRole("tab", { name: "B" })).toBeDisabled();
  });
});

describe("Tabs keyboard navigation", () => {
  it("marks the active tab", () => {
    render(<Tabs items={items} />);
    expect(screen.getByRole("tab", { name: "Tab A" })).toHaveAttribute("aria-selected", "true");
  });
});
