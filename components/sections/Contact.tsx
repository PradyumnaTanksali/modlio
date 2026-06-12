import { Colophon } from "@/components/sections/Colophon";
import { SectionRule } from "@/components/primitives/SectionRule";

const ENTRIES = [
  { label: "For platform inquiries, write to:", email: "platforms@modlio.in" },
  { label: "For engineering inquiries:", email: "engineering@modlio.in" },
  { label: "For press or partnership:", email: "hello@modlio.in" },
];

export function Contact() {
  return (
    <section className="border-b border-ink-rule">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-28 md:py-36">
        <div className="flex flex-col items-center text-center">
          <SectionRule ordinal="06" label="CONTACT" />
          <h2
            className="mt-6 font-medium text-ink tracking-[-0.025em] leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
          >
            No form.<br />
            <span className="text-ink-muted">Plain email only.</span>
          </h2>

          <ul className="mt-12 md:mt-16 w-full max-w-[640px] divide-y divide-ink-rule border-t border-b border-ink-rule">
            {ENTRIES.map((e) => (
              <li
                key={e.email}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-6 py-4 md:py-5 text-left"
              >
                <span className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-ink-faint">
                  {e.label}
                </span>
                <a
                  href={`mailto:${e.email}`}
                  className="font-mono tnum text-[14px] md:text-[15px] text-ink hover:text-accent transition-colors border-b border-transparent hover:border-accent inline-block"
                >
                  {e.email}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-12 max-w-[58ch] space-y-3 text-[14px] md:text-[15px] leading-[1.65] text-ink-muted">
            <p>We respond within 48 hours on business days.</p>
            <p>We do not take unsolicited proposals.</p>
            <p>We do not run sales calls.</p>
          </div>

          <p className="mt-10 max-w-[60ch] font-mono text-[12.5px] tnum text-accent">
            The first call is technical. 30 minutes. No deck.
          </p>
        </div>

        <Colophon className="mt-28 md:mt-36" />
      </div>
    </section>
  );
}
