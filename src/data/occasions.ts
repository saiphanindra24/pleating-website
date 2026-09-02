import {
  CalendarHeart,
  Crown,
  Flame,
  Flower2,
  HeartHandshake,
  Sparkles,
  Users,
  Wine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Occasion = {
  id: string;
  name: string;
  hint: string;
  icon: LucideIcon;
};

export const OCCASIONS: Occasion[] = [
  { id: "weddings", name: "Weddings", hint: "Muhoortham & wedding day", icon: HeartHandshake },
  { id: "bridal-events", name: "Bridal Events", hint: "Bride's special moments", icon: Crown },
  { id: "receptions", name: "Receptions", hint: "Graceful evening drapes", icon: Wine },
  { id: "festivals", name: "Festivals", hint: "Bathukamma, Sankranti & more", icon: Flame },
  { id: "family-functions", name: "Family Functions", hint: "Ceremonies & gatherings", icon: Users },
  { id: "parties", name: "Parties", hint: "Quick, fuss-free draping", icon: Sparkles },
  { id: "traditional-events", name: "Traditional Events", hint: "Poojas & customs", icon: Flower2 },
  { id: "special-occasions", name: "Special Occasions", hint: "Any day worth dressing up", icon: CalendarHeart },
];
