import Wave from "@/components/Wave";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PhotoSlot from "@/components/PhotoSlot";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Meet the Team",
  description: "The young people, educators, and creatives behind REMD Initiative.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <PageHeader eyebrow="The people behind REMD" title={<>Meet the <span className="italic font-serif text-forest-200">team.</span></>}>
        Young people, educators, and creatives turning sustainability into something you can touch.
      </PageHeader>
      <section className="section-pad">
        <ul className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <li key={i}>
              {/* The card image already shows the bio; the alt text carries it for screen readers and search */}
              <PhotoSlot src={m.photo} alt={`${m.name}, ${m.role} at REMD Initiative. ${m.bio}`} label="Team photo" className="aspect-square shadow-lg shadow-forest-900/10" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
              <h2 className="mt-4 text-xl font-bold text-forest-900">{m.name}</h2>
              <p className="text-sm font-medium text-forest-600">{m.role}</p>
            </li>
          ))}
        </ul>
      </section>
      <div className="bg-sand-50"><Wave fill="#082018" /></div>
    </>
  );
}
