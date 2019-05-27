import React from "react";
import { cn } from "../utils/cn";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ placeholder, className, children, ...props }, ref) => {
    return (
      <select ref={ref} className={cn("fui-select", className)} {...props}>
        {placeholder ? <option value="">{placeholder}</option> : null}
        {children}
      </select>
    );
  },
);

Select.displayName = "Select";
