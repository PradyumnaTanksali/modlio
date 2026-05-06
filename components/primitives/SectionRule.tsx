import { cn } from "@/lib/utils";

type Props = {
  ordinal?: string;
  label: string;
  className?: string;
};

export function SectionRule({ ordinal, label, className }: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] uppercase",
        "tracking-[0.12em] text-ink-muted",
        className,
      )}
    >
      <span className="text-ink-faint">—</span>
      {ordinal ? (
        <>
          <span className="text-accent tnum">{ordinal}</span>
          <span className="text-ink-faint">—</span>
        </>
      ) : null}
      <span>{label}</span>
    </div>
  );
}
