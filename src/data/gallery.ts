/**
 * Gallery content.
 *
 * To use real business photos later:
 *  1. Drop the photo into `src/assets/images/` (or host it anywhere).
 *  2. Replace the `src` / `srcAfter` value below with the imported file or URL.
 *  3. Update `alt` and `caption` to describe the real photo.
 *
 * `kind`:
 *  - "photo"       single image tile
 *  - "before-after" side-by-side comparison tile
 *  - "placeholder" designed slot waiting for a real photo
 *  - "brand"       logo / branding tile
 */

export type GalleryCategory = "pleats" | "before-after" | "occasions" | "space" | "brand";

export type GalleryItem = {
  id: string;
  kind: "photo" | "before-after" | "placeholder" | "brand";
  category: GalleryCategory;
  src?: string;
  srcBefore?: string;
  srcAfter?: string;
  alt: string;
  caption: string;
  tall?: boolean;
};

export const GALLERY_CATEGORIES: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "pleats", label: "Finished Pleats" },
  { id: "before-after", label: "Before & After" },
  { id: "occasions", label: "Occasion Drapes" },
  { id: "space", label: "Our Space" },
  { id: "brand", label: "Brand" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "pleats-red-silk",
    kind: "photo",
    category: "pleats",
    src: "https://images.pexels.com/photos/6276000/pexels-photo-6276000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Close-up of crisp uniform pleats on a red silk saree prepared by pre-pleating",
    caption: "Crisp, uniform pleats on a red silk saree",
    tall: true,
  },
  {
    id: "before-after-gold",
    kind: "before-after",
    category: "before-after",
    srcBefore:
      "https://images.pexels.com/photos/33264441/pexels-photo-33264441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=627&w=1200",
    srcAfter:
      "https://images.pexels.com/photos/4938324/pexels-photo-4938324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Before and after comparison: loose golden saree fabric transformed into neat even pleats",
    caption: "Loose fall, transformed into neat even pleats",
  },
  {
    id: "festival-silks",
    kind: "photo",
    category: "occasions",
    src: "https://images.pexels.com/photos/10317106/pexels-photo-10317106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Stack of colourful Kanchipuram silk sarees ready for festival pleating",
    caption: "Festival silks, folded and ready for their pleats",
  },
  {
    id: "pleats-patterned",
    kind: "photo",
    category: "pleats",
    src: "https://images.pexels.com/photos/4938321/pexels-photo-4938321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Hand-set saree pleats with a clean even fall and patterned border",
    caption: "Hand-set pleats with a clean, even fall",
  },
  {
    id: "drape-finish",
    kind: "photo",
    category: "occasions",
    src: "https://images.pexels.com/photos/35108812/pexels-photo-35108812.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    alt: "Woman wearing a pink saree with neatly arranged pleats, showing a ready-to-drape finish",
    caption: "What ready-to-drape looks like on a special day",
    tall: true,
  },
  {
    id: "our-space",
    kind: "placeholder",
    category: "space",
    alt: "Placeholder for a photo of the home studio entrance in Hanamkonda",
    caption: "Our home studio entrance — photo coming soon",
  },
  {
    id: "brand-logo",
    kind: "brand",
    category: "brand",
    alt: "Jyothi Pre Pleating Sarees logo — circular emblem with a woman in a pink saree",
    caption: "Our mark — Jyothi Pre Pleating Sarees, Hanamkonda",
  },
];
