import React from "react";
import { cn } from "../utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "fui-button",
          `fui-button--${variant}`,
          `fui-button--${size}`,
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
