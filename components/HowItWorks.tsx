const steps = [
  { n: "01", title: "Discover", desc: "We listen — to schools, students, partners, and communities — to find real engagement gaps." },
  { n: "02", title: "Design", desc: "We build tools and curricula in plain language, locally relevant and youth-tested." },
  { n: "03", title: "Deliver", desc: "We run workshops, ship kits, and seed digital content where young people already are." },
  { n: "04", title: "Demonstrate", desc: "We measure participation, learning, and youth-led action — and share what we learn." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section-pad bg-forest-50">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">How It Works</p>
          <h2 className="h-display text-forest-900">
            A four-step <span className="italic font-serif text-forest-600">engagement model.</span>
          </h2>
        </div>

        <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <li key={s.n} className="relative p-7 rounded-2xl bg-white border border-forest-100 hover:border-forest-300 transition">
              <div className="text-5xl font-bold text-forest-200">{s.n}</div>
              <h3 className="mt-3 font-bold text-xl text-forest-900">{s.title}</h3>
              <p className="mt-2 text-ink/65 text-sm leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
