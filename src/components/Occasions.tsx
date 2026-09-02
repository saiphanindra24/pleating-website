import { OCCASIONS } from "@/data/occasions";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Occasions() {
  return (
    <section id="occasions" aria-labelledby="occasions-title" className="pattern-paisley relative bg-cream-200/60 py-16 sm:py-24">
      <div className="shell">
        <div id="occasions-title">
          <SectionHeading
            eyebrow="Occasions we serve"
            title="Perfect for Every Special Occasion"
            description="From the wedding muhoortham to the festival morning — bring your saree in and let the pleats be one less thing to worry about."
          />
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {OCCASIONS.map((occasion, i) => {
            const Icon = occasion.icon;
            return (
              <li key={occasion.id} className="h-full">
                <Reveal delay={i * 60} className="h-full">
                <article className="card card-hover group flex h-full flex-col items-center gap-3 p-6 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-magenta-50 to-gold-100 text-magenta-700 ring-1 ring-gold-500/40 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-6.5 w-6.5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-xl leading-tight font-semibold text-maroon-900 sm:text-2xl">
                    {occasion.name}
                  </h3>
                  <p className="text-[13px] font-semibold tracking-wide text-maroon-700/65">{occasion.hint}</p>
                </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
