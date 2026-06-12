import { cn } from "@/lib/utils";

type Props = {
  size?: number;
  showText?: boolean;
  className?: string;
};

export function Monogram({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Modlio monogram"
      className={cn("inline-block shrink-0", className)}
    >
      <title>Modlio</title>
      <desc>Three stacked blocks; the top block has an electric-blue inset square.</desc>
      <rect width="64" height="64" fill="var(--bg)" />
      <rect x="8" y="44" width="48" height="12" fill="var(--ink)" />
      <rect x="8" y="28" width="32" height="12" fill="var(--ink)" />
      <rect x="8" y="12" width="20" height="12" fill="var(--ink)" />
      <rect x="8" y="12" width="12" height="12" fill="var(--accent)" />
    </svg>
  );
}

export function Wordmark({ size = 20, showText = true, className }: Props) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Monogram size={size} />
      {showText && (
        <span
          className="font-medium text-ink leading-none"
          style={{ fontSize: `${size * 0.62}px`, letterSpacing: "0" }}
        >
          MODLIO
        </span>
      )}
    </div>
  );
}
