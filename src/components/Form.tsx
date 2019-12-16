import React from "react";
import { cn } from "../utils/cn";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, ...props }, ref) => (
    <form ref={ref} className={cn("fui-form", className)} noValidate {...props} />
  ),
);

Form.displayName = "Form";

export interface FormFieldProps {
  label?: React.ReactNode;
  error?: React.ReactNode;
  htmlFor?: string;
  children: React.ReactNode;
}

export const FormField = ({ label, error, htmlFor, children }: FormFieldProps) => (
  <div className="fui-form-field">
    {label ? (
      <label htmlFor={htmlFor} className="fui-form-field__label">
        {label}
      </label>
    ) : null}
    {children}
    {error ? (
      <span role="alert" className="fui-form-field__error">
        {error}
      </span>
    ) : null}
  </div>
);

FormField.displayName = "FormField";
