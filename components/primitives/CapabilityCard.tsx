type Props = {
  ordinal: string;
  title: string;
  body: string;
  tags: string[];
};

export function CapabilityCard({ ordinal, title, body, tags }: Props) {
  return (
    <article className="group relative border border-ink-rule bg-bg-card p-6 md:p-7 flex flex-col h-full transition-colors hover:border-accent/60">
      <div className="flex items-center justify-between font-mono text-[11px] tnum">
        <span className="text-accent">{ordinal}.</span>
        <span className="text-ink-faint uppercase tracking-[0.12em]">cap</span>
      </div>

      <h3 className="mt-6 text-[17px] md:text-[18px] font-medium tracking-[-0.01em] text-ink leading-[1.25]">
        {title}
      </h3>

      <p className="mt-3 text-[14px] leading-[1.6] text-ink-muted flex-1">
        {body}
      </p>

      <div className="mt-6 pt-4 border-t border-ink-rule flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] tnum text-ink-faint">
        {tags.map((t) => (
          <span key={t}>· {t}</span>
        ))}
      </div>
    </article>
  );
}
