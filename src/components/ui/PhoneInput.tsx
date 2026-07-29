"use client";

import * as React from "react";
import Input from "./Input";
import { formatUSPhone } from "@/src/lib/validations/shared";

type PhoneInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "inputMode"
> & { error?: boolean; variant?: "light" | "dark" };

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      onChange,
      autoComplete = "tel",
      placeholder = "(555) 555-5555",
      value,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const isControlled = value !== undefined;
    const formattedValue = isControlled
      ? formatUSPhone(String(value ?? ""))
      : undefined;
    const formattedDefault =
      defaultValue !== undefined ? formatUSPhone(String(defaultValue)) : undefined;

    return (
      <Input
        {...props}
        ref={ref}
        type="tel"
        inputMode="tel"
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={formattedValue}
        defaultValue={formattedDefault}
        onChange={(e) => {
          const formatted = formatUSPhone(e.target.value);
          if (e.target.value !== formatted) {
            e.target.value = formatted;
          }
          onChange?.(e);
        }}
      />
    );
  }
);
PhoneInput.displayName = "PhoneInput";

export default PhoneInput;
