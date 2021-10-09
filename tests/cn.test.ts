import { cn } from "../src/utils/cn";

describe("cn", () => {
  it("joins class names", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("keeps truthy conditional classes", () => {
    expect(cn("a", false && "b", { c: true, d: false })).toBe("a c");
  });
});

describe("supports number values", () => {
  it("keeps numeric classes", () => {
    expect(cn("m-1", 2)).toBe("m-1 2");
  });
});

describe("supports object conditions", () => {
  it("applies conditional objects", () => {
    expect(cn({ a: true, b: false })).toBe("a");
  });
});
