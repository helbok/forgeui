import React, { useId } from "react";
import { cn } from "../utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  errorMessage?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ invalid = false, errorMessage, className, ...props }, ref) => {
    const errorId = useId();
    const describedBy = errorMessage ? errorId : undefined;
    return (
      <input
        ref={ref}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        className={cn("fui-input", invalid && "fui-input--invalid", className)}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
