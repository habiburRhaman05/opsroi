import * as React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  variant?: "light" | "dark";
}

const base =
  "w-full rounded-xl border px-4 py-3.5 text-base focus:outline-none focus:ring-1 transition-colors resize-y";

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

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, variant = "light", className = "", ...props }, ref) => {
    const theme = themeMap[variant];
    const state = error ? theme.err : theme.ok;
    return (
      <textarea ref={ref} className={`${base} ${state} ${className}`} {...props} />
    );
  }
);
Textarea.displayName = "Textarea";

export default Textarea;
