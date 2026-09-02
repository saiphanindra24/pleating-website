import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import Ornament from "./Ornament";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "center",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <span className={cn("eyebrow", dark ? "text-gold-300" : "text-magenta-600")}>
        <span aria-hidden="true" className={cn("h-px w-6", dark ? "bg-gold-300/70" : "bg-magenta-600/50")} />
        {eyebrow}
        <span aria-hidden="true" className={cn("h-px w-6", dark ? "bg-gold-300/70" : "bg-magenta-600/50")} />
      </span>
      <h2
        className={cn(
          "font-display text-4xl leading-[1.08] font-semibold sm:text-5xl",
          dark ? "text-cream-100" : "text-maroon-900",
        )}
      >
        {title}
      </h2>
      <Ornament tone={dark ? "cream" : "gold"} className={cn(align === "left" && "mx-0")} />
      {description ? (
        <p className={cn("max-w-2xl text-base leading-relaxed sm:text-lg", dark ? "text-cream-200/80" : "text-maroon-800/75")}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
