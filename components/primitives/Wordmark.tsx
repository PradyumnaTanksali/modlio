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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Modlio monogram"
      className={cn("inline-block shrink-0", className)}
    >
      <title>Modlio</title>
      <desc>Three stacked blocks; the top block has an electric-blue inset square.</desc>
      <rect x="0" y="0" width="24" height="24" fill="#0A0B0F" />
      <rect x="4" y="14" width="16" height="6" fill="#E8EAED" />
      <rect x="4" y="6" width="10" height="6" fill="#E8EAED" />
      <rect x="4" y="6" width="6" height="6" fill="#3B82F6" />
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
