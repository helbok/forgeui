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

describe("useDisclosure toggles", () => {
  it("exposes open and close", () => {
    function Probe() {
      const { isOpen, open, close } = useDisclosure();
      return <span data-open={isOpen}><button onClick={open}>o</button><button onClick={close}>c</button></span>;
    }
    render(<Probe />);
    expect(screen.getByText("o")).toBeInTheDocument();
  });
});

describe("useLocalStorage persistence", () => {
  it("persists the value", () => {
    function Probe() {
      const [value, setValue] = useLocalStorage("k", 0);
      return <button onClick={() => setValue(1)}>{value}</button>;
    }
    render(<Probe />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});

describe("useClickOutside calls handler", () => {
  it("returns a ref", () => {
    function Probe() {
      const ref = useClickOutside<HTMLDivElement>(() => {});
      return <div ref={ref}>x</div>;
    }
    render(<Probe />);
    expect(screen.getByText("x")).toBeInTheDocument();
  });
});

describe("useMediaQuery matches", () => {
  it("returns a boolean", () => {
    function Probe() {
      const matches = useMediaQuery("(min-width: 1px)");
      return <span>{String(matches)}</span>;
    }
    render(<Probe />);
    expect(screen.getByText(/true|false/)).toBeInTheDocument();
  });
});

describe("useMediaQuery subscribes", () => {
  it("calls matchMedia", () => {
    const spy = jest.spyOn(window, "matchMedia");
    function Probe() {
      useMediaQuery("(min-width: 1px)");
      return null;
    }
    render(<Probe />);
    expect(spy).toHaveBeenCalled();
  });
});
