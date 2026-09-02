import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, TAGLINE, WHATSAPP_DEFAULT_MESSAGE, whatsappLink } from "@/constants/business";
import Ornament from "./ui/Ornament";
import Reveal from "./ui/Reveal";
import WhatsAppIcon from "./ui/WhatsAppIcon";

export default function WhatsAppCTA() {
  return (
    <section aria-labelledby="cta-title" className="pattern-paisley-light relative overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-magenta-700 py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[560px] -translate-x-1/2 rounded-full bg-magenta-500/25 blur-3xl"
      />
      <div className="shell relative flex flex-col items-center gap-5 text-center">
        <Reveal className="flex flex-col items-center gap-4">
          <p className="font-script text-3xl text-gold-300 sm:text-4xl">{TAGLINE}</p>
          <h2 id="cta-title" className="max-w-2xl font-display text-4xl leading-[1.08] font-semibold text-cream-100 sm:text-5xl">
            Getting Ready for a Special Occasion?
          </h2>
          <Ornament tone="cream" />
          <p className="max-w-xl text-base leading-relaxed text-cream-200/85 sm:text-lg">
            Bring your saree to Jyothi Pre Pleating Sarees and get it neatly pre-pleated and ready to drape.
          </p>
        </Reveal>
        <Reveal delay={120} className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa w-full !px-8 !py-4 text-lg sm:w-auto"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Chat on WhatsApp
          </a>
          <a href={PHONE_TEL} className="btn-outline-cream w-full sm:w-auto">
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call {PHONE_DISPLAY}
          </a>
        </Reveal>
        <Reveal delay={180}>
          <p className="text-[13px] font-semibold text-cream-200/60">
            Home-based service in Hanamkonda • Pickup and delivery not available
          </p>
        </Reveal>
      </div>
    </section>
  );
}
