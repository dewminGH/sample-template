import { Coffee } from "lucide-react";
import { cx } from "@/lib/cx";
import { SITE_NAME } from "../constants";
import { BrandProps } from "../type";

export function Brand({ className }: BrandProps) {
  return (
    <span className={cx("inline-flex items-center gap-2.5", className)}>
      <span className="flex size-9 items-center justify-center rounded-full bg-accent text-on-accent">
        <Coffee size={17} />
      </span>
      <span className="font-display text-xl font-medium tracking-tight">{SITE_NAME}</span>
    </span>
  );
}
