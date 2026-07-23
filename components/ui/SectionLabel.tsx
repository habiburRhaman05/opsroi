type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`text-label-caps font-label-caps font-bold uppercase text-secondary mb-4 ${className}`}>
      {children}
    </div>
  );
}
