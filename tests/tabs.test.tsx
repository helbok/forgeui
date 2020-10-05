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
