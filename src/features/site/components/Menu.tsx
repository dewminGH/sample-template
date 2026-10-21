import { cx } from "@/lib/cx";
import {
  FX_STAGGER,
  MENU,
  MENU_EYEBROW,
  MENU_FOOTNOTE,
  MENU_LEDE,
  MENU_TITLE,
  MENU_TITLE_ACCENT,
  SECTION_ID,
} from "../constants";
import { formatMenuPrice } from "../helpers";
import { SectionHeading } from "./SectionHeading";

export function Menu() {
  return (
    <section id={SECTION_ID.MENU} className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={MENU_EYEBROW} title={MENU_TITLE} accent={MENU_TITLE_ACCENT} lede={MENU_LEDE} centered />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* booklet turn on the wrapper, 3D hover tilt on the card */}
          {MENU.map(({ Icon, title, note, items }, i) => (
            <div key={title} className={cx("perspective-distant scroll-fx:fx-turn", FX_STAGGER[i])}>
              <article className="h-full rounded-3xl border border-line bg-surface p-7 shadow-[0_24px_50px_-40px_rgba(58,36,22,0.5)] transition duration-500 hover:-translate-y-1 hover:rotate-x-4 hover:-rotate-y-4 hover:shadow-[0_40px_60px_-36px_rgba(58,36,22,0.55)]">
                <header className="flex items-center gap-3.5 border-b border-line pb-5">
                  <span className="flex size-11 items-center justify-center rounded-full bg-espresso text-crema">
                    <Icon size={19} />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium">{title}</h3>
                    <p className="text-[13px] text-muted">{note}</p>
                  </div>
                </header>

                <ul className="mt-5 flex flex-col gap-4">
                  {items.map(({ name, description, price }) => (
                    <li key={name}>
                      <div className="flex items-baseline gap-3">
                        <span className="font-semibold text-ink">{name}</span>
                        <span aria-hidden className="flex-1 border-b border-dotted border-ink/25" />
                        <span className="font-semibold tabular-nums text-accent">{formatMenuPrice(price)}</span>
                      </div>
                      {description && <p className="mt-0.5 text-sm text-ink-2">{description}</p>}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">{MENU_FOOTNOTE}</p>
      </div>
    </section>
  );
}
