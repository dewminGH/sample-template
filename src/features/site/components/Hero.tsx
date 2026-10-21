import { ArrowRight, MapPin, Navigation } from "lucide-react";
import Link from "next/link";
import { cx } from "@/lib/cx";
import {
  BUTTON,
  ENTER_DELAY,
  ENTER_FOCUS,
  HERO_EYEBROW,
  HERO_FACTS,
  HERO_LEDE,
  HERO_PRIMARY,
  HERO_SECONDARY,
  HERO_TITLE,
  HERO_TITLE_ACCENT,
  MAPS_HREF,
  SECTION_ID,
} from "../constants";
import { LatteArt } from "./LatteArt";

export function Hero() {
  return (
    <section id={SECTION_ID.HOME} className="relative isolate overflow-clip">
      <div aria-hidden className="absolute -right-48 -top-48 -z-10 size-160 rounded-full bg-crema/25 blur-3xl" />
      <div aria-hidden className="absolute -bottom-40 -left-40 -z-10 size-120 rounded-full bg-sage/15 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-12 sm:px-6 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:pb-28">
        {/* page-load entry on each child, scroll exit on the column */}
        <div className="scroll-fx:fx-hero-drift">
          <p
            className={cx(
              "inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink-2",
              ENTER_FOCUS,
              ENTER_DELAY[0]
            )}
          >
            <MapPin size={14} className="text-accent" />
            {HERO_EYEBROW}
          </p>
          <h1
            className={cx(
              "mt-6 font-display text-[clamp(2.6rem,6vw,4.5rem)] font-medium leading-[1.03] tracking-[-0.02em]",
              ENTER_FOCUS,
              ENTER_DELAY[1]
            )}
          >
            {HERO_TITLE} <em className="text-accent">{HERO_TITLE_ACCENT}</em>
          </h1>
          <p className={cx("mt-6 max-w-lg text-lg leading-relaxed text-ink-2", ENTER_FOCUS, ENTER_DELAY[2])}>{HERO_LEDE}</p>

          <div className={cx("mt-9 flex flex-wrap gap-3", ENTER_FOCUS, ENTER_DELAY[3])}>
            <Link href={`#${SECTION_ID.MENU}`} className={BUTTON.PRIMARY}>
              {HERO_PRIMARY}
              <ArrowRight size={16} />
            </Link>
            <Link href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className={BUTTON.OUTLINE}>
              <Navigation size={15} />
              {HERO_SECONDARY}
            </Link>
          </div>

          <dl className={cx("mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6", ENTER_FOCUS, ENTER_DELAY[4])}>
            {HERO_FACTS.map(({ value, label }) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-3xl font-medium text-ink">{value}</dd>
                <dd className="mt-1 text-xs text-muted">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <LatteArt />
      </div>
    </section>
  );
}
