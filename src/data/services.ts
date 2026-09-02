import { Crown, Flower2, HeartHandshake, Layers, PartyPopper } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Pre-filled WhatsApp enquiry message for this service. */
  message: string;
};

export const SERVICES: Service[] = [
  {
    id: "saree-pre-pleating",
    title: "Saree Pre-Pleating",
    description: "Neatly pre-pleated sarees that make draping quicker and easier.",
    icon: Layers,
    message: "Hi, I would like to enquire about saree pre-pleating in Hanamkonda.",
  },
  {
    id: "bridal-saree-pre-pleating",
    title: "Bridal Saree Pre-Pleating",
    description: "Beautifully prepared pleats for brides and important wedding occasions.",
    icon: Crown,
    message: "Hi, I would like to enquire about bridal saree pre-pleating in Hanamkonda.",
  },
  {
    id: "wedding-saree-pleating",
    title: "Wedding Saree Pleating",
    description: "Get your saree ready before the wedding or family function.",
    icon: HeartHandshake,
    message: "Hi, I would like to enquire about wedding saree pleating in Hanamkonda.",
  },
  {
    id: "party-function-pleating",
    title: "Party & Function Pleating",
    description: "Perfect for parties, receptions, family functions and celebrations.",
    icon: PartyPopper,
    message: "Hi, I would like to enquire about party and function saree pleating in Hanamkonda.",
  },
  {
    id: "festival-saree-pleating",
    title: "Festival Saree Pleating",
    description: "Get your saree prepared neatly for festivals and traditional occasions.",
    icon: Flower2,
    message: "Hi, I would like to enquire about festival saree pleating in Hanamkonda.",
  },
];
