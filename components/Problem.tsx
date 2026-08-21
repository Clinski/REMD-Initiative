const points = [
  "Low engagement with traditional environmental topics",
  "Limited access to creative sustainability learning materials",
  "A persistent gap between awareness and behaviour",
  "Few interactive, locally relevant educational tools",
];

export default function Problem() {
  return (
    <section className="section-pad bg-forest-50">
      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-700 text-white text-[10px] font-semibold tracking-[0.2em]">
          THE PROBLEM
        </div>
        <h2 className="mt-5 h-display text-forest-900">
          Awareness <span className="text-forest-500">≠</span> Action.
        </h2>
        <p className="mt-5 text-lg text-ink/70 max-w-3xl">
          Knowing about climate change is not the same as living differently, especially for young
          learners. Sustainability is too often perceived as abstract, happening elsewhere, to
          someone else.
        </p>
        <p className="mt-3 text-forest-700 font-semibold">We close that gap.</p>

        <div className="mt-10 p-7 md:p-9 rounded-3xl bg-forest-800 text-white">
          <p className="eyebrow-light mb-5">Missed Engagement Points</p>
          <ul className="grid md:grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 items-start">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-forest-300 shrink-0" />
                <span className="text-white/85">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
