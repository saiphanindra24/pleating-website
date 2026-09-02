import { useState, type FormEvent } from "react";
import { Clock, MapPin, Navigation, Phone, Send } from "lucide-react";
import {
  BUSINESS_NAME,
  CALL_BEFORE_VISITING,
  HOME_BASED_NOTE,
  LOCATION_FULL,
  PHONE_DISPLAY,
  PHONE_RAW,
  PHONE_TEL,
  getDirectionsUrl,
  whatsappLink,
} from "@/constants/business";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import WhatsAppIcon from "./ui/WhatsAppIcon";

const OCCASION_OPTIONS = [
  "Wedding",
  "Bridal event",
  "Reception",
  "Festival",
  "Family function",
  "Party",
  "Traditional event",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-gold-500/40 bg-cream-50 px-4 py-3 text-[15px] font-semibold text-maroon-900 placeholder:font-medium placeholder:text-maroon-700/40 transition-colors focus:border-magenta-500 focus:outline-none focus:ring-2 focus:ring-magenta-300/50";

export default function Contact() {
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState(OCCASION_OPTIONS[0]);
  const [date, setDate] = useState("");
  const [sarees, setSarees] = useState("1");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      "Hi, I would like to enquire about saree pre-pleating in Hanamkonda.",
      "",
      `Name: ${name.trim()}`,
      `Occasion: ${occasion}`,
      date ? `Preferred date: ${date}` : null,
      `Sarees: ${sarees}`,
      message.trim() ? `Note: ${message.trim()}` : null,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
    window.setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative py-16 sm:py-24">
      <div className="shell">
        <div id="contact-title">
          <SectionHeading
            eyebrow="Location & contact"
            title="Visit Us in Hanamkonda"
            description="Call or message us first, then bring your saree across — we will take care of the pleats."
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Details */}
          <Reveal>
            <div className="card flex h-full flex-col gap-6 p-7 sm:p-9">
              <div>
                <h3 className="font-display text-3xl font-semibold text-maroon-900">{BUSINESS_NAME}</h3>
                <p className="mt-1 text-sm font-bold tracking-[0.18em] text-gold-700 uppercase">
                  Saree pre-pleating service
                </p>
              </div>

              <ul className="space-y-3 text-[15px] font-semibold text-maroon-800">
                <li className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-magenta-50 text-magenta-700 ring-1 ring-gold-500/40">
                    <MapPin className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  {LOCATION_FULL}
                </li>
                <li>
                  <a href={PHONE_TEL} className="flex items-center gap-3 transition-colors hover:text-magenta-700">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-magenta-50 text-magenta-700 ring-1 ring-gold-500/40">
                      <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    {PHONE_RAW}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors hover:text-wa-700"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-wa-600/10 text-wa-700 ring-1 ring-wa-600/30">
                      <WhatsAppIcon className="h-4.5 w-4.5" />
                    </span>
                    WhatsApp: {PHONE_RAW}
                  </a>
                </li>
              </ul>

              <p className="rounded-2xl border-l-4 border-magenta-600 bg-magenta-50 px-5 py-4 text-sm leading-relaxed font-bold text-magenta-700">
                {HOME_BASED_NOTE}
              </p>

              <div className="flex items-start gap-3 rounded-2xl bg-gold-100/70 px-5 py-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-700" aria-hidden="true" />
                <div>
                  <p className="text-sm font-extrabold text-maroon-900">Call Before Visiting</p>
                  <p className="mt-1 text-[13px] leading-relaxed font-semibold text-maroon-800/75">
                    {CALL_BEFORE_VISITING}
                  </p>
                </div>
              </div>

              <div className="mt-auto grid gap-3 sm:grid-cols-3">
                <a href={PHONE_TEL} className="btn-maroon w-full !px-4 text-sm">
                  <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                  Call Now
                </a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-wa w-full !px-4 text-sm">
                  <WhatsAppIcon className="h-4.5 w-4.5" />
                  WhatsApp Us
                </a>
                <a
                  href={getDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full !px-4 text-sm"
                >
                  <Navigation className="h-4.5 w-4.5" aria-hidden="true" />
                  Get Directions
                </a>
              </div>
            </div>
          </Reveal>

          {/* Enquiry form */}
          <Reveal delay={100}>
            <form onSubmit={onSubmit} className="card flex h-full flex-col gap-5 p-7 sm:p-9">
              <div>
                <h3 className="font-display text-3xl font-semibold text-maroon-900">Enquire / Book an Appointment</h3>
                <p className="mt-2 text-sm leading-relaxed font-semibold text-maroon-800/70">
                  Fill this in and it opens WhatsApp with your enquiry pre-filled — we reply with an appointment time.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="enquiry-name" className="mb-1.5 block text-[13px] font-extrabold tracking-wide text-maroon-800">
                    Your name *
                  </label>
                  <input
                    id="enquiry-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Lakshmi"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="enquiry-occasion" className="mb-1.5 block text-[13px] font-extrabold tracking-wide text-maroon-800">
                    Occasion
                  </label>
                  <select
                    id="enquiry-occasion"
                    name="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className={inputClass}
                  >
                    {OCCASION_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="enquiry-date" className="mb-1.5 block text-[13px] font-extrabold tracking-wide text-maroon-800">
                    Preferred date
                  </label>
                  <input
                    id="enquiry-date"
                    name="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="enquiry-sarees" className="mb-1.5 block text-[13px] font-extrabold tracking-wide text-maroon-800">
                    Number of sarees
                  </label>
                  <input
                    id="enquiry-sarees"
                    name="sarees"
                    type="number"
                    min={1}
                    max={20}
                    value={sarees}
                    onChange={(e) => setSarees(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="enquiry-message" className="mb-1.5 block text-[13px] font-extrabold tracking-wide text-maroon-800">
                    Anything else? <span className="font-semibold text-maroon-700/60">(optional)</span>
                  </label>
                  <textarea
                    id="enquiry-message"
                    name="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Saree type, timing, any question…"
                    className={inputClass}
                  />
                </div>
              </div>

              <button type="submit" className="btn-wa w-full">
                <Send className="h-4.5 w-4.5" aria-hidden="true" />
                Send Enquiry on WhatsApp
              </button>
              <p role="status" className="min-h-5 text-center text-[13px] font-bold text-wa-700">
                {sent ? "WhatsApp is opening with your enquiry pre-filled. See you soon!" : ""}
              </p>
              <p className="-mt-2 text-center text-[12px] font-semibold text-maroon-700/60">
                Nothing is stored on this website — the details go straight into your own WhatsApp message.
              </p>
              <p className="text-center text-[13px] font-semibold text-maroon-800/75">
                Prefer to talk?{" "}
                <a href={PHONE_TEL} className="font-extrabold text-magenta-700 underline decoration-gold-500/60 decoration-2 underline-offset-4 hover:text-magenta-600">
                  Call {PHONE_DISPLAY}
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
