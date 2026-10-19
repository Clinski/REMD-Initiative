/**
 * Curved divider between two sections.
 * `fill` is the colour of the section the wave should blend INTO (the cream/tinted one).
 * - Bottom of a dark section:  <Wave fill="#faf7f1" className="absolute bottom-0 inset-x-0" />
 * - Top of a dark section:     <Wave flip fill="#faf7f1" className="absolute top-0 inset-x-0" />
 * - Cream page ending on the footer: <div className="bg-sand-50"><Wave fill="#082018" /></div>
 */
export default function Wave({ fill = "#faf7f1", flip = false, className = "" }: { fill?: string; flip?: boolean; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 40"
      preserveAspectRatio="none"
      className={`block w-full h-5 md:h-10 pointer-events-none ${flip ? "-scale-y-100" : ""} ${className}`}
    >
      {/* Gentle swell: about a third of the hero wave's height */}
      <path d="M0,22 C480,32 960,12 1440,22 L1440,40 L0,40 Z" fill={fill} />
    </svg>
  );
}
