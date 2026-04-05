type PlaceholderImageProps = {
  label: string;
  caption?: string;
  className?: string;
};

/** Fixed aspect ratio frame; swap for next/image when screenshots are ready. */
export function PlaceholderImage({ label, caption, className = "" }: PlaceholderImageProps) {
  return (
    <figure className={`overflow-hidden rounded-xl border border-border bg-surface ${className}`}>
      <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 px-6 text-center">
        <span className="text-xs font-medium uppercase tracking-wider text-muted">占位</span>
        <span className="text-sm text-secondary">{label}</span>
        {caption ? <span className="max-w-xs text-xs text-muted">{caption}</span> : null}
      </div>
    </figure>
  );
}
