import { Wordmark } from "@/components/primitives/Wordmark";

export function Masthead() {
  return (
    <section className="relative border-b border-ink-rule">
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-12 min-h-[68vh] md:min-h-[70vh] flex flex-col">
        <div className="relative pt-28 md:pt-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden"
          >
            <div
              className="anim-scan h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, #3b82f6 30%, #3b82f6 70%, transparent 100%)",
                width: "40%",
              }}
            />
          </div>
          <div className="flex items-center justify-between gap-6">
            <div className="font-mono text-[10.5px] md:text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              <span className="text-ink">MODLIO</span>
              <span className="mx-2 text-ink-faint">·</span>
              <span>ENTERPRISE DIVISION</span>
              <span className="mx-2 text-ink-faint">·</span>
              <span>CORNER SOFTWARE</span>
            </div>
            <Wordmark size={20} showText={false} className="md:hidden" />
            <div className="hidden md:flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">
              <span className="size-1.5 bg-success" aria-hidden />
              <span>ALL SYSTEMS OPERATING</span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-end pb-12 md:pb-16">
          <h1
            className="anim-fade-up font-medium text-ink tracking-[-0.025em] leading-[1.0]"
            style={{
              fontSize: "clamp(2.75rem, 7vw, 5rem)",
              animationDelay: "200ms",
            }}
          >
            Modlio builds<br />
            enterprise software<br />
            that doesn&rsquo;t go down.
          </h1>

          <div
            className="anim-fade-up mt-10 md:mt-14 border-t border-ink-rule pt-5"
            style={{ animationDelay: "400ms" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-3 font-mono text-[12px] tnum">
              <SignatureCell label="STATUS" value="OPERATING" valueAccent />
              <SignatureCell label="PARENT" value="CORSW" />
              <SignatureCell label="FOUNDED" value="2025" />
              <SignatureCell label="DIVISION" value="I OF II" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignatureCell({
  label,
  value,
  valueAccent,
}: {
  label: string;
  value: string;
  valueAccent?: boolean;
}) {
  return (
    <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-1.5">
      <span className="text-ink-faint uppercase tracking-[0.14em] text-[10.5px]">
        {label}
      </span>
      <span
        className={
          valueAccent
            ? "text-ink uppercase tracking-[0.08em] inline-flex items-center gap-2"
            : "text-ink uppercase tracking-[0.08em]"
        }
      >
        {valueAccent && (
          <span aria-hidden className="size-1.5 bg-success" />
        )}
        {value}
      </span>
    </div>
  );
}
