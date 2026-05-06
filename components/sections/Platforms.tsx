import { SectionRule } from "@/components/primitives/SectionRule";
import { PlatformCard } from "@/components/primitives/PlatformCard";
import { platforms } from "@/lib/platforms";

export function Platforms() {
  return (
    <section className="border-b border-ink-rule">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-28 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-10">
          <div className="md:col-span-4">
            <SectionRule label="PLATFORMS" />
            <h2
              className="mt-5 font-medium text-ink tracking-[-0.02em] leading-[1.1]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              The products.<br />
              In detail.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-[15px] md:text-base leading-[1.65] text-ink-muted max-w-[60ch]">
              Modlio operates one platform today and is researching a second.
              We ship one product fully before starting the next. The schematic
              for each platform is the architecture as it actually runs.
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-14">
          {platforms.map((p) => (
            <PlatformCard key={p.ordinal} platform={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
