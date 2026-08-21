const steps = [
  { n: "01", title: "Discover", desc: "We listen — to schools, students, partners, and communities — to find real engagement gaps." },
  { n: "02", title: "Design", desc: "We build tools and curricula in plain language, locally relevant and youth-tested." },
  { n: "03", title: "Deliver", desc: "We run workshops, ship kits, and seed digital content where young people already are." },
  { n: "04", title: "Demonstrate", desc: "We measure participation, learning, and youth-led action — and share what we learn." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section-pad">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow mb-4">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-earth-900">A four-step engagement model.</h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative p-6 rounded-2xl bg-white border border-leaf-100">
              <div className="text-5xl font-bold text-leaf-200">{s.n}</div>
              <h3 className="mt-3 font-bold text-xl text-earth-900">{s.title}</h3>
              <p className="mt-2 text-earth-800/70 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
