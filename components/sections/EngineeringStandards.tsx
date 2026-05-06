import { SectionRule } from "@/components/primitives/SectionRule";

type Standard = {
  metric: string;
  value: string;
  notes: string;
};

const STANDARDS: Standard[] = [
  { metric: "UPTIME", value: "99.9%", notes: "SLO across all operating platforms" },
  { metric: "RESPONSE TIME", value: "<300ms", notes: "P95, API reads" },
  { metric: "DEPLOY CADENCE", value: "Daily", notes: "Production-equivalent staging" },
  { metric: "TEST COVERAGE", value: ">80%", notes: "Unit + integration, gated in CI" },
  { metric: "ON-CALL", value: "24×7", notes: "Rotating, alerting < 5 min" },
  { metric: "DATA RESIDENCY", value: "ap-south-1", notes: "Primary; never cross-border" },
  { metric: "ENCRYPTION", value: "AES-256", notes: "Column-level for PII; pgcrypto" },
  { metric: "AUDIT RETENTION", value: "7 years", notes: "Append-only logs, immutable" },
  { metric: "COMPLIANCE", value: "DPDP 2023", notes: "ABDM Sandbox · ISO 27001 in progress" },
  { metric: "INCIDENT RESPONSE", value: "<1 hour", notes: "Acknowledge; <4 hour mitigate" },
];

export function EngineeringStandards() {
  return (
    <section className="border-b border-ink-rule">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-28 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-10">
          <div className="md:col-span-4">
            <SectionRule ordinal="03" label="ENGINEERING STANDARDS" />
            <h2
              className="mt-5 font-medium text-ink tracking-[-0.02em] leading-[1.1]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              The bar.<br />Measurable terms.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-[15px] md:text-base leading-[1.65] text-ink-muted max-w-[60ch]">
              The numbers we hold ourselves to, on the systems we currently
              operate. Not aspirations &mdash; instrumented, alerted, and
              measured against an SLO.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 border-t border-b border-ink-rule">
          <table className="w-full font-mono tnum text-[12.5px] md:text-[13px]">
            <caption className="sr-only">
              Modlio engineering standards
            </caption>
            <thead>
              <tr className="border-b border-ink-rule">
                <th
                  scope="col"
                  className="text-left font-normal uppercase tracking-[0.14em] text-ink-faint py-3 pr-6 text-[10.5px]"
                  style={{ width: "30%" }}
                >
                  Metric
                </th>
                <th
                  scope="col"
                  className="text-left font-normal uppercase tracking-[0.14em] text-ink-faint py-3 pr-6 text-[10.5px]"
                  style={{ width: "20%" }}
                >
                  Value
                </th>
                <th
                  scope="col"
                  className="text-left font-normal uppercase tracking-[0.14em] text-ink-faint py-3 text-[10.5px]"
                >
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {STANDARDS.map((s) => (
                <tr
                  key={s.metric}
                  className="border-b border-ink-rule last:border-b-0"
                >
                  <th
                    scope="row"
                    className="text-left font-normal uppercase tracking-[0.10em] text-ink-muted py-3 pr-6"
                  >
                    {s.metric}
                  </th>
                  <td className="py-3 pr-6 text-ink">{s.value}</td>
                  <td className="py-3 text-ink-muted">{s.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-[12.5px] md:text-[13px] leading-[1.6] text-ink-faint italic max-w-[68ch]">
          These are operating numbers, not aspirations. Where a metric is in
          flight, we list it as &lsquo;in progress.&rsquo; Where it&rsquo;s not
          measured, we don&rsquo;t list it.
        </p>
      </div>
    </section>
  );
}
