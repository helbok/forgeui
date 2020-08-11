import React from "react";
import { render, screen } from "@testing-library/react";
import { Select } from "../src/components/Select";

describe("Select", () => {
  it("renders a combobox", () => {
    render(
      <Select placeholder="Pick one">
        <option value="a">A</option>
      </Select>,
    );
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("shows the placeholder as the first option", () => {
    render(<Select placeholder="Pick one" />);
    expect(screen.getByRole("option", { name: "Pick one" })).toBeInTheDocument();
  });
});
