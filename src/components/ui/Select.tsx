import * as React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  variant?: "light" | "dark";
}

const base =
  "w-full rounded-xl border px-4 py-3.5 text-base focus:outline-none focus:ring-1 transition-colors appearance-none";

const themeMap = {
  light: {
    ok: "border-line bg-mist text-navy focus:border-green focus:ring-green/20",
    err: "border-red-500 bg-mist text-navy focus:border-red-500 focus:ring-red-500/20",
  },
  dark: {
    ok: "border-white/10 bg-navy/40 text-white focus:border-green/50 focus:ring-green/20",
    err: "border-red-500/60 bg-navy/40 text-white focus:border-red-500/60 focus:ring-red-500/20",
  },
} as const;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ error, variant = "light", className = "", children, ...props }, ref) => {
    const theme = themeMap[variant];
    const state = error ? theme.err : theme.ok;
    return (
      <select ref={ref} className={`${base} ${state} ${className}`} {...props}>
        {children}
      </select>
    );
  }
);
Select.displayName = "Select";

export default Select;
