import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/content";

const socialLabels: Record<string, string> = {
  instagram: "Instagram", x: "X", linkedin: "LinkedIn", facebook: "Facebook", tiktok: "TikTok",
};

export default function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url);
  return (
    <footer className="bg-forest-950 text-white/70 px-6 md:px-12 lg:px-20 py-14">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-semibold text-white">
            <Image src="/logo-icon.png" alt="" width={32} height={32} className="w-8 h-8" />
            REMD <span className="italic font-serif text-forest-200">Initiative</span>
          </div>
          <p className="mt-3 text-sm">Youth, education, sustainability, and creative learning.</p>
          {socials.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-3 text-sm">
              {socials.map(([key, url]) => (
                <li key={key}><a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-white">{socialLabels[key] ?? key}</a></li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h2 className="font-semibold text-white mb-3 text-sm">Explore</h2>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white transition">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-white mb-3 text-sm">Get Involved</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/fund" className="hover:text-white transition">Fund It</Link></li>
            <li><Link href="/#partnership" className="hover:text-white transition">Partner With Us</Link></li>
            <li><a href={site.volunteerForm} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Volunteer</a></li>
            <li><Link href="/fellowship" className="hover:text-white transition">Climate Fellowship</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-white mb-3 text-sm">Contact</h2>
          <p className="text-sm"><a href={`mailto:${site.email}`} className="hover:text-white break-all">{site.email}</a></p>
          <p className="text-sm mt-1">{site.location}</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/50 flex flex-wrap gap-x-6 gap-y-2 justify-between">
        <span>© {new Date().getFullYear()} REMD Initiative. All rights reserved.</span>
        <Link href="/privacy" className="hover:text-white">Privacy &amp; Child Safeguarding</Link>
      </div>
    </footer>
  );
}
