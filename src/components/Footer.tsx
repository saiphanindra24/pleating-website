import { MapPin, Phone } from "lucide-react";
import logo from "@/assets/images/logo.jpg";
import {
  BUSINESS_NAME,
  LOCATION_FULL,
  PHONE_RAW,
  PHONE_TEL,
  TAGLINE,
  whatsappLink,
} from "@/constants/business";
import WhatsAppIcon from "./ui/WhatsAppIcon";

const FOOTER_LINKS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "how-it-works", label: "How It Works" },
  { id: "occasions", label: "Occasions" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-maroon-950 pt-14 pb-28 text-cream-200 md:pb-12">
      <div aria-hidden="true" className="temple-strip absolute inset-x-0 top-0 opacity-70" />
      <div className="shell grid gap-10 md:grid-cols-3">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt={`${BUSINESS_NAME} logo`}
              width={56}
              height={56}
              loading="lazy"
              decoding="async"
              className="h-14 w-14 rounded-full ring-1 ring-gold-400/50"
            />
            <span className="flex flex-col leading-none">
              <span className="font-script text-[28px] leading-none text-gold-300">Jyothi</span>
              <span className="mt-1 text-[10px] font-extrabold tracking-[0.26em] text-cream-200/80 uppercase">
                Pre Pleating Sarees
              </span>
            </span>
          </div>
          <p className="font-display text-xl text-cream-100 italic">“{TAGLINE}”</p>
          <p className="flex items-center gap-2 text-sm font-semibold text-cream-200/70">
            <MapPin className="h-4 w-4 text-gold-400" aria-hidden="true" />
            {LOCATION_FULL}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="text-[12px] font-extrabold tracking-[0.28em] text-gold-400 uppercase">Explore</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {FOOTER_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-[15px] font-semibold text-cream-200/80 transition-colors hover:text-gold-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-[12px] font-extrabold tracking-[0.28em] text-gold-400 uppercase">Reach us</h3>
          <ul className="mt-4 space-y-3 text-[15px] font-semibold">
            <li>
              <a href={PHONE_TEL} className="flex items-center gap-2.5 text-cream-200/80 transition-colors hover:text-gold-300">
                <Phone className="h-4 w-4 text-gold-400" aria-hidden="true" />
                Phone: {PHONE_RAW}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-cream-200/80 transition-colors hover:text-gold-300"
              >
                <WhatsAppIcon className="h-4 w-4 text-gold-400" />
                WhatsApp: {PHONE_RAW}
              </a>
            </li>
          </ul>
          <p className="mt-4 rounded-xl border border-cream-100/10 bg-cream-50/[0.05] px-4 py-3 text-[13px] leading-relaxed font-semibold text-cream-200/65">
            Home-based saree pre-pleating service. Please bring your saree to our location — pickup and delivery are
            not available.
          </p>
        </div>
      </div>

      <div className="shell mt-10 border-t border-cream-100/10 pt-6">
        <p className="text-center text-[13px] font-semibold text-cream-200/55">
          © 2026 {BUSINESS_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
