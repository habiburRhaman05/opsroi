import * as React from "react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  variant?: "light" | "dark";
  children: React.ReactNode;
}

export default function FormField({
  label,
  htmlFor,
  required,
  error,
  variant = "light",
  children,
}: FormFieldProps) {
  const labelColor = variant === "dark" ? "text-white" : "text-navy";
  const asteriskColor = variant === "dark" ? "text-green" : "text-green-deep";
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className={`block mb-2 text-xs font-bold uppercase tracking-[0.14em] font-display ${labelColor}`}
      >
        {label} {required && <span className={asteriskColor}>*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-500 font-semibold">{error}</p>
      )}
    </div>
  );
}
