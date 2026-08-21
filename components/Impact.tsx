const dimensions = [
  { title: "Awareness", desc: "Reaching students with sustainability content that sticks." },
  { title: "Understanding", desc: "Moving past slogans to real comprehension of the issues." },
  { title: "Participation", desc: "Hands-on engagement instead of passive consumption." },
  { title: "Tools", desc: "Resources educators can pick up and use immediately." },
  { title: "Community", desc: "Local networks of young people taking action together." },
];

export default function Impact() {
  return (
    <section className="section-pad bg-forest-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-dot-grid" style={{ backgroundSize: "22px 22px" }} />
      <div className="relative max-w-6xl mx-auto">
        <p className="eyebrow-light mb-4">Expected Impact</p>
        <h2 className="h-display max-w-3xl">
          What success <span className="italic font-serif text-forest-200">looks like.</span>
        </h2>
        <p className="mt-5 text-white/75 max-w-2xl">
          Measurable change across five dimensions when we collaborate with partners.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {dimensions.map((d, i) => (
            <div key={d.title} className="p-6 rounded-2xl bg-forest-800/60 border border-forest-600 hover:bg-forest-800 transition">
              <div className="w-9 h-9 rounded-lg bg-forest-400/20 text-forest-200 flex items-center justify-center text-sm font-bold mb-4">0{i + 1}</div>
              <h3 className="font-bold">{d.title}</h3>
              <p className="mt-2 text-xs text-white/65 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
