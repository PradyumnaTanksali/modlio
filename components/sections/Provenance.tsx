import { SectionRule } from "@/components/primitives/SectionRule";
import { DataTable } from "@/components/primitives/DataTable";

export function Provenance() {
  return (
    <section className="border-b border-ink-rule">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-28 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-10">
          <div className="md:col-span-4">
            <SectionRule ordinal="05" label="PROVENANCE" />
            <h2
              className="mt-5 font-medium text-ink tracking-[-0.02em] leading-[1.1]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Who runs<br />Modlio.
            </h2>
          </div>
          <div className="md:col-span-8" />
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
          <div className="lg:col-span-6">
            <DataTable
              caption="Modlio provenance"
              labelWidth="9rem"
              rows={[
                {
                  label: "PARENT",
                  value: (
                    <a
                      href="https://corsw.in"
                      className="border-b border-ink-rule hover:border-accent hover:text-accent transition-colors"
                    >
                      Corner Software (corsw.in)
                    </a>
                  ),
                },
                { label: "DIVISION", value: "I of II" },
                {
                  label: "SIBLING",
                  value: (
                    <span>
                      <a
                        href="https://scenestudio.corsw.in"
                        className="border-b border-ink-rule hover:border-accent hover:text-accent transition-colors"
                      >
                        Scene (scenestudio.corsw.in)
                      </a>
                      <span className="text-ink-faint"> — indie product studio</span>
                    </span>
                  ),
                },
                { label: "FOUNDED", value: "2025" },
                { label: "LOCATIONS", value: "Hyderabad · Pune · Solapur" },
              ]}
            />
          </div>

          <div className="lg:col-span-6 space-y-5 text-[15px] md:text-base leading-[1.65] text-ink-muted max-w-[58ch]">
            <p>
              Modlio is operated by a small engineering team distributed across
              three Indian cities. The team is intentionally small. We do not
              subcontract. Every line of code shipped under the Modlio name is
              written by the team.
            </p>
            <p>
              Modlio is wholly owned by Corner Software Pvt. Ltd. We have no
              investors and we are not raising. We grow by retained earnings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
