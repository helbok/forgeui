import React from "react";
import { cn } from "../utils/cn";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

export const Spinner = ({ size = "md", label = "Loading", className }: SpinnerProps) => (
  <span
    role="status"
    aria-label={label}
    className={cn("fui-spinner", `fui-spinner--${size}`, className)}
  />
);

Spinner.displayName = "Spinner";
