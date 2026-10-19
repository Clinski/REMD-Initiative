import Image from "next/image";

/** Shows a real photo if `src` is given, otherwise a clearly-marked placeholder. */
export default function PhotoSlot({
  src,
  alt,
  label = "Photo coming soon",
  className = "",
  sizes = "(min-width:768px) 33vw, 100vw",
}: {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-forest-100 ${className}`}>
        <Image src={src} alt={alt ?? ""} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden rounded-2xl bg-forest-100 border border-dashed border-forest-300 flex flex-col items-center justify-center gap-2 text-forest-500 ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8" aria-hidden>
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
        <circle cx="9" cy="10" r="1.8" />
        <path d="M21 16l-5-5-8 8" />
      </svg>
      <span className="text-xs font-medium tracking-wide">{label}</span>
    </div>
  );
}
