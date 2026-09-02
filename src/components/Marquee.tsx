import { OCCASIONS } from "@/data/occasions";

/** Saree-border style marquee strip listing the occasions served. */
export default function Marquee() {
  const items = [...OCCASIONS, ...OCCASIONS];
  return (
    <div
      aria-hidden="true"
      className="pattern-paisley-light relative overflow-hidden border-y border-gold-500/30 bg-maroon-900 py-3.5"
    >
      <div className="animate-marquee flex w-max items-center gap-8 pr-8">
        {items.map((item, i) => (
          <span key={`${item.id}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-display text-lg tracking-[0.18em] text-gold-200/90 uppercase">{item.name}</span>
            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-magenta-300" fill="currentColor">
              <path d="M6 0l1.8 4.2L12 6 7.8 7.8 6 12 4.2 7.8 0 6l4.2-1.8z" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
