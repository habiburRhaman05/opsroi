type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-[0.78rem] font-bold tracking-[0.14em] uppercase text-green-deep mb-3.5 before:content-[''] before:inline-block before:w-4.5 before:h-0.5 before:shrink-0 before:bg-gold ${className}`}
    >
      {children}
    </div>
  );
}
