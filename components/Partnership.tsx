const tracks = [
  { tag: "Education", title: "Schools and Universities", desc: "Curriculum partnerships, workshop hosts, and youth ambassador programs." },
  { tag: "NGOs", title: "Aligned Missions", desc: "Programs designed with organizations in climate, education, and youth." },
  { tag: "Corporate", title: "Sustainability Brands", desc: "CSR partners that sponsor kits, fellowships, and youth projects." },
  { tag: "Media", title: "Distribution Partners", desc: "Amplify youth voices and creative content across reach channels." },
];

export default function Partnership() {
  return (
    <section id="partnership" className="section-pad bg-forest-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-50 bg-dot-grid" style={{ backgroundSize: "22px 22px" }} />
      <div className="relative max-w-6xl mx-auto">
        <p className="eyebrow-light mb-4">Partnership Opportunities</p>
        <h2 className="h-display max-w-3xl">
          Where we'd love to <span className="italic font-serif text-forest-200">collaborate.</span>
        </h2>
        <p className="mt-5 text-white/70 max-w-2xl">
          We work with organizations, schools, NGOs, and sustainability brands to create programs
          that put young people at the center.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {tracks.map((t) => (
            <div key={t.tag} className="p-6 rounded-2xl bg-forest-800/70 border border-forest-700 hover:border-forest-400 transition">
              <span className="inline-block px-3 py-1 rounded-full bg-forest-700 text-forest-100 text-[10px] font-semibold tracking-[0.2em]">{t.tag.toUpperCase()}</span>
              <h3 className="mt-4 font-bold text-xl">{t.title}</h3>
              <p className="mt-2 text-white/65 text-sm">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 p-6 rounded-2xl border border-forest-700 bg-forest-800/40">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-white text-forest-900 flex items-center justify-center font-bold">R</span>
            <span className="font-semibold tracking-tight text-lg">REMD <span className="italic font-serif text-forest-200">Initiative</span></span>
          </div>
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-forest-400 text-forest-900 font-semibold hover:bg-forest-300 transition">
            Start a Conversation →
          </a>
        </div>
      </div>
    </section>
  );
}
