export default function Hero() {
  return (
    <section className="relative bg-forest-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-60 bg-dot-grid"
        style={{ backgroundSize: "22px 22px" }}
      />
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-forest-700/50 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-forest-600/30 blur-3xl" />

      <div aria-hidden className="absolute top-16 inset-x-0 overflow-hidden h-9 flex items-center border-y border-white/5 text-forest-300/60 text-[11px] tracking-[0.4em] font-semibold whitespace-nowrap select-none">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((i) => (
            <span key={i} className="pr-8">SUSTAINABILITY  ·  YOUTH  ·  EDUCATION  ·  CREATIVE LEARNING  ·  SUSTAINABILITY  ·  YOUTH  ·  EDUCATION  ·  CREATIVE LEARNING  ·  SUSTAINABILITY  ·  YOUTH  ·  EDUCATION  ·  CREATIVE LEARNING  ·</span>
          ))}
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 pt-44 pb-24 text-center">
        <h1 className="h-display">
          Building Youth Engagement <br className="hidden md:block" />
          Through <span className="italic font-serif text-forest-200">Sustainability</span> &amp;{" "}
          <span className="italic font-serif text-forest-200">Creative Learning</span>
        </h1>
        <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">
          A collaborative initiative translating sustainability education for the next generation.
          Awareness becomes action, classrooms become labs, and young people stay engaged and
          inspired.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="/#partnership" className="px-6 py-3 rounded-full bg-white text-forest-900 font-semibold hover:bg-sand-50 transition shadow-lg shadow-black/20">
            Partner With Us →
          </a>
          <a href="/#about" className="px-6 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition">
            See What We&apos;re About
          </a>
        </div>
      </div>

      <svg className="relative block w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#faf7f1" />
      </svg>
    </section>
  );
}
