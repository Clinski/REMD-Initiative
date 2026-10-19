import Wave from "./Wave";
export default function StoryVideo() {
  return (
    <section id="story" className="section-pad bg-forest-950 relative">
      <Wave flip fill="#faf7f1" className="absolute top-0 inset-x-0 z-[1]" />
      <div className="max-w-5xl mx-auto text-center">
        <p className="eyebrow-light mb-4">Our Story</p>
        <h2 className="h-display text-white max-w-3xl mx-auto">
          See what we&apos;re <span className="italic font-serif text-forest-200">building.</span>
        </h2>
        <p className="mt-6 text-white/70 max-w-2xl mx-auto">
          A quick look at REMD Initiative in action &mdash; the people, the programs, and the
          communities we work with.
        </p>

        <div className="mt-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
          <video
            className="w-full aspect-video bg-black"
            controls
            playsInline
            preload="none"
            poster="/videos/remd-story-poster.jpg"
          >
            <source src="/videos/remd-story.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <Wave fill="#f1f7f3" className="absolute bottom-0 inset-x-0 z-[1]" />
    </section>
  );
}
