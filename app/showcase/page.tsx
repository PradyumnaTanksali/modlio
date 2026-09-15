import type { Metadata } from "next";
import { Platforms } from "@/components/sections/Platforms";
import { DEMO_EMAIL } from "@/lib/platforms";

export const metadata: Metadata = {
  title: "Modlio · Three platforms in service",
  description:
    "Arogyam for healthcare practices, StreamLine for manufacturing floors, Ordio for café counters.",
  alternates: { canonical: "/showcase" },
  // Thin duplicate of the homepage platforms section: out of the index, links still followed.
  robots: { index: false, follow: true },
};

/**
 * The screen every unassigned subdomain of corsw.in lands on. Shorter than the
 * homepage and pointed at one question — what does Modlio run, and can I see
 * it? Platform copy and schematics are the same ones the homepage uses; nothing
 * here is written twice.
 */
export default function ShowcasePage() {
  return (
    <main className="bg-bg text-ink">
      <header className="border-b border-ink-rule">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-28">
          <p className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-accent">
            Modlio · Corner Software
          </p>
          <h1
            className="mt-6 max-w-[18ch] font-medium tracking-[-0.025em] leading-[1.05] text-ink"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            Three platforms.<br />
            <span className="text-ink-muted">All of them in service.</span>
          </h1>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={`mailto:${DEMO_EMAIL}?subject=${encodeURIComponent("Demo request")}`}
              className="inline-flex items-center gap-3 border border-accent px-5 py-3 font-mono text-[12.5px] tnum text-accent transition-colors hover:bg-accent hover:text-bg"
            >
              Ask for a demo <span aria-hidden>&rarr;</span>
            </a>
            <a
              href="https://modlio.corsw.in"
              className="inline-flex items-center gap-2 font-mono text-[12.5px] tnum text-ink-muted transition-colors hover:text-ink"
            >
              <span className="border-b border-ink-rule pb-0.5">
                The engineering detail
              </span>
              <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </div>
      </header>

      <Platforms />

      <section className="border-b border-ink-rule">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-28 text-center">
          <h2
            className="font-medium tracking-[-0.025em] leading-[1.05] text-ink"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
          >
            See one running.
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-[14px] md:text-[15px] leading-[1.65] text-ink-muted">
            We will walk you through a live tenant — the operator&apos;s screens, not slides. Name
            the platform in the subject line.
          </p>
          <a
            href={`mailto:${DEMO_EMAIL}?subject=${encodeURIComponent("Demo request")}`}
            className="link-draw mt-8 inline-block font-mono tnum text-[14px] md:text-[15px] text-ink transition-colors hover:text-accent"
          >
            {DEMO_EMAIL}
          </a>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-6 md:px-12 py-8">
        <a
          href="https://corsw.in"
          className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-ink-faint transition-colors hover:text-ink-muted"
        >
          Corner Software
        </a>
        <p className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-ink-faint">
          modlio.corsw.in
        </p>
      </footer>
    </main>
  );
}
