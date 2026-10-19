export default function GetInvolved() {
  return (
    <section id="involved" className="section-pad bg-sand-50">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow mb-4">Get Involved</p>
        <h2 className="h-display text-forest-900 max-w-3xl">
          Two ways to join the <span className="italic font-serif text-forest-600">movement.</span>
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-forest-800 text-white relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-forest-600/40 blur-3xl" />
            <div className="relative">
              <p className="eyebrow-light mb-4">Fellowship</p>
              <h3 className="text-2xl font-bold">REMD Climate Fellowship</h3>
              <p className="mt-3 text-white/75">
                A mentorship program for young leaders ready to design and run sustainability
                projects in their communities.
              </p>
              <a href="/fellowship" className="mt-6 inline-flex px-5 py-2.5 rounded-full bg-white text-forest-900 font-semibold hover:bg-sand-50 transition">
                Learn more &amp; apply →
              </a>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-forest-200">
            <p className="eyebrow mb-4">Volunteer</p>
            <h3 className="text-2xl font-bold text-forest-900">Join the Team</h3>
            <p className="mt-3 text-ink/70">
              Help run workshops, organize community cleanups, or create content. Roles for every
              skill set and schedule.
            </p>
            <a
              href="https://docs.google.com/forms/d/1iDToXVf5FVuzK0jM8HuYxymxxAnYB6jsPhfJbHuAppM/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex px-5 py-2.5 rounded-full bg-forest-700 text-white font-semibold hover:bg-forest-800 transition"
            >
              Get Started →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
