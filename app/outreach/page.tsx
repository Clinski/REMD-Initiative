import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PhotoSlot from "@/components/PhotoSlot";
import Gallery from "@/components/Gallery";
import Wave from "@/components/Wave";
import { outreach } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our First Outreach — Prime Focus School, Ipaja",
  description: "REMD Initiative's first school outreach at Prime Focus School, Ipaja: an interactive climate-education session with 30 students.",
  alternates: { canonical: "/outreach" },
  openGraph: { images: [{ url: "/outreach/outreach-08.jpg" }] },
};

export default function OutreachPage() {
  const facts = [
    outreach.school && { label: "School", value: outreach.school },
    outreach.date && { label: "Date", value: outreach.date },
    ...outreach.stats.filter((s) => s.value).map((s) => ({ label: s.label, value: s.value as string })),
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <PageHeader eyebrow="Outreach stories" title={<>Our <span className="italic font-serif text-forest-200">first outreach.</span></>}>
        {outreach.summary}
      </PageHeader>

      {facts.length > 0 && (
        <section className="px-6 md:px-12 lg:px-20 -mt-6 relative z-[2]">
          <dl className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4 rounded-3xl bg-white border border-forest-100 shadow-xl shadow-forest-900/5 p-6 md:p-8">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="eyebrow">{f.label}</dt>
                <dd className="mt-1 text-xl font-bold text-forest-900">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section className="section-pad">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-forest-900">Gallery</h2>
          <div className="mt-6">
            {outreach.photos.length > 0 ? (
              <Gallery photos={outreach.photos} />
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: outreach.photoSlots || 3 }, (_, i) => (
                  <PhotoSlot key={i} label="Outreach photo" className="aspect-[4/3]" />
                ))}
              </div>
            )}
          </div>
          <p className="mt-6 text-sm text-ink/60">
            Photos of children are shared with the written permission of the school. Read our{" "}
            <Link href="/privacy" className="underline text-forest-700">child safeguarding policy</Link>.
          </p>
        </div>
      </section>

      <section className="section-pad bg-forest-900 text-white text-center relative">
        <Wave flip fill="#faf7f1" className="absolute top-0 inset-x-0 z-[1]" />
        <h2 className="h-display">Bring REMD to your <span className="italic font-serif text-forest-200">school.</span></h2>
        <p className="mt-5 text-white/75 max-w-xl mx-auto">Want a workshop, classroom kit, or outreach at your school or community?</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/#contact" className="btn-light">Get in touch</Link>
          <Link href="/#fund" className="btn-ghost-light">Fund the next outreach</Link>
        </div>
      </section>
    </>
  );
}
