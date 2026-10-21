import {
  Coffee,
  Croissant,
  Egg,
  Flame,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Recycle,
} from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/icons";
import {
  ContactLink,
  Fact,
  Highlight,
  MenuCategory,
  NavLink,
  OpeningHours,
  Review,
  SectionId,
  SocialLink,
} from "./type";

/* ---------- Site / SEO ---------- */
// A sample build: the business, people, numbers and reviews are all fictional.
// `.example` is a reserved domain, so nothing here points at a real site.
export const SITE_NAME = "Larkspur & Bean";
export const SITE_URL = "https://larkspurandbean.example";
export const SITE_TITLE = "Larkspur & Bean | Specialty Coffee & Brunch in Fitzroy";
export const SITE_DESCRIPTION =
  "Small-batch roasted coffee, all-day brunch and fresh pastries on Larkspur Lane, Fitzroy. Open seven days.";
export const SITE_KEYWORDS = ["Fitzroy cafe", "specialty coffee Melbourne", "brunch Fitzroy", "Larkspur & Bean"];
// Keep the fictional café out of search engines. A real client launch sets
// this to true, which flips both the robots meta tag and robots.txt.
export const SITE_INDEXABLE = false;

/* ---------- Template notice ---------- */
// TODO: set to FAISCA's pricing page once the main site is live — the
// "Get this site" links stay hidden while it's empty.
export const FAISCA_PRICING_URL = "";
export const TEMPLATE_OWNER = "FAISCA";
export const DEMO_BANNER_LEAD = "Sample website by FAISCA";
export const DEMO_BANNER_OFFER = "$150 Starter includes up to 3 pages. This sample shows just the home page.";
export const DEMO_BANNER_TEXT = "Fictional business. Unauthorized copying of this template is prohibited.";
export const DEMO_BANNER_LINK = "Details";
export const TEMPLATE_EYEBROW = "About this sample";
export const TEMPLATE_TITLE = "This is the";
export const TEMPLATE_TITLE_ACCENT = "$150 Starter package.";
export const TEMPLATE_LEDE =
  "Built by FAISCA as a live example of what $150 gets you. The package includes up to 3 pages, for example Home, Menu and Contact. This sample shows the home page only. Larkspur & Bean is a made-up café: your business name, photos, text and links go in its place.";
export const TEMPLATE_INCLUDED_LABEL = "What's included";
export const TEMPLATE_INCLUDED = [
  "Up to 3 pages",
  "Mobile & tablet ready",
  "Scroll animations & 3D entry effects",
  "Contact links & social",
  "Basic SEO setup",
  "Domain, AWS Amplify hosting & SSL for 3 years",
  "A few cosmetic changes, free",
];
export const TEMPLATE_PRICE = "$150";
export const TEMPLATE_PRICE_INCLUDES_LABEL = "Includes";
export const TEMPLATE_PRICE_INCLUDES = "domain, hosting & SSL for 3 years";
export const TEMPLATE_CTA = "Get this site";
export const LEGAL_TITLE = "Unauthorized use prohibited";
export const LEGAL_TEXT = [
  "This template's source code, design, layout, text and graphics are the property of FAISCA and are shown here only as a sample.",
  "Copying, downloading, reusing, modifying, redistributing or reselling any part of this template, in whole or in part, without written permission from FAISCA is prohibited.",
];
export const LEGAL_RIGHTS = "All rights reserved.";

/* ---------- Navigation ---------- */
export const SECTION_ID = {
  HOME: "home",
  ABOUT: "about",
  MENU: "menu",
  VISIT: "visit",
  REVIEWS: "reviews",
  CONTACT: "contact",
  TEMPLATE: "template",
} as const satisfies Record<string, SectionId>;

export const NAV_LINKS: NavLink[] = [
  { href: `#${SECTION_ID.ABOUT}`, label: "About" },
  { href: `#${SECTION_ID.MENU}`, label: "Menu" },
  { href: `#${SECTION_ID.VISIT}`, label: "Visit" },
  { href: `#${SECTION_ID.REVIEWS}`, label: "Reviews" },
  { href: `#${SECTION_ID.CONTACT}`, label: "Contact" },
];
export const NAV_CTA = "Call us";
export const MENU_OPEN_LABEL = "Open menu";
export const MENU_CLOSE_LABEL = "Close menu";

/* ---------- Contact details ---------- */
// 0491 570 156 is in ACMA's range reserved for fiction, so it never rings anyone.
export const PHONE_DISPLAY = "0491 570 156";
export const PHONE_HREF = "tel:+61491570156";
export const EMAIL = "hello@larkspurandbean.example";
export const ADDRESS_LINES = ["18 Larkspur Lane", "Fitzroy VIC 3065"];
export const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINES.join(", "))}`;

export const SOCIAL_LINKS: SocialLink[] = [
  { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/" },
  { Icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/" },
];

/* ---------- Buttons ---------- */
export const BUTTON = {
  PRIMARY:
    "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent shadow-[0_12px_24px_-14px_var(--color-accent)] transition hover:bg-espresso",
  OUTLINE:
    "inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-surface/70 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/40",
  INVERTED:
    "inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 px-6 py-3 text-sm font-semibold text-cream transition hover:border-cream/50",
};

/* ---------- Hero ---------- */
export const HERO_EYEBROW = "Specialty coffee · Fitzroy";
export const HERO_TITLE = "Slow-roasted coffee,";
export const HERO_TITLE_ACCENT = "poured with care.";
export const HERO_LEDE =
  "A small neighbourhood café roasting its own beans, baking every morning and serving brunch until close.";
export const HERO_PRIMARY = "See the menu";
export const HERO_SECONDARY = "Get directions";
export const HERO_FACTS: Fact[] = [
  { value: "7am", label: "Open weekdays" },
  { value: "4.9", label: "From 320+ reviews" },
  { value: "2016", label: "Roasting since" },
];
export const ROAST_LABEL = "Today's roast";
export const ROAST_NAME = "Ethiopia Guji";
export const ROAST_NOTES = "Peach, jasmine, honey";

// Latte art (pure decoration): a three-layer tulip, poured top to bottom,
// positioned inside the coffee circle. Each layer pours in after the cup lands.
export const LATTE_TULIP = [
  "top-[18%] h-[14%] w-[26%] [animation-delay:1.35s]",
  "top-[33%] h-[17%] w-[36%] [animation-delay:1.5s]",
  "top-[51%] h-[21%] w-[48%] [animation-delay:1.65s]",
];
export const LATTE_BEANS = [
  "left-[2%] top-[6%] -rotate-20 [animation-delay:0.9s]",
  "right-[4%] top-[2%] rotate-50 [animation-delay:1.05s]",
  "bottom-[6%] right-[8%] rotate-35 [animation-delay:1.2s]",
];

/* ---------- Motion ---------- */
// Page-load focus pull for the hero text.
export const ENTER_FOCUS = "motion-safe:animate-enter-focus";
// Page-load delays for the hero text, in reading order.
export const ENTER_DELAY = [
  "[animation-delay:100ms]",
  "[animation-delay:220ms]",
  "[animation-delay:360ms]",
  "[animation-delay:480ms]",
  "[animation-delay:600ms]",
];
// Scroll-effect stagger for cards in a row (see `fx-*` in globals.css).
export const FX_STAGGER = [
  "[--fx-stagger:0%]",
  "[--fx-stagger:6%]",
  "[--fx-stagger:12%]",
  "[--fx-stagger:18%]",
  "[--fx-stagger:24%]",
  "[--fx-stagger:30%]",
];

/* ---------- About ---------- */
export const ABOUT_EYEBROW = "Our story";
export const ABOUT_TITLE = "A neighbourhood café that";
export const ABOUT_TITLE_ACCENT = "roasts its own beans.";
export const ABOUT_PARAGRAPHS = [
  "Larkspur & Bean started as a coffee cart outside the Fitzroy markets. Ten years on, we roast small batches on Larkspur Lane every Tuesday and Friday, so the coffee in your cup is never more than a week from the roaster.",
  "The kitchen keeps it simple: seasonal produce from Victorian growers, sourdough from down the street and pastries baked before the doors open.",
];
export const HIGHLIGHTS: Highlight[] = [
  {
    Icon: Leaf,
    title: "Ethically sourced",
    description: "We buy direct from farms in Ethiopia, Colombia and PNG, and pay above fair-trade prices.",
  },
  {
    Icon: Flame,
    title: "Roasted in-house",
    description: "Small batches, roasted twice a week, so every cup is fresh.",
  },
  {
    Icon: Recycle,
    title: "Low waste",
    description: "Compostable cups, a keep-cup discount and coffee grounds for local gardens.",
  },
];

/* ---------- Menu ---------- */
export const MENU_EYEBROW = "The menu";
export const MENU_TITLE = "Simple food,";
export const MENU_TITLE_ACCENT = "serious coffee.";
export const MENU_LEDE = "A taste of what's on. Ask the team about today's specials and single origins.";
export const MENU_FOOTNOTE = "Prices in AUD. Plant milks and extra shots +0.8. Gluten-free bread available.";
export const MENU: MenuCategory[] = [
  {
    Icon: Coffee,
    title: "Coffee",
    note: "House blend or today's single origin",
    items: [
      { name: "Espresso", price: 4 },
      { name: "Flat white", description: "Our most-ordered cup", price: 5 },
      { name: "Batch brew", description: "Filter, refilled all morning", price: 5.5 },
      { name: "Pour-over", description: "Single origin, brewed to order", price: 7 },
      { name: "Iced long black", price: 5.5 },
    ],
  },
  {
    Icon: Egg,
    title: "Brunch",
    note: "Served until 2:30pm",
    items: [
      { name: "Smashed avocado", description: "Sourdough, feta, chilli, lemon", price: 19 },
      { name: "Ricotta hotcakes", description: "Berries, honeycomb butter", price: 21 },
      { name: "The big breakfast", description: "Eggs your way, bacon, mushrooms", price: 24 },
      { name: "Mushroom toastie", description: "Gruyère, thyme, truffle oil", price: 17 },
    ],
  },
  {
    Icon: Croissant,
    title: "Bakery",
    note: "Baked every morning, until sold out",
    items: [
      { name: "Almond croissant", price: 6.5 },
      { name: "Cardamom bun", price: 6 },
      { name: "Banana bread", description: "Toasted, with whipped butter", price: 7 },
      { name: "Seasonal fruit tart", price: 8.5 },
    ],
  },
];

/* ---------- Visit ---------- */
export const VISIT_EYEBROW = "Visit us";
export const VISIT_TITLE = "Find us on";
export const VISIT_TITLE_ACCENT = "Larkspur Lane.";
export const VISIT_LEDE = "Two minutes from Brunswick Street. Dogs welcome in the courtyard.";
export const ADDRESS_LABEL = "Address";
export const HOURS_LABEL = "Opening hours";
export const HOURS: OpeningHours[] = [
  { days: "Monday to Friday", hours: "7:00am – 3:00pm" },
  { days: "Saturday", hours: "8:00am – 3:00pm" },
  { days: "Sunday & public holidays", hours: "8:00am – 2:00pm" },
];
export const VISIT_DIRECTIONS = "Get directions";

/* ---------- Reviews ---------- */
export const REVIEWS_EYEBROW = "Kind words";
export const REVIEWS_TITLE = "Locals keep";
export const REVIEWS_TITLE_ACCENT = "coming back.";
export const REVIEW_STARS = 5;
// Each review rests at a slight angle, like notes dropped on a table;
// it straightens on hover.
export const REVIEW_TILT = ["md:-rotate-2", "md:rotate-1", "md:-rotate-1"];
export const REVIEWS: Review[] = [
  {
    quote: "Best flat white in Fitzroy, and the cardamom buns sell out for a reason. Get there before ten.",
    name: "Hannah L.",
    detail: "Regular since 2019",
  },
  {
    quote: "Friendly team, sunny courtyard and they always remember my order. My favourite place to start a Saturday.",
    name: "Marcus T.",
    detail: "Lives around the corner",
  },
  {
    quote: "They catered our office breakfast for forty people. Everything arrived on time and the coffee was spot on.",
    name: "Priya S.",
    detail: "Catering client",
  },
];

/* ---------- Contact ---------- */
export const CONTACT_EYEBROW = "Say hello";
export const CONTACT_TITLE = "Bookings, catering";
export const CONTACT_TITLE_ACCENT = "or just a chat.";
export const CONTACT_LEDE = "Tap to call, message or email. We usually reply within a few hours.";
export const CONTACT_LINKS: ContactLink[] = [
  { Icon: Phone, label: "Call", value: PHONE_DISPLAY, href: PHONE_HREF },
  { Icon: MessageCircle, label: "WhatsApp", value: "Message us", href: "https://wa.me/61491570156", external: true },
  { Icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { Icon: MapPin, label: "Directions", value: ADDRESS_LINES.join(", "), href: MAPS_HREF, external: true },
  { Icon: InstagramIcon, label: "Instagram", value: "@larkspurandbean", href: "https://www.instagram.com/", external: true },
  { Icon: FacebookIcon, label: "Facebook", value: "Larkspur & Bean", href: "https://www.facebook.com/", external: true },
];

/* ---------- Footer ---------- */
export const FOOTER_TAGLINE = "Specialty coffee and brunch on Larkspur Lane, Fitzroy.";
export const FOOTER_FICTIONAL = "is a fictional café.";
export const FOOTER_TEMPLATE = "Template by FAISCA. Unauthorized copying prohibited.";
