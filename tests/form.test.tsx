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
