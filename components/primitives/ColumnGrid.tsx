/**
 * BRIEF §3.4 — the schematic 12-column grid. Hairline dividers
 * (--ink-rule) explicitly drawn between columns, desktop only,
 * at 0.4 opacity. Decorative overlay; ignores pointer events and
 * is hidden from assistive tech.
 */
export function ColumnGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 hidden md:block"
    >
      <div className="mx-auto h-full max-w-[1200px] px-6 md:px-12">
        <div className="grid h-full grid-cols-12" style={{ opacity: 0.4 }}>
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className={i > 0 ? "border-l border-ink-rule" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
