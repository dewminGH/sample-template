import { Star } from "lucide-react";
import { cx } from "@/lib/cx";
import {
  FX_STAGGER,
  REVIEW_STARS,
  REVIEW_TILT,
  REVIEWS,
  REVIEWS_EYEBROW,
  REVIEWS_TITLE,
  REVIEWS_TITLE_ACCENT,
  SECTION_ID,
} from "../constants";
import { SectionHeading } from "./SectionHeading";

export function Reviews() {
  return (
    <section id={SECTION_ID.REVIEWS} className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={REVIEWS_EYEBROW} title={REVIEWS_TITLE} accent={REVIEWS_TITLE_ACCENT} centered />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map(({ quote, name, detail }, i) => (
            <figure
              key={name}
              className={cx(
                "flex flex-col rounded-3xl border border-line bg-surface p-7 shadow-[0_20px_40px_-30px_rgba(58,36,22,0.45)] transition duration-300 hover:-translate-y-1 hover:rotate-0 scroll-fx:fx-note",
                REVIEW_TILT[i],
                FX_STAGGER[i]
              )}
            >
              <div role="img" aria-label={`${REVIEW_STARS} out of ${REVIEW_STARS} stars`} className="flex gap-1 text-accent-2">
                {Array.from({ length: REVIEW_STARS }, (_, star) => (
                  <Star key={star} size={16} className="fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-display text-lg leading-relaxed text-ink">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <span className="block font-semibold text-ink">{name}</span>
                <span className="block text-sm text-muted">{detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
