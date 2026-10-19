import Wave from "@/components/Wave";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "REMD Climate Fellowship",
  description: "A mentorship program for young leaders ready to design and run sustainability projects in their communities.",
  alternates: { canonical: "/fellowship" },
};

const mailto = `mailto:${site.email}?subject=${encodeURIComponent("REMD Climate Fellowship — application interest")}&body=${encodeURIComponent(
  "Hello REMD team,\n\nI am interested in the Climate Fellowship.\n\nName:\nAge / school or institution:\nCity:\nWhy I want to join:\n"
)}`;

export default function FellowshipPage() {
  return (
    <>
      <PageHeader eyebrow="Fellowship" title={<>REMD <span className="italic font-serif text-forest-200">Climate Fellowship</span></>}>
        A mentorship program for young leaders ready to design and run sustainability projects in their communities.
      </PageHeader>
      <section className="section-pad">
        <div className="max-w-3xl mx-auto grid gap-6">
          <div className="p-8 rounded-3xl bg-white border border-forest-100">
            <h2 className="text-2xl font-bold text-forest-900">Who it is for</h2>
            <p className="mt-3 text-ink/75 leading-relaxed">
              Young leaders who want to turn concern about the environment into action: designing and running sustainability projects in
              their own communities, with mentorship from the REMD team.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-forest-800 text-white">
            <h2 className="text-2xl font-bold">Express your interest</h2>
            <p className="mt-3 text-white/75">
              Applications are handled by email. Send us a short note and we will reply with the next steps.
            </p>
            <a href={mailto} className="btn-light mt-6">Email us to apply →</a>
          </div>
        </div>
      </section>
      <div className="bg-sand-50"><Wave fill="#082018" /></div>
    </>
  );
}
