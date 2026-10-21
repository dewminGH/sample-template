import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cx } from "@/lib/cx";
import {
  FX_STAGGER,
  CONTACT_EYEBROW,
  CONTACT_LEDE,
  CONTACT_LINKS,
  CONTACT_TITLE,
  CONTACT_TITLE_ACCENT,
  SECTION_ID,
} from "../constants";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id={SECTION_ID.CONTACT} className="border-t border-line bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={CONTACT_EYEBROW} title={CONTACT_TITLE} accent={CONTACT_TITLE_ACCENT} lede={CONTACT_LEDE} />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACT_LINKS.map(({ Icon, label, value, href, external }, i) => (
            <li key={label} className={cx("scroll-fx:fx-steam", FX_STAGGER[i % 3])}>
              <Link
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-cream p-5 transition hover:-translate-y-0.5 hover:border-accent/40"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-espresso text-crema transition group-hover:bg-accent group-hover:text-on-accent">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted">{label}</span>
                  <span className="mt-0.5 block truncate font-semibold text-ink">{value}</span>
                </span>
                <ArrowUpRight size={18} className="shrink-0 text-muted transition group-hover:text-accent" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
