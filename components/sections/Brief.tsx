import { SectionRule } from "@/components/primitives/SectionRule";

export function Brief() {
  return (
    <section className="border-b border-ink-rule">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-28 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-10">
          <div className="md:col-span-4">
            <SectionRule ordinal="01" label="THE BRIEF" />
            <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">
              what modlio does
            </div>
          </div>

          <div className="md:col-span-8">
            <p
              className="text-ink font-medium tracking-[-0.02em] leading-[1.18]"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.125rem)" }}
            >
              Modlio is the enterprise division of Corner Software. We build
              long-running, high-stakes systems &mdash; healthcare platforms,
              financial automation, IoT infrastructure &mdash; for organisations
              that need uptime, audits, and decade-scale thinking.
            </p>
            <div className="mt-8 space-y-5 text-[15px] md:text-base leading-[1.65] text-ink-muted max-w-[62ch]">
              <p>
                We do not chase trends. We do not pivot for funding rounds. We
                pick a small number of platforms and we run them for the long
                term. The goal is software that compounds.
              </p>
              <p>
                Modlio takes a small amount of carefully selected client work
                each year. The bar is set by the systems we already operate.
              </p>
            </div>

            <div className="mt-12 border-t border-ink-rule pt-5">
              <pre
                aria-label="Operating uptime statistic"
                className="font-mono tnum text-[12.5px] md:text-[13px] text-accent overflow-x-auto"
              >
                <span className="text-ink-faint">$ </span>
                uptime: <span className="text-ink">18 months</span>
                <span className="text-ink-faint"> · </span>
                <span className="text-ink">0 critical incidents</span>
                <span className="text-ink-faint"> · </span>
                <span className="text-ink">4 systems operating</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
