import Link from "next/link";
import { outreach } from "@/lib/content";
import PhotoSlot from "./PhotoSlot";

export default function OutreachPreview() {
  const photos = Array.from({ length: 3 }, (_, i) => outreach.photos[i]);
  return (
    <section id="outreach" className="section-pad bg-forest-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">From the classroom</p>
            <h2 className="h-display text-forest-900">
              Our <span className="italic font-serif text-forest-600">first outreach.</span>
            </h2>
            <p className="mt-5 text-lg text-ink/70">{outreach.summary}</p>
          </div>
          <Link href="/outreach" className="btn-primary">See the full story →</Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {photos.map((p, i) => (
            <PhotoSlot key={i} src={p?.src} alt={p?.alt} label="Outreach photo" className="aspect-[4/5]" />
          ))}
        </div>
      </div>
    </section>
  );
}
