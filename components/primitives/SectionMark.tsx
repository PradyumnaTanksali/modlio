import { Monogram } from "@/components/primitives/Wordmark";
import { cn } from "@/lib/utils";

/**
 * BRIEF §6.3 — a small 12px wordmark at the top of every section divider.
 * Sits centered on the section's top hairline, masked with the page
 * background so the rule reads as interrupted, like a label on a
 * schematic drawing. Decorative; hidden from assistive tech.
 */
export function SectionMark({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
        "flex h-3 items-center gap-1.5 bg-bg px-3",
        className,
      )}
    >
      <Monogram size={12} />
      <span
        className="font-medium leading-none text-ink-faint"
        style={{ fontSize: "9px", letterSpacing: "0" }}
      >
        MODLIO
      </span>
    </div>
  );
}
