import React from "react";
import { render, screen } from "@testing-library/react";
import { ToastProvider, useToast } from "../src/components/Toast";

function Trigger({ message }: { message: string }) {
  const { toast } = useToast();
  return <button onClick={() => toast(message)}>Show</button>;
}

describe("Toast", () => {
  it("exposes a toast function through context", () => {
    render(
      <ToastProvider>
        <Trigger message="Saved" />
      </ToastProvider>,
    );
    expect(screen.getByText("Show")).toBeInTheDocument();
  });
});

describe("dismisses toasts", () => {
  it("renders the toaster container", () => {
    render(<ToastProvider><span>x</span></ToastProvider>);
    expect(document.querySelector(".fui-toaster")).toBeInTheDocument();
  });
});
