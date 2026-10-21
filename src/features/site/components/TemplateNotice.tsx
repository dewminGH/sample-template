import { ArrowUpRight, Check, Gift, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { cx } from "@/lib/cx";
import { getCurrentYear } from "@/lib/getCurrentYear";
import {
  BUTTON,
  FAISCA_PRICING_URL,
  FX_STAGGER,
  LEGAL_RIGHTS,
  LEGAL_TEXT,
  LEGAL_TITLE,
  SECTION_ID,
  TEMPLATE_CTA,
  TEMPLATE_EYEBROW,
  TEMPLATE_INCLUDED,
  TEMPLATE_INCLUDED_LABEL,
  TEMPLATE_LEDE,
  TEMPLATE_OWNER,
  TEMPLATE_PRICE,
  TEMPLATE_PRICE_INCLUDES,
  TEMPLATE_PRICE_INCLUDES_LABEL,
  TEMPLATE_TITLE,
  TEMPLATE_TITLE_ACCENT,
} from "../constants";

/** What the Starter package includes, plus the copyright / no-copying notice. */
export async function TemplateNotice() {
  const year = await getCurrentYear();

  return (
    <section id={SECTION_ID.TEMPLATE} className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative isolate grid gap-10 overflow-clip rounded-[2rem] bg-espresso-2 p-7 text-cream scroll-fx:fx-ripple sm:p-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:p-14">
          <div aria-hidden className="absolute -right-24 -top-24 -z-10 size-96 rounded-full bg-accent/25 blur-3xl" />

          <div>
            <p className="inline-flex rounded-full border border-cream/15 bg-cream/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-2">
              {TEMPLATE_EYEBROW}
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,2.9rem)] font-medium leading-[1.08] tracking-[-0.02em]">
              {TEMPLATE_TITLE} <em className="text-crema">{TEMPLATE_TITLE_ACCENT}</em>
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-cream/70">{TEMPLATE_LEDE}</p>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">
              {TEMPLATE_INCLUDED_LABEL}
            </p>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {TEMPLATE_INCLUDED.map((item, i) => (
                <li key={item} className={cx("flex items-center gap-2.5 text-[15px] scroll-fx:fx-steam", FX_STAGGER[i])}>
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
              <p className="font-display text-5xl font-medium">{TEMPLATE_PRICE}</p>
              <p className="relative isolate inline-flex items-center gap-2 rounded-full border border-crema/40 bg-crema/10 px-3.5 py-1.5 text-[13px] text-cream/80 shadow-[0_0_28px_-6px_var(--color-crema)]">
                {/* soft breathing halo behind the badge */}
                <span
                  aria-hidden
                  className="absolute -inset-1 -z-10 rounded-full bg-crema/30 opacity-60 blur-md motion-safe:animate-glow-pulse"
                />
                <Gift size={14} className="shrink-0 text-crema" />
                <span>
                  {TEMPLATE_PRICE_INCLUDES_LABEL} <span className="font-semibold text-crema">{TEMPLATE_PRICE_INCLUDES}</span>
                </span>
              </p>
              {/* hidden until FAISCA_PRICING_URL is set */}
              {FAISCA_PRICING_URL && (
                <Link href={FAISCA_PRICING_URL} target="_blank" rel="noopener noreferrer" className={BUTTON.PRIMARY}>
                  {TEMPLATE_CTA}
                  <ArrowUpRight size={16} />
                </Link>
              )}
            </div>
          </div>

          <div className="self-start rounded-3xl border border-cream/15 bg-cream/5 p-6 scroll-fx:fx-steam sm:p-8">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-2">
              <ShieldAlert size={22} />
            </span>
            <h3 className="mt-5 font-display text-2xl font-medium">{LEGAL_TITLE}</h3>
            {LEGAL_TEXT.map((paragraph, i) => (
              <p key={paragraph} className={cx("mt-3 text-[15px] leading-relaxed", i === 0 ? "text-cream/70" : "text-cream")}>
                {paragraph}
              </p>
            ))}
            <p className="mt-6 border-t border-cream/10 pt-4 text-sm font-semibold text-cream/80">
              &copy; {year} {TEMPLATE_OWNER}. {LEGAL_RIGHTS}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
