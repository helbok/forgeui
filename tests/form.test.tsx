import React from "react";
import { render, screen } from "@testing-library/react";
import { Form, FormField } from "../src/components/Form";

describe("Form", () => {
  it("renders a form element", () => {
    render(<Form aria-label="Sign up" />);
    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("renders field labels and errors", () => {
    render(
      <FormField label="Email" error="Required">
        <input />
      </FormField>,
    );
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Required")).toBeInTheDocument();
  });
});

describe("renders submit button", () => {
  it("supports submit buttons", () => {
    render(<Form><button type="submit">Send</button></Form>);
    expect(screen.getByRole("button", { name: "Send" })).toHaveAttribute("type", "submit");
  });
});

describe("Form noValidate", () => {
  it("renders without native validation", () => {
    render(<Form aria-label="x" />);
    expect(screen.getByRole("form")).toHaveAttribute("novalidate");
  });
});

describe("renders error message", () => {
  it("shows validation errors", () => {
    render(<FormField error="Required"><input /></FormField>);
    expect(screen.getByText("Required")).toBeInTheDocument();
  });
});
