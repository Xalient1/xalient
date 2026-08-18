export function XalientLogo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const text = tone === "dark" ? "text-primary" : "text-primary-foreground";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 shrink-0"
        fill="none"
      >
        <rect
          x="1.25"
          y="1.25"
          width="29.5"
          height="29.5"
          rx="3"
          className={tone === "dark" ? "stroke-primary" : "stroke-primary-foreground"}
          strokeWidth="1.5"
        />
        <path
          d="M9 9 L23 23"
          className="stroke-accent"
          strokeWidth="2.5"
          strokeLinecap="square"
        />
        <path
          d="M23 9 L9 23"
          className={tone === "dark" ? "stroke-primary" : "stroke-primary-foreground"}
          strokeWidth="2.5"
          strokeLinecap="square"
        />
      </svg>
      <span
        className={`font-display text-xl font-semibold tracking-tight ${text}`}
      >
        Xalient
      </span>
    </span>
  );
}
