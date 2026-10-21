"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cx } from "@/lib/cx";
import { BUTTON, MENU_CLOSE_LABEL, MENU_OPEN_LABEL, NAV_CTA, NAV_LINKS, PHONE_HREF } from "../constants";

/** Phone/tablet navigation: a toggle button and a drop-down panel under the header. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={open ? MENU_CLOSE_LABEL : MENU_OPEN_LABEL}
        className="flex size-11 items-center justify-center rounded-full border border-line bg-surface text-ink"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div
        className={cx(
          "absolute inset-x-0 top-full border-b border-line bg-cream px-4 pb-6 pt-2 shadow-[0_24px_40px_-24px_rgba(42,29,20,0.4)] transition duration-200 sm:px-6",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        )}
      >
        <ul className="flex flex-col">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={close}
                className="block border-b border-line py-3.5 font-display text-lg text-ink"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={PHONE_HREF} onClick={close} className={cx(BUTTON.PRIMARY, "mt-5 w-full")}>
          <Phone size={15} />
          {NAV_CTA}
        </Link>
      </div>
    </div>
  );
}
