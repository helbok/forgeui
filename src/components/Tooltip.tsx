import React, { useId } from "react";
import { cn } from "../utils/cn";

export interface TooltipProps {
  label: React.ReactNode;
  placement?: "top" | "right" | "bottom" | "left";
  children: React.ReactElement;
}

export const Tooltip = ({
  label,
  placement = "top",
  children,
}: TooltipProps) => {
  const id = useId();
  return (
    <span className="fui-tooltip" data-placement={placement}>
      {React.cloneElement(children, { "aria-describedby": id })}
      <span role="tooltip" id={id} className={cn("fui-tooltip__content")}>
        {label}
      </span>
    </span>
  );
};

Tooltip.displayName = "Tooltip";
