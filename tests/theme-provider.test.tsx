import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../src/components/ThemeProvider";

function Probe() {
  const { mode } = useTheme();
  return <span>{mode}</span>;
}

describe("ThemeProvider", () => {
  it("provides the default mode", () => {
    render(
      <ThemeProvider defaultMode="dark">
        <Probe />
      </ThemeProvider>,
    );
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  });
});
