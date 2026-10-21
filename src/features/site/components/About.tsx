import { cx } from "@/lib/cx";
import {
  ABOUT_EYEBROW,
  ABOUT_PARAGRAPHS,
  ABOUT_TITLE,
  ABOUT_TITLE_ACCENT,
  FX_STAGGER,
  HIGHLIGHTS,
  SECTION_ID,
} from "../constants";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id={SECTION_ID.ABOUT} className="border-y border-line bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <SectionHeading eyebrow={ABOUT_EYEBROW} title={ABOUT_TITLE} accent={ABOUT_TITLE_ACCENT} />
          <div className="flex flex-col gap-4 text-[17px] leading-relaxed text-ink-2 lg:pt-9">
            {ABOUT_PARAGRAPHS.map((paragraph, i) => (
              <p key={paragraph} className={cx("scroll-fx:fx-steam", FX_STAGGER[i])}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {HIGHLIGHTS.map(({ Icon, title, description }, i) => (
            <li key={title} className={cx("rounded-3xl border border-line bg-cream p-7 scroll-fx:fx-steam", FX_STAGGER[i])}>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent scroll-fx:fx-drop">
                <Icon size={22} />
              </span>
              <h3 className="mt-5 font-display text-xl font-medium">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
