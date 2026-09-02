import { Home, Info, Phone, Scissors, Sparkles } from "lucide-react";
import { CALL_BEFORE_VISITING, PHONE_TEL } from "@/constants/business";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const STEPS = [
  {
    icon: Home,
    title: "Bring Your Saree",
    text: "Bring your saree to our home-based location in Hanamkonda.",
  },
  {
    icon: Scissors,
    title: "Get It Pre-Pleated",
    text: "We carefully prepare neat and uniform pleats.",
  },
  {
    icon: Sparkles,
    title: "Take It Ready to Drape",
    text: "Your saree is ready for easy and quick draping.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="relative py-16 sm:py-24">
      <div className="shell">
        <div id="how-title">
          <SectionHeading
            eyebrow="Simple process"
            title="How It Works"
            description="Three easy steps between your saree and a flawless drape."
          />
        </div>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          {/* connector line */}
          <div
            aria-hidden="true"
            className="absolute top-10 right-[16%] left-[16%] hidden border-t-2 border-dashed border-gold-500/45 md:block"
          />
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative flex flex-col items-center text-center">
                <Reveal delay={i * 110} className="flex flex-col items-center text-center">
                  <span className="relative grid h-20 w-20 place-items-center rounded-full border-2 border-gold-500/50 bg-cream-50 shadow-[0_10px_28px_rgba(92,19,48,0.12)]">
                    <Icon className="h-8 w-8 text-magenta-600" aria-hidden="true" />
                    <span className="absolute -top-2 -right-2 grid h-8 w-8 place-items-center rounded-full bg-magenta-600 font-display text-lg font-bold text-white shadow-md">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-maroon-900">{step.title}</h3>
                  <p className="mt-2 max-w-[26ch] text-[15px] leading-relaxed text-maroon-800/75">{step.text}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <Reveal delay={140}>
          <div className="mx-auto mt-12 flex max-w-3xl flex-col items-start gap-3 rounded-2xl border border-gold-500/45 bg-gold-100/70 px-6 py-5 sm:flex-row sm:items-center">
            <Info className="h-6 w-6 shrink-0 text-gold-700" aria-hidden="true" />
            <p className="text-[15px] leading-relaxed font-semibold text-maroon-800">
              Pickup and delivery are not available. Customers need to visit our location.{" "}
              <a href={PHONE_TEL} className="inline-flex items-center gap-1.5 font-extrabold text-magenta-700 underline decoration-gold-500/60 decoration-2 underline-offset-4 transition-colors hover:text-magenta-600">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                Call before visiting
              </a>
              <span className="mt-1 block text-[13px] font-medium text-maroon-700/75">{CALL_BEFORE_VISITING}</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
