import { ShieldAlert } from "lucide-react";
import Link from "next/link";
import { DEMO_BANNER_LEAD, DEMO_BANNER_LINK, DEMO_BANNER_OFFER, DEMO_BANNER_TEXT, SECTION_ID } from "../constants";

/** Thin bar above the header: marks the whole page as a FAISCA sample. */
export function DemoBanner() {
  return (
    <div className="bg-espresso-2 text-cream/80">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2.5 px-4 py-2.5 text-center text-xs leading-snug sm:text-[13px]">
        <ShieldAlert size={15} className="shrink-0 text-accent-2" />
        <p>
          <span className="font-semibold text-cream">{DEMO_BANNER_LEAD}</span> · {DEMO_BANNER_OFFER}
          {/* phones: keep it to the offer; the copying notice is in the Details section */}
          <span className="max-lg:hidden"> {DEMO_BANNER_TEXT}</span>{" "}
          <Link href={`#${SECTION_ID.TEMPLATE}`} className="font-semibold text-accent-2 underline underline-offset-2">
            {DEMO_BANNER_LINK}
          </Link>
        </p>
      </div>
    </div>
  );
}
