import { Phone } from "lucide-react";
import { PHONE_TEL, whatsappLink } from "@/constants/business";
import WhatsAppIcon from "./ui/WhatsAppIcon";

/** Sticky bottom action bar for mobile: [ WhatsApp ] [ Call Now ]. */
export default function MobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gold-500/35 bg-cream-50/95 px-3 pt-2.5 shadow-[0_-10px_30px_rgba(51,9,27,0.18)] backdrop-blur-md md:hidden"
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="btn-wa w-full !py-3.5 text-[15px]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
        <a href={PHONE_TEL} aria-label="Call Jyothi Pre Pleating Sarees" className="btn-maroon w-full !py-3.5 text-[15px]">
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call Now
        </a>
      </div>
    </div>
  );
}
