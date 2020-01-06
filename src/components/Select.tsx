import React, { useId } from "react";
import { cn } from "../utils/cn";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  placeholder?: string;
  options?: SelectOption[];
  label?: string;
  invalid?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    { placeholder, options, label, invalid = false, className, children, ...props },
    ref,
  ) => {
    const id = useId();
    return (
      <>
        {label ? (
          <label htmlFor={id} className="fui-form-field__label">
            {label}
          </label>
        ) : null}
        <select
          ref={ref}
          id={id}
          aria-invalid={invalid || undefined}
          className={cn("fui-select", invalid && "fui-input--invalid", className)}
          {...props}
        >
          {placeholder ? <option value="">{placeholder}</option> : null}
          {options?.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
          {children}
        </select>
      </>
    );
  },
);

Select.displayName = "Select";
