import { cn } from "@/utils/cn";

/** Small gold divider ornament: rule — diamond lotus — rule. */
export default function Ornament({ className, tone = "gold" }: { className?: string; tone?: "gold" | "cream" }) {
  const stroke = tone === "gold" ? "#be9440" : "#e3c98f";
  return (
    <svg
      viewBox="0 0 220 24"
      aria-hidden="true"
      className={cn("h-5 w-44", className)}
      fill="none"
      stroke={stroke}
      strokeWidth="1.2"
    >
      <path d="M4 12h74" />
      <path d="M142 12h74" />
      <path d="M110 4c3.4 3 5 5.6 5 8s-1.6 5-5 8c-3.4-3-5-5.6-5-8s1.6-5 5-8z" fill={stroke} fillOpacity="0.25" />
      <path d="M96 12l6-5 6 5-6 5zM112 12l6-5 6 5-6 5z" />
      <circle cx="86" cy="12" r="1.6" fill={stroke} stroke="none" />
      <circle cx="134" cy="12" r="1.6" fill={stroke} stroke="none" />
    </svg>
  );
}
