import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import Link from "next/link";
import {
  ADDRESS_LABEL,
  ADDRESS_LINES,
  BUTTON,
  HOURS,
  HOURS_LABEL,
  MAPS_HREF,
  NAV_CTA,
  PHONE_HREF,
  SECTION_ID,
  SITE_NAME,
  VISIT_DIRECTIONS,
  VISIT_EYEBROW,
  VISIT_LEDE,
  VISIT_TITLE,
  VISIT_TITLE_ACCENT,
} from "../constants";
import { SectionHeading } from "./SectionHeading";

export function Visit() {
  return (
    <section id={SECTION_ID.VISIT} className="bg-espresso py-20 text-cream md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={VISIT_EYEBROW}
            title={VISIT_TITLE}
            accent={VISIT_TITLE_ACCENT}
            lede={VISIT_LEDE}
            inverted
          />

          <div className="mt-10 grid gap-8 scroll-fx:fx-steam sm:grid-cols-[auto_1fr] sm:gap-12">
            <div>
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cream/60">
                <MapPin size={14} className="text-crema" />
                {ADDRESS_LABEL}
              </h3>
              <address className="mt-3 not-italic leading-relaxed">
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cream/60">
                <Clock size={14} className="text-crema" />
                {HOURS_LABEL}
              </h3>
              <dl className="mt-3 flex flex-col gap-2">
                {HOURS.map(({ days, hours }) => (
                  <div key={days} className="flex justify-between gap-6 border-b border-cream/10 pb-2">
                    <dt className="text-cream/75">{days}</dt>
                    <dd className="tabular-nums">{hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className={BUTTON.PRIMARY}>
              <Navigation size={15} />
              {VISIT_DIRECTIONS}
            </Link>
            <Link href={PHONE_HREF} className={BUTTON.INVERTED}>
              <Phone size={15} />
              {NAV_CTA}
            </Link>
          </div>
        </div>

        {/* stylised map — decorative, the real link is the directions button */}
        <div aria-hidden className="bg-map relative min-h-80 overflow-clip rounded-[2rem] border border-cream/10 scroll-fx:fx-unfold">
          <span className="absolute -left-10 top-[12%] h-40 w-56 rotate-12 rounded-[40%] bg-sage/45" />
          <span className="absolute -bottom-12 right-[8%] h-36 w-48 -rotate-6 rounded-[45%] bg-sage/35" />
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center [--fx-stagger:20%] scroll-fx:fx-drop">
            <span className="whitespace-nowrap rounded-full bg-espresso-2 px-4 py-2 font-display text-sm text-cream shadow-[0_12px_24px_-12px_rgba(34,21,12,0.8)]">
              {SITE_NAME}
            </span>
            <span className="relative mt-2 flex size-12 items-center justify-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent/40" />
              <span className="relative flex size-10 items-center justify-center rounded-full bg-accent text-on-accent shadow-[0_10px_20px_-8px_var(--color-accent)]">
                <MapPin size={18} />
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
