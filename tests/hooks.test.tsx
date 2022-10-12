import React from "react";
import { render, screen } from "@testing-library/react";
import { useDebounce } from "../src/hooks/useDebounce";
import { useLocalStorage } from "../src/hooks/useLocalStorage";

function Probe({ value }: { value: string }) {
  const debounced = useDebounce(value, 50);
  return <span>{debounced}</span>;
}

describe("useDebounce", () => {
  it("returns the debounced value", () => {
    render(<Probe value="hello" />);
    expect(screen.getByText("hello")).toBeInTheDocument();
  });
});

describe("useDebounce lag", () => {
  it("updates after the delay", () => {
    const { rerender } = render(<Probe value="a" />);
    rerender(<Probe value="b" />);
    expect(screen.getByText("a")).toBeInTheDocument();
  });
});
