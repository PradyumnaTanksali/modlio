import { ArogyamDiagram } from "@/components/primitives/SystemDiagram";
import { DataTable } from "@/components/primitives/DataTable";
import { StatusBadge } from "@/components/primitives/StatusBadge";
import type { Platform } from "@/lib/platforms";

export function PlatformCard({ platform }: { platform: Platform }) {
  if (platform.status === "in-research" && !platform.diagram) {
    return <ReservedPlatform platform={platform} />;
  }

  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10 py-12 md:py-16 border-t border-ink-rule">
      <div className="lg:col-span-7 order-2 lg:order-1">
        <div className="border border-ink-rule bg-bg-card p-5 md:p-7">
          <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-faint">
            <span>SYSTEM DIAGRAM</span>
            <span className="tnum">arogyam.v2</span>
          </div>
          <div className="mt-4">
            {platform.diagram === "arogyam" && <ArogyamDiagram />}
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col">
        <div className="flex items-center justify-between gap-4">
          <div className="font-mono text-[12.5px] tnum">
            <span className="text-accent">{platform.ordinal}</span>
            <span className="mx-2 text-ink-faint">/</span>
            <span className="text-ink uppercase tracking-[0.12em]">
              {platform.name}
            </span>
          </div>
          <StatusBadge status={platform.status} />
        </div>

        {platform.tagline && (
          <h3
            className="mt-5 font-medium text-ink tracking-[-0.02em] leading-[1.18]"
            style={{ fontSize: "clamp(1.375rem, 2.4vw, 1.75rem)" }}
          >
            {platform.tagline}
          </h3>
        )}

        {platform.description && (
          <div className="mt-5 space-y-4 text-[14.5px] md:text-[15px] leading-[1.65] text-ink-muted">
            {platform.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {platform.table && (
          <div className="mt-7">
            <DataTable
              caption={`${platform.name} platform metadata`}
              rows={platform.table}
              labelWidth="9rem"
            />
          </div>
        )}

        {platform.link && (
          <div className="mt-7 flex justify-end">
            <a
              href={platform.link.href}
              className="group inline-flex items-center gap-2 font-mono text-[12px] tnum text-ink-muted hover:text-accent transition-colors"
            >
              <span className="border-b border-ink-rule group-hover:border-accent pb-0.5 transition-colors">
                {platform.link.label}
              </span>
              <span aria-hidden>&rarr;</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

function ReservedPlatform({ platform }: { platform: Platform }) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-10 py-12 md:py-16 border-t border-ink-rule">
      <div className="lg:col-span-7 order-2 lg:order-1">
        <div className="relative border border-dashed border-ink-rule bg-transparent min-h-[180px] flex items-center justify-center">
          <div className="text-center font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
            <div className="text-ink-muted">{platform.reservedNote}</div>
            <div className="mt-2 text-ink-faint">
              no diagram &mdash; nothing built yet
            </div>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent 0 16px, rgba(156,163,175,0.04) 16px 17px)",
            }}
          />
        </div>
      </div>
      <div className="lg:col-span-5 order-1 lg:order-2">
        <div className="flex items-center justify-between gap-4">
          <div className="font-mono text-[12.5px] tnum">
            <span className="text-accent">{platform.ordinal}</span>
            <span className="mx-2 text-ink-faint">/</span>
            <span className="text-ink uppercase tracking-[0.12em]">
              {platform.name}
            </span>
          </div>
          <StatusBadge status={platform.status} />
        </div>
        {platform.description && (
          <div className="mt-5 space-y-4 text-[14.5px] md:text-[15px] leading-[1.65] text-ink-muted">
            {platform.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
