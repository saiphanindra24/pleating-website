import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Home, X } from "lucide-react";
import logo from "@/assets/images/logo.jpg";
import { BUSINESS_NAME } from "@/constants/business";
import { GALLERY_CATEGORIES, GALLERY_ITEMS, type GalleryCategory, type GalleryItem } from "@/data/gallery";
import { cn } from "@/utils/cn";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

function TileVisual({ item }: { item: GalleryItem }) {
  if (item.kind === "photo") {
    return (
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }
  if (item.kind === "before-after") {
    return (
      <span className="grid h-full w-full grid-cols-2">
        <span className="relative block h-full w-full overflow-hidden">
          <img src={item.srcBefore} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          <span className="absolute bottom-2 left-2 rounded-full bg-maroon-950/75 px-2.5 py-1 text-[10px] font-extrabold tracking-[0.18em] text-cream-100 uppercase">
            Before
          </span>
        </span>
        <span className="relative block h-full w-full overflow-hidden">
          <img src={item.srcAfter} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          <span className="absolute bottom-2 right-2 rounded-full bg-magenta-600/90 px-2.5 py-1 text-[10px] font-extrabold tracking-[0.18em] text-white uppercase">
            After
          </span>
        </span>
      </span>
    );
  }
  if (item.kind === "placeholder") {
    return (
      <span className="flex h-full w-full flex-col items-center justify-center gap-3 border-2 border-dashed border-gold-500/50 bg-cream-100 px-4 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-gold-100 text-gold-700 ring-1 ring-gold-500/40">
          <Home className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="text-[13px] font-extrabold tracking-wide text-maroon-800/70">Photo coming soon</span>
      </span>
    );
  }
  return (
    <span className="flex h-full w-full flex-col items-center justify-center gap-3 bg-cream-100 px-5 text-center">
      <img src={logo} alt="" loading="lazy" decoding="async" className="h-28 w-28 rounded-full ring-1 ring-gold-500/50" />
      <span className="font-script text-2xl text-magenta-700">Jyothi</span>
    </span>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = filter === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter);
  const viewable = items.filter((item) => item.kind === "photo" || item.kind === "before-after");

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: 1 | -1) => {
      setLightbox((current) => {
        if (current === null || viewable.length === 0) return current;
        return (current + dir + viewable.length) % viewable.length;
      });
    },
    [viewable.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, step]);

  const activeItem = lightbox !== null ? viewable[lightbox] : null;

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="relative py-16 sm:py-24">
      <div className="shell">
        <div id="gallery-title">
          <SectionHeading
            eyebrow="Gallery"
            title="Our Work"
            description="A look at the pleats, drapes and the little details we care for. Real photos of our finished work will keep being added here."
          />
        </div>

        <Reveal delay={80}>
          <div role="group" aria-label="Filter gallery" className="mt-10 flex flex-wrap justify-center gap-2">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setFilter(cat.id);
                  setLightbox(null);
                }}
                aria-pressed={filter === cat.id}
                className={cn(
                  "rounded-full border px-4 py-2 text-[13px] font-extrabold tracking-wide transition-all duration-200",
                  filter === cat.id
                    ? "border-magenta-600 bg-magenta-600 text-white shadow-md shadow-magenta-600/25"
                    : "border-gold-500/40 bg-cream-50 text-maroon-800 hover:border-magenta-300 hover:text-magenta-700",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const viewIndex = viewable.indexOf(item);
            const interactive = viewIndex >= 0;
            return (
              <li key={item.id} className="h-full">
                <Reveal delay={i * 60} className="h-full">
                  {interactive ? (
                    <button
                      type="button"
                      onClick={() => setLightbox(viewIndex)}
                      aria-label={`Open image: ${item.caption}`}
                      className="group card card-hover block h-full w-full overflow-hidden p-0 text-left"
                    >
                      <span className={cn("relative block overflow-hidden", item.tall ? "aspect-[4/5]" : "aspect-[4/3]")}>
                        <TileVisual item={item} />
                      </span>
                      <span className="block px-5 py-4">
                        <span className="block font-display text-lg leading-snug font-semibold text-maroon-900">
                          {item.caption}
                        </span>
                        <span className="mt-1 block text-[11px] font-extrabold tracking-[0.22em] text-gold-700 uppercase">
                          {GALLERY_CATEGORIES.find((c) => c.id === item.category)?.label}
                        </span>
                      </span>
                    </button>
                  ) : (
                    <div className="card group flex h-full flex-col overflow-hidden">
                      <span className={cn("relative block overflow-hidden", item.tall ? "aspect-[4/5]" : "aspect-[4/3]")}>
                        <TileVisual item={item} />
                      </span>
                      <span className="block px-5 py-4">
                        <span className="block font-display text-lg leading-snug font-semibold text-maroon-900">
                          {item.caption}
                        </span>
                        <span className="mt-1 block text-[11px] font-extrabold tracking-[0.22em] text-gold-700 uppercase">
                          {GALLERY_CATEGORIES.find((c) => c.id === item.category)?.label}
                        </span>
                      </span>
                    </div>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal delay={100}>
          <p className="mt-8 text-center text-[13px] font-semibold text-maroon-700/60">
            Illustrative images are shown while our own work photographs are being collected — {BUSINESS_NAME} does
            not publish customer photographs without permission.
          </p>
        </Reveal>
      </div>

      {/* Lightbox */}
      {activeItem ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.caption}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-maroon-950/92 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close image viewer"
            className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full border border-cream-100/30 text-cream-100 transition-colors hover:bg-cream-100/10"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-3 grid h-11 w-11 place-items-center rounded-full border border-cream-100/30 text-cream-100 transition-colors hover:bg-cream-100/10 sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <figure className="max-w-3xl" onClick={(e) => e.stopPropagation()}>
            {activeItem.kind === "before-after" ? (
              <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-gold-400/40">
                <img src={activeItem.srcBefore} alt="" className="max-h-[70vh] w-full object-cover" />
                <img src={activeItem.srcAfter} alt="" className="max-h-[70vh] w-full object-cover" />
              </div>
            ) : (
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className="max-h-[70vh] w-full rounded-2xl border border-gold-400/40 object-contain"
              />
            )}
            <figcaption className="mt-4 text-center font-display text-xl text-cream-100">{activeItem.caption}</figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-full border border-cream-100/30 text-cream-100 transition-colors hover:bg-cream-100/10 sm:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
