import { ScrollReveal } from "@/src/components/shared/ScrollReveal";
import { SectionLabel } from "@/src/components/ui/SectionLabel";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  maxW?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  maxW = "max-w-3xl",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center" : "";
  const titleMaxW = align === "center" ? maxW : "max-w-lg";

  return (
    <div className={`${alignment} mb-16`}>
      <ScrollReveal>
        <SectionLabel className={align === "center" ? "" : "mb-0"}>
          {label}
        </SectionLabel>
      </ScrollReveal>
      <ScrollReveal>
        <h2
          className={`font-headline-xl text-primary text-4xl md:text-5xl ${titleMaxW} mx-auto ${align === "center" ? "mb-8" : ""}`}
        >
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal>
          <p className="font-body-lg text-on-surface-variant">{description}</p>
        </ScrollReveal>
      )}
    </div>
  );
}
