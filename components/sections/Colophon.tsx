import { Wordmark } from "@/components/primitives/Wordmark";
import { cn } from "@/lib/utils";

export function Colophon({ className }: { className?: string }) {
  return (
    <footer className={cn("border-t border-ink-rule pt-10", className)}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-10">
        <div className="md:col-span-4 flex items-start">
          <Wordmark size={22} />
        </div>

        <div className="md:col-span-5 font-mono text-[12px] tnum leading-[1.7] text-ink-muted">
          <div>Corner Software Pvt. Ltd. · 2024–2026</div>
          <div>Built by the Modlio engineering team.</div>
          <div>Set in Inter and JetBrains Mono.</div>
          <div className="text-ink-faint">Version 2.0 · May 2026.</div>
        </div>

        <div className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint flex flex-col gap-2 md:items-end">
          <a
            href="https://corsw.in"
            className="hover:text-accent transition-colors"
          >
            <span className="link-draw">CORSW.IN</span> &nbsp;&rarr;
          </a>
          <a
            href="https://scenestudio.corsw.in"
            className="hover:text-accent transition-colors"
          >
            <span className="link-draw">SCENESTUDIO.CORSW.IN</span> &nbsp;&rarr;
          </a>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <span
          aria-label="Modlio signature mark"
          className="inline-block size-2 bg-accent"
        />
      </div>
    </footer>
  );
}
