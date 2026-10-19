import Wave from "./Wave";
import { site } from "@/lib/content";

const socialLabels: Record<string, string> = {
  instagram: "Instagram", x: "X", linkedin: "LinkedIn", facebook: "Facebook", tiktok: "TikTok",
};

export default function Contact() {
  const socials = Object.entries(site.social).filter(([, url]) => url);
  return (
    <section id="contact" className="relative bg-forest-900 text-white section-pad overflow-hidden isolate [contain:paint] -mb-px">
      <Wave flip fill="#faf7f1" className="absolute top-0 inset-x-0 z-[1]" />
      <div className="absolute inset-0 opacity-50 bg-dot-grid" style={{ backgroundSize: "22px 22px" }} />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-forest-700/40 blur-3xl" />
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="eyebrow-light mb-5">Let's Connect</p>
        <h2 className="h-display">
          From conversation to <span className="italic font-serif text-forest-200">engagement.</span>
        </h2>
        <p className="mt-6 text-white/75 text-lg max-w-2xl mx-auto">
          A simple, flexible engagement model designed to fit how partners work. Whether you are a
          school, a brand, an NGO, or a young person with ideas, we want to hear from you.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${site.email}`} className="px-6 py-3 rounded-full bg-white text-forest-900 font-semibold hover:bg-sand-50 transition">
            {site.email}
          </a>
          <a href="/#fund" className="px-6 py-3 rounded-full bg-forest-400 text-forest-900 font-semibold hover:bg-forest-300 transition">Fund It →</a>
          <span className="px-6 py-3 rounded-full border border-white/30 text-white/90">📍 {site.location}</span>
        </div>
        {socials.length > 0 && (
          <p className="mt-8 text-sm text-white/70">
            Follow us:{" "}
            {socials.map(([key, url], i) => (
              <span key={key}>
                {i > 0 && " · "}
                <a href={url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
                  {socialLabels[key] ?? key}
                </a>
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
