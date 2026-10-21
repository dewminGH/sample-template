import { Phone } from "lucide-react";
import Link from "next/link";
import { cx } from "@/lib/cx";
import { BUTTON, NAV_CTA, NAV_LINKS, PHONE_HREF, SECTION_ID } from "../constants";
import { Brand } from "./Brand";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/85 backdrop-blur-lg motion-safe:animate-header-in">
      <nav className="relative mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link href={`#${SECTION_ID.HOME}`} className="text-ink">
          <Brand />
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium text-ink-2 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="transition hover:text-accent">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link href={PHONE_HREF} className={cx(BUTTON.PRIMARY, "px-5 py-2.5 max-sm:hidden")}>
            <Phone size={15} />
            {NAV_CTA}
          </Link>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
