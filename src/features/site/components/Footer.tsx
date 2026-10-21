import Link from "next/link";
import { getCurrentYear } from "@/lib/getCurrentYear";
import { FOOTER_FICTIONAL, FOOTER_TAGLINE, FOOTER_TEMPLATE, NAV_LINKS, SITE_NAME, SOCIAL_LINKS } from "../constants";
import { Brand } from "./Brand";

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Brand />
            <p className="mt-3 max-w-xs text-sm text-ink-2">{FOOTER_TAGLINE}</p>
          </div>

          <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-ink-2">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="transition hover:text-accent">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex gap-2">
            {SOCIAL_LINKS.map(({ Icon, label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-line text-ink-2 transition hover:border-accent hover:text-accent"
                >
                  <Icon className="size-4" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            &copy; {year} {SITE_NAME} {FOOTER_FICTIONAL}
          </p>
          <p>{FOOTER_TEMPLATE}</p>
        </div>
      </div>
    </footer>
  );
}
