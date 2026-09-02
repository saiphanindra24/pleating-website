import { Info, Layers, MapPin, Phone, Sparkles } from "lucide-react";
import {
  BUSINESS_NAME,
  LOCATION_CITY,
  PHONE_DISPLAY,
  PHONE_TEL,
  VISIT_NOTE,
  whatsappLink,
} from "@/constants/business";
import Reveal from "./ui/Reveal";
import WhatsAppIcon from "./ui/WhatsAppIcon";

const HERO_IMAGE =
  "https://images.pexels.com/photos/35108804/pexels-photo-35108804.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800";

/** Slow-turning gold mandala behind the hero portrait. */
function Mandala({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="0.8">
      <circle cx="100" cy="100" r="96" strokeDasharray="3 5" />
      <circle cx="100" cy="100" r="72" />
      {Array.from({ length: 12 }).map((_, i) => (
        <path
          key={i}
          d="M100 28c10 14 15 26 15 38s-6.7 22-15 22-15-10-15-22 5-24 15-38z"
          transform={`rotate(${i * 30} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="18" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="pattern-paisley relative overflow-hidden">
      {/* soft ambient washes */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-magenta-100/60 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-24 h-[380px] w-[380px] rounded-full bg-gold-100/70 blur-3xl" />

      <div className="shell relative grid items-center gap-12 pt-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-16 lg:pb-24">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <p className="eyebrow rounded-full border border-gold-500/40 bg-cream-50/80 px-4 py-2 text-magenta-700 shadow-sm">
              <MapPin className="h-4 w-4 text-magenta-600" aria-hidden="true" />
              Home-based service in {LOCATION_CITY}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-[44px] leading-[1.02] font-semibold text-maroon-900 sm:text-6xl lg:text-[68px]">
              Perfect Pleats.
              <span className="mt-1 block font-script text-[46px] leading-[1.15] font-normal text-magenta-600 sm:text-6xl lg:text-[64px]">
                Beautiful You.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="text-lg font-extrabold tracking-wide text-magenta-700 sm:text-xl">
              Professional Saree Pre-Pleating Service in {LOCATION_CITY}
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-maroon-800/80 sm:text-lg">
              Get your saree neatly pre-pleated and ready to drape for weddings, festivals, functions, parties and
              special occasions.
            </p>
          </Reveal>

          <Reveal delay={200} className="w-full">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-wa w-full sm:w-auto">
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp Us
              </a>
              <a href={PHONE_TEL} className="btn-outline w-full sm:w-auto">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>

          <Reveal delay={260} className="w-full">
            <p className="flex items-start gap-3 rounded-2xl border-l-4 border-gold-500 bg-cream-50/90 px-5 py-4 text-sm leading-relaxed font-semibold text-maroon-800 shadow-sm sm:text-[15px]">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
              <span>
                {VISIT_NOTE}
                <span className="mt-1 block text-[13px] font-medium text-maroon-700/70">
                  {BUSINESS_NAME} is a home-based saree pre-pleating service — we do not sell sarees.
                </span>
              </span>
            </p>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={120} className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
          <div className="relative">
            <Mandala className="animate-spin-slower absolute -top-10 -left-12 h-44 w-44 text-gold-500/50 sm:h-56 sm:w-56" />
            {/* offset arch outline */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-t-full rounded-b-[28px] border-2 border-gold-500/45"
            />
            <div className="relative overflow-hidden rounded-t-full rounded-b-[24px] border border-gold-500/40 bg-cream-200 shadow-[0_28px_60px_rgba(92,19,48,0.22)]">
              <img
                src={HERO_IMAGE}
                alt="Woman wearing a pink saree with neat, crisp pleats prepared by saree pre-pleating in Hanamkonda"
                width={800}
                height={1200}
                fetchPriority="high"
                className="h-[440px] w-full object-cover object-top sm:h-[520px] lg:h-[560px]"
              />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-maroon-950/45 to-transparent" />
            </div>

            {/* floating badges */}
            <div className="animate-floaty absolute top-10 -left-4 flex items-center gap-2 rounded-full border border-gold-500/40 bg-cream-50/95 px-4 py-2.5 shadow-lg sm:-left-8">
              <Sparkles className="h-4 w-4 text-magenta-600" aria-hidden="true" />
              <span className="text-[13px] font-extrabold tracking-wide text-maroon-800">Ready to Drape</span>
            </div>
            <div className="animate-floaty-slow absolute -right-3 bottom-14 flex items-center gap-2 rounded-full border border-gold-500/40 bg-cream-50/95 px-4 py-2.5 shadow-lg sm:-right-7">
              <Layers className="h-4 w-4 text-gold-600" aria-hidden="true" />
              <span className="text-[13px] font-extrabold tracking-wide text-maroon-800">Neat, Uniform Pleats</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div aria-hidden="true" className="temple-strip" />
    </section>
  );
}
