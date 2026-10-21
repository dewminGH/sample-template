import { Bean, Flame } from "lucide-react";
import { cx } from "@/lib/cx";
import { LATTE_BEANS, LATTE_TULIP, ROAST_LABEL, ROAST_NAME, ROAST_NOTES } from "../constants";

/**
 * Hero illustration: a latte seen from above, drawn entirely in CSS.
 * Motion is layered on nested wrappers so the animations don't fight over
 * `transform`: scroll exit (outer) > idle float > page-load landing (inner).
 */
export function LatteArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
      <div aria-hidden className="absolute inset-0 scroll-fx:fx-hero-cup">
        <div className="absolute inset-0 [animation-delay:1.9s] motion-safe:animate-float">
          <div className="absolute inset-0 [animation-delay:0.25s] motion-safe:animate-cup-enter">
            {/* saucer */}
            <div className="absolute inset-[4%] rounded-full bg-radial-[at_35%_30%] from-porcelain to-saucer shadow-[0_50px_80px_-40px_rgba(58,36,22,0.6)]" />
            <div className="absolute inset-[11%] rounded-full border border-saucer" />
            {/* handle sits under the cup */}
            <div className="absolute left-[74%] top-1/2 h-[13%] w-[20%] -translate-y-1/2 rounded-full bg-linear-to-b from-porcelain to-saucer shadow-[0_10px_20px_-10px_rgba(58,36,22,0.5)]" />
            {/* cup */}
            <div className="absolute inset-[17%] rounded-full bg-radial-[at_40%_35%] from-porcelain to-milk shadow-[inset_0_-12px_30px_rgba(58,36,22,0.18),0_24px_40px_-20px_rgba(58,36,22,0.6)]" />
            {/* coffee + tulip, poured in once the cup has landed */}
            <div className="absolute inset-[23%] overflow-clip rounded-full bg-radial from-crema from-5% via-roast via-50% to-espresso shadow-[inset_0_6px_18px_rgba(34,21,12,0.45)]">
              <span className="absolute left-1/2 top-[14%] h-[66%] w-[2.5%] origin-top -translate-x-1/2 rounded-full bg-milk/80 [animation-delay:1.2s] motion-safe:animate-stem" />
              {LATTE_TULIP.map((layer) => (
                <span
                  key={layer}
                  className={cx("absolute left-1/2 -translate-x-1/2 rounded-[50%] bg-milk motion-safe:animate-pour", layer)}
                />
              ))}
            </div>
          </div>
        </div>
        {LATTE_BEANS.map((position) => (
          <Bean
            key={position}
            size={30}
            className={cx("absolute fill-espresso text-espresso-2 motion-safe:animate-bean-drop", position)}
          />
        ))}
      </div>

      <div className="absolute bottom-[2%] left-0 flex items-center gap-3 rounded-2xl border border-line bg-surface/90 p-3.5 pr-5 shadow-[0_20px_40px_-24px_rgba(58,36,22,0.55)] backdrop-blur [animation-delay:1.7s] motion-safe:animate-card-flip sm:left-[4%]">
        <span className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
          <Flame size={18} />
        </span>
        <span>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{ROAST_LABEL}</span>
          <span className="block font-display text-base font-medium text-ink">{ROAST_NAME}</span>
          <span className="block text-xs text-ink-2">{ROAST_NOTES}</span>
        </span>
      </div>
    </div>
  );
}
