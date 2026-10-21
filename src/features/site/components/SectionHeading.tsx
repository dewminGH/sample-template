import { cx } from "@/lib/cx";
import { SectionHeadingProps } from "../type";

export function SectionHeading({ eyebrow, title, accent, lede, centered, inverted, className }: SectionHeadingProps) {
  return (
    <div className={cx(centered && "mx-auto text-center", "max-w-2xl", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-2 scroll-fx:fx-steam">{eyebrow}</p>
      <h2
        className={cx(
          "mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.08] tracking-[-0.02em] scroll-fx:fx-focus",
          inverted ? "text-cream" : "text-ink"
        )}
      >
        {title} {accent && <em className={inverted ? "text-crema" : "text-accent"}>{accent}</em>}
      </h2>
      {lede && (
        <p
          className={cx(
            "mt-4 text-[17px] leading-relaxed scroll-fx:fx-steam",
            inverted ? "text-cream/70" : "text-ink-2"
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
