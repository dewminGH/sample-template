import { LucideIcon } from "lucide-react";
import { ComponentType } from "react";

export type SectionId = "home" | "about" | "menu" | "visit" | "reviews" | "contact" | "template";

export type NavLink = { href: string; label: string };

export type Fact = { value: string; label: string };

export type Highlight = { Icon: LucideIcon; title: string; description: string };

export type MenuItem = { name: string; description?: string; price: number };

export type MenuCategory = { Icon: LucideIcon; title: string; note: string; items: MenuItem[] };

export type OpeningHours = { days: string; hours: string };

export type Review = { quote: string; name: string; detail: string };

/** Lucide icons and the SVG brand icons both take a className. */
export type ContactLink = {
  Icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export type SocialLink = { Icon: ComponentType<{ className?: string }>; label: string; href: string };

export type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  lede?: string;
  centered?: boolean;
  /** light text, for the dark "Visit" section */
  inverted?: boolean;
  className?: string;
};

export type BrandProps = {
  className?: string;
};
