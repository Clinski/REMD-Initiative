const challenges = [
  { n: "01", title: "Low participation in environmental topics" },
  { n: "02", title: "Limited access to creative sustainability learning materials" },
  { n: "03", title: "Few interactive, locally relevant educational tools" },
  { n: "04", title: "A persistent gap between awareness and behaviour" },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-sand-50">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow text-center mb-5">About the Initiative</p>
        <h2 className="h-display text-center text-forest-900">
          Sustainability that is <span className="italic font-serif text-forest-600">visual, participatory,</span> and relatable.
        </h2>
        <p className="mt-6 text-lg text-ink/70 text-center max-w-3xl mx-auto">
          Education becomes powerful when it moves beyond theory. REMD makes sustainability tangible
          by combining interactive tools, creative resources, and community driven learning, built
          for how young people actually learn.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl border border-forest-200 bg-white p-7 relative">
            <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-forest-700 text-white text-[10px] font-semibold tracking-[0.2em]">OUR VISION</span>
            <p className="mt-2 text-ink/80 leading-relaxed">
              A future where sustainable practices are widely adopted, environmental responsibility
              is embedded in everyday life, and young people lead lasting climate resilience.
            </p>
          </div>

          <ul className="space-y-3">
            {challenges.map((c) => (
              <li key={c.n} className="flex gap-4 p-4 rounded-xl bg-white border border-forest-100">
                <span className="text-forest-500 font-bold text-sm shrink-0 w-8">{c.n}</span>
                <span className="text-ink/85">{c.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
