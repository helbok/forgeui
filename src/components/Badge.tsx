import React from "react";
import { cn } from "../utils/cn";

export type BadgeVariant = "neutral" | "success" | "warning" | "danger" | "info";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "neutral", className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn("fui-badge", `fui-badge--${variant}`, className)}
      {...props}
    />
  ),
);

Badge.displayName = "Badge";
