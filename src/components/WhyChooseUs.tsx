import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/constants/business";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import WhatsAppIcon from "./ui/WhatsAppIcon";

const REASONS = [
  {
    title: "Neat & Uniform Pleats",
    text: "Carefully prepared pleats for a clean and beautiful finish.",
  },
  {
    title: "Ready to Drape",
    text: "Save time and make saree preparation easier.",
  },
  {
    title: "For Every Occasion",
    text: "Weddings, bridal events, festivals, parties and functions.",
  },
  {
    title: "Personal Attention",
    text: "Every saree is handled with care and attention to detail.",
  },
];

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="pattern-paisley-light relative overflow-hidden bg-maroon-900 py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent"
      />
      <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div id="why-title" className="flex flex-col items-start">
          <SectionHeading
            tone="dark"
            align="left"
            eyebrow="Why choose us"
            title="Why Choose Jyothi?"
            description="A home-based service built on one simple promise — your saree comes back with pleats you can trust, every single time."
            className="lg:sticky lg:top-28"
          />
          <Reveal delay={150} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-wa">
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Us
            </a>
            <a href={PHONE_TEL} className="btn-outline-cream">
              <Phone className="h-5 w-5" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 90}>
              <article className="group h-full rounded-3xl border border-cream-100/12 bg-cream-50/[0.06] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/50 hover:bg-cream-50/[0.1]">
                <span className="font-display text-5xl font-semibold text-gold-400/80 transition-colors duration-300 group-hover:text-gold-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-cream-100">{reason.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-cream-200/75">{reason.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
