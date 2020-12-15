import { cn } from "../src/utils/cn";

describe("cn", () => {
  it("joins class names", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("keeps truthy conditional classes", () => {
    expect(cn("a", false && "b", { c: true, d: false })).toBe("a c");
  });
});
