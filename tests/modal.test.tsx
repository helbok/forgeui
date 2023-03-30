import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal } from "../src/components/Modal";

describe("Modal", () => {
  it("renders nothing when closed", () => {
    render(<Modal open={false} onClose={() => {}}>Body</Modal>);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders a dialog when open", () => {
    render(
      <Modal open onClose={() => {}} title="Settings">
        Body
      </Modal>,
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
  });
});

describe("Modal escape key", () => {
  it("closes on Escape", async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    render(<Modal open onClose={onClose}>Body</Modal>);
    await user.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalled();
  });
});

describe("Modal title", () => {
  it("renders the title", () => {
    render(<Modal open onClose={() => {}} title="Confirm">Body</Modal>);
    expect(screen.getByText("Confirm")).toBeInTheDocument();
  });
});
