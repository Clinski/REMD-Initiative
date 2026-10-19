const strengths = [
  { title: "Youth First Approach", desc: "Education built around how young people actually learn." },
  { title: "Translation Expertise", desc: "Turning complex topics into simple, interactive tools." },
  { title: "Community Experience", desc: "Proven track record of program coordination on the ground." },
  { title: "Mission Driven", desc: "Real passion for climate, education, and social impact." },
  { title: "Flexible and Scalable", desc: "Models that adapt across schools, cities, and regions." },
];

export default function Strengths() {
  return (
    <section className="section-pad bg-sand-50">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:items-center">
        <div>
          <p className="eyebrow mb-4">Why Partner With Us</p>
          <h2 className="h-display text-forest-900">
            What makes us a <span className="italic font-serif text-forest-600">strong partner.</span>
          </h2>
          <blockquote className="mt-7 p-5 rounded-2xl bg-white border-l-4 border-forest-600 text-ink/80 italic">
            “We turn complex sustainability ideas into tools young people actually want to use.”
          </blockquote>
        </div>

        <ul className="grid gap-3">
          {strengths.map((s) => (
            <li key={s.title} className="flex gap-4 items-center px-5 py-4 rounded-xl bg-white border border-forest-100">
              <span className="w-8 h-8 shrink-0 rounded-lg bg-forest-700 text-white flex items-center justify-center text-sm">✓</span>
              <div>
                <h3 className="font-semibold text-forest-900">{s.title}</h3>
                <p className="text-sm text-ink/65">{s.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
