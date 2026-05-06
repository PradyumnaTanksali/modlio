import { SectionRule } from "@/components/primitives/SectionRule";
import { PhaseFlowDiagram } from "@/components/primitives/PhaseFlowDiagram";

export function Methodology() {
  return (
    <section className="border-b border-ink-rule">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-28 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-10">
          <div className="md:col-span-4">
            <SectionRule ordinal="04" label="METHODOLOGY" />
            <h2
              className="mt-5 font-medium text-ink tracking-[-0.02em] leading-[1.1]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              How we work.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-[15px] md:text-base leading-[1.65] text-ink-muted max-w-[60ch]">
              Four phases. Each one ends in something running.
            </p>
          </div>
        </div>

        <div className="mt-14 md:mt-16">
          <PhaseFlowDiagram />
        </div>

        <p className="mt-12 md:mt-16 max-w-[68ch] text-[14px] md:text-[15px] leading-[1.65] text-ink-muted italic">
          Modlio does not run sales cycles. The first conversation is a
          30-minute technical call. If there is no fit, we say so on the call.
        </p>
      </div>
    </section>
  );
}
