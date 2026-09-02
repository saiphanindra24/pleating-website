/**
 * Single source of truth for all business details.
 * Update the values here and the whole website stays consistent.
 */

export const BUSINESS_NAME = "Jyothi Pre Pleating Sarees";
export const TAGLINE = "Perfect Pleats. Beautiful You.";

/** Phone number exactly as printed on the Google Business Profile. */
export const PHONE_RAW = "9603732027";
/** Friendly display format used on buttons and text. */
export const PHONE_DISPLAY = "96037 32027";
/** tel: link target. */
export const PHONE_TEL = "tel:+919603732027";

/** WhatsApp number in international format (no +, no spaces). */
export const WHATSAPP_NUMBER = "919603732027";
/** Base WhatsApp chat link. */
export const WHATSAPP_URL = "https://wa.me/919603732027";
/** Default pre-filled enquiry message. */
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi, I would like to enquire about saree pre-pleating in Hanamkonda.";

/** WhatsApp link with an optional pre-filled message. */
export const whatsappLink = (message: string = WHATSAPP_DEFAULT_MESSAGE): string =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;

export const LOCATION_CITY = "Hanamkonda";
export const LOCATION_REGION = "Telangana";
export const LOCATION_FULL = "Hanamkonda, Telangana";

/**
 * Google Maps place URL for the "Get Directions" button.
 * Leave empty until the exact Google Maps location is available —
 * the button then falls back to a Google Maps search for the business.
 * Example value once available: "https://g.page/xxxxx" or a maps.app.goo.gl link.
 */
export const GOOGLE_MAPS_URL = "";

/** Directions link: exact map URL when set, otherwise a Maps search. */
export const getDirectionsUrl = (): string =>
  GOOGLE_MAPS_URL ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${BUSINESS_NAME}, ${LOCATION_CITY}`,
  )}`;

/** Service reminders shown in several places (never claim pickup/delivery). */
export const VISIT_NOTE =
  "Please bring your saree to our location. Pickup and delivery are not available.";
export const HOME_BASED_NOTE = "Home-based service — customers need to visit our location.";
export const CALL_BEFORE_VISITING =
  "Please contact us in advance to check availability and appointment timing.";
