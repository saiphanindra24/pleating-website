import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/images/logo.jpg";
import { BUSINESS_NAME, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/constants/business";
import { cn } from "@/utils/cn";
import WhatsAppIcon from "./ui/WhatsAppIcon";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "how-it-works", label: "How It Works" },
  { id: "occasions", label: "Occasions" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll-spy: highlight the section currently in view. */
  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-gold-500/30 bg-cream-100/95 shadow-[0_6px_24px_rgba(92,19,48,0.10)] backdrop-blur-md"
          : "border-gold-500/15 bg-cream-100/80 backdrop-blur-sm",
      )}
    >
      <nav aria-label="Main navigation" className="shell flex h-[76px] items-center justify-between gap-4">
        <a href="#home" className="group flex min-w-0 items-center gap-3" aria-label={`${BUSINESS_NAME} — back to top`}>
          <img
            src={logo}
            alt={`${BUSINESS_NAME} logo`}
            width={52}
            height={52}
            className="h-12 w-12 shrink-0 rounded-full ring-1 ring-gold-500/50 transition-transform duration-300 group-hover:scale-105 sm:h-[52px] sm:w-[52px]"
          />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="font-script text-[26px] leading-none text-magenta-700 sm:text-[30px]">Jyothi</span>
            <span className="mt-1 truncate text-[10px] font-extrabold tracking-[0.26em] text-maroon-800 uppercase sm:text-[11px]">
              Pre Pleating Sarees
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-[15px] font-bold transition-colors duration-200",
                  active === link.id ? "text-magenta-700" : "text-maroon-800/80 hover:text-magenta-600",
                )}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-3.5 -bottom-0.5 h-[2px] origin-left rounded-full bg-gold-500 transition-transform duration-300",
                    active === link.id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-wa hidden !px-5 !py-2.5 text-sm md:inline-flex">
            <WhatsAppIcon className="h-4.5 w-4.5" />
            WhatsApp Us
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-gold-500/40 text-maroon-800 transition-colors hover:bg-magenta-50 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-gold-500/20 bg-cream-50 transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="shell flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-xl px-4 py-3 text-base font-bold transition-colors",
                  active === link.id ? "bg-magenta-50 text-magenta-700" : "text-maroon-800 hover:bg-cream-200",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 grid grid-cols-2 gap-2 pb-2">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-wa !py-3 text-sm">
              <WhatsAppIcon className="h-4.5 w-4.5" />
              WhatsApp Us
            </a>
            <a href={PHONE_TEL} className="btn-maroon !py-3 text-sm">
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
