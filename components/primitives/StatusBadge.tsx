import { cn } from "@/lib/utils";

type Status = "operating" | "in-build" | "in-research";

const STATUS_LABEL: Record<Status, string> = {
  operating: "OPERATING",
  "in-build": "IN BUILD",
  "in-research": "IN RESEARCH",
};

export function StatusBadge({ status, className }: { status: Status; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] uppercase",
        "tracking-[0.12em] text-ink-muted",
        className,
      )}
    >
      <Dot status={status} />
      <span>{STATUS_LABEL[status]}</span>
    </span>
  );
}

function Dot({ status }: { status: Status }) {
  if (status === "operating") {
    return (
      <span
        aria-hidden
        className="inline-block size-1.5 bg-success"
        style={{ boxShadow: "0 0 0 3px rgba(16,185,129,0.18)" }}
      />
    );
  }
  if (status === "in-build") {
    return (
      <span
        aria-hidden
        className="inline-block size-1.5 bg-warning"
        style={{ boxShadow: "0 0 0 3px rgba(245,158,11,0.18)" }}
      />
    );
  }
  return (
    <span
      aria-hidden
      className="inline-block size-1.5 border border-ink-muted"
    />
  );
}
