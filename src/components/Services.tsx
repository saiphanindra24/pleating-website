import { ArrowUpRight } from "lucide-react";
import { whatsappLink } from "@/constants/business";
import { SERVICES } from "@/data/services";
import { cn } from "@/utils/cn";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import WhatsAppIcon from "./ui/WhatsAppIcon";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative py-16 sm:py-24">
      <div className="shell">
        <div id="services-title">
          <SectionHeading
            eyebrow="What we do"
            title="Our Saree Pre-Pleating Services"
            description="Neat, uniform and ready-to-drape saree pleats prepared with care for your special occasions."
          />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal
                key={service.id}
                delay={i * 70}
                className={cn(i === 0 || i === 1 ? "lg:col-span-3" : "lg:col-span-2", i === 0 && "md:col-span-2 lg:col-span-3")}
              >
                <article className="card card-hover group flex h-full flex-col gap-4 p-7">
                  <div className="flex items-center gap-4">
                    <span className="grid h-13 w-13 shrink-0 place-items-center rounded-full bg-magenta-600/10 text-magenta-700 ring-1 ring-gold-500/45 transition-all duration-300 group-hover:bg-magenta-600 group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-[26px] leading-tight font-semibold text-maroon-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-maroon-800/75 sm:text-base">{service.description}</p>
                  <a
                    href={whatsappLink(service.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 pt-1 text-sm font-extrabold tracking-wide text-magenta-700 transition-colors hover:text-magenta-600"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Enquire on WhatsApp
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-center text-sm font-semibold text-maroon-700/70">
            Every saree is pleated by hand at our home-based location in Hanamkonda — bring your saree to us and take
            it back ready to drape.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
