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

describe("Theme preference storage", () => {
  it("reads the stored preference", () => {
    window.localStorage.setItem("forgeui-theme", "dark");
    render(<ThemeProvider><Probe /></ThemeProvider>);
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  });
});

describe("Theme system preference", () => {
  it("resolves system preference", () => {
    render(<ThemeProvider defaultPreference="system"><Probe /></ThemeProvider>);
    expect(document.documentElement).toHaveAttribute("data-theme");
  });
});
