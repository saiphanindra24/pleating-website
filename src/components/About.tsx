import { BadgeCheck, MapPin } from "lucide-react";
import logo from "@/assets/images/logo.jpg";
import { BUSINESS_NAME, LOCATION_CITY, LOCATION_FULL } from "@/constants/business";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const PROMISES = [
  "Clean, uniform pleats with a ready-to-drape finish",
  "Careful handling of every saree — silk, cotton or designer",
  "Personal, home-based service with individual attention",
  "Convenient stop before weddings, festivals and functions",
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="pattern-paisley relative bg-cream-200/60 py-16 sm:py-24">
      <div className="shell grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="mx-auto w-full max-w-sm">
          <div className="relative rounded-[2.5rem] border border-gold-500/35 bg-cream-50 p-8 shadow-[0_20px_50px_rgba(92,19,48,0.12)]">
            <div aria-hidden="true" className="absolute inset-3 rounded-[2rem] border border-dashed border-gold-500/40" />
            <img
              src={logo}
              alt={`${BUSINESS_NAME} logo — circular emblem of a woman in a pink saree with the words Jyothi Pre Pleating Sarees, Hanamkonda`}
              width={320}
              height={320}
              loading="lazy"
              decoding="async"
              className="relative mx-auto w-full max-w-[280px] drop-shadow-sm"
            />
            <p className="relative mt-6 flex items-center justify-center gap-2 rounded-full bg-magenta-50 px-4 py-2 text-[12px] font-extrabold tracking-[0.2em] text-magenta-700 uppercase ring-1 ring-magenta-300/50">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Home-based • {LOCATION_CITY}
            </p>
          </div>
        </Reveal>

        <div id="about-title" className="flex flex-col items-start gap-6">
          <SectionHeading
            align="left"
            eyebrow="About us"
            title="About Jyothi Pre Pleating Sarees"
            className="gap-3"
          />
          <Reveal delay={80}>
            <div className="space-y-4 text-base leading-relaxed text-maroon-800/80 sm:text-lg">
              <p>
                {BUSINESS_NAME} is a home-based saree pre-pleating service in {LOCATION_CITY}. We help women prepare
                their sarees neatly and conveniently before weddings, festivals, functions and other special
                occasions.
              </p>
              <p>
                Our focus is simple — clean, uniform pleats and a ready-to-drape finish that saves time when getting
                ready.
              </p>
              <p>Customers can visit our location with their sarees for pre-pleating service.</p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {PROMISES.map((promise) => (
                <li key={promise} className="flex items-start gap-2.5 text-[15px] font-semibold text-maroon-800">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                  {promise}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={200}>
            <p className="rounded-2xl border-l-4 border-magenta-600 bg-cream-50 px-5 py-4 text-sm leading-relaxed font-semibold text-maroon-800/85 shadow-sm">
              We are a service, not a shop — we do not sell sarees. Bring your own saree to our home-based location in{" "}
              {LOCATION_FULL} and collect it beautifully pre-pleated.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
