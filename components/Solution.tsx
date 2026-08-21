const items = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
    title: "Interactive Tools",
    desc: "Crosswords, word searches, quizzes, and activity cards that turn curiosity into a lasting habit.",

  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" />
      </svg>
    ),
    title: "School Workshops",
    desc: "Facilitated sessions that bring sustainability into the classroom with practical learning.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <rect x="6" y="2" width="12" height="20" rx="2" /><circle cx="12" cy="18" r="0.8" fill="currentColor" />
      </svg>
    ),
    title: "Digital Content",
    desc: "Social campaigns and online learning that reaches youth where they already are.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M3 7l9-4 9 4-9 4-9-4z" /><path d="M3 7v10l9 4 9-4V7" /><path d="M12 11v10" />
      </svg>
    ),
    title: "Classroom Kits",
    desc: "Creative materials for educators with limited budget and prep time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 2v6M12 22v-4M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5" /><circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: "Youth Led Action",
    desc: "Student driven environmental challenges that turn learning into real behaviour.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="section-pad bg-sand-50">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Our Solution</p>
          <h2 className="h-display text-forest-900">
            Learning that feels like <span className="italic font-serif text-forest-600">play.</span>
          </h2>
          <p className="mt-5 text-lg text-ink/70">
            Five interconnected channels that simplify sustainability. Built to be fun, scalable,
            and locally adaptable.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s) => (
            <div key={s.title} className="p-7 rounded-2xl bg-white border border-forest-100 hover:border-forest-300 hover:shadow-xl hover:shadow-forest-700/5 transition">
              <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center mb-5">
                {s.icon}
              </div>
              <h3 className="font-bold text-lg text-forest-900">{s.title}</h3>
              <p className="mt-2 text-ink/65 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
