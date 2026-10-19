import Image from "next/image";
import Link from "next/link";
import { team } from "@/lib/content";

/** Compact home-page team block: one group graphic. Individual cards live on /team. */
export default function TeamPreview() {
  const names = team.map((m) => `${m.name} (${m.role})`).join(", ");
  return (
    <section id="team" className="section-pad bg-sand-50">
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
        <div className="text-center md:text-left">
          <p className="eyebrow mb-4">The people behind REMD</p>
          <h2 className="h-display text-forest-900">
            Meet the <span className="italic font-serif text-forest-600">team.</span>
          </h2>
          <p className="mt-5 text-lg text-ink/70">
            Young people, educators, and creatives turning sustainability into something you can touch.
          </p>
          <Link href="/team" className="btn-primary mt-7">Meet everyone →</Link>
        </div>
        <Image
          src="/team/minds-behind-remd.jpg"
          alt={`The Minds Behind REMD: ${names}`}
          width={1600}
          height={1600}
          sizes="(min-width:768px) 520px, 100vw"
          className="w-full h-auto rounded-3xl shadow-xl shadow-forest-900/10"
        />
      </div>
    </section>
  );
}
