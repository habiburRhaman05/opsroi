import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  variant?: "light" | "dark";
}

const base =
  "w-full rounded-xl border px-4 py-3.5 text-base focus:outline-none focus:ring-1 transition-colors";

const themeMap = {
  light: {
    ok: "border-line bg-mist text-navy placeholder:text-ink-soft/50 focus:border-green focus:ring-green/20",
    err: "border-red-500 bg-mist text-navy placeholder:text-ink-soft/50 focus:border-red-500 focus:ring-red-500/20",
  },
  dark: {
    ok: "border-white/10 bg-navy/40 text-white placeholder:text-white/40 focus:border-green/50 focus:ring-green/20",
    err: "border-red-500/60 bg-navy/40 text-white placeholder:text-white/40 focus:border-red-500/60 focus:ring-red-500/20",
  },
} as const;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, variant = "light", className = "", ...props }, ref) => {
    const theme = themeMap[variant];
    const state = error ? theme.err : theme.ok;
    return (
      <input ref={ref} className={`${base} ${state} ${className}`} {...props} />
    );
  }
);
Input.displayName = "Input";

export default Input;
