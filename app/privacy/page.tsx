import Wave from "@/components/Wave";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy & Child Safeguarding",
  description: "How REMD Initiative handles personal data and protects children in photos and programs.",
  alternates: { canonical: "/privacy" },
};

const H = ({ children }: { children: React.ReactNode }) => <h2 className="mt-10 text-2xl font-bold text-forest-900">{children}</h2>;

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title={<>Privacy &amp; <span className="italic font-serif text-forest-200">child safeguarding.</span></>}>
        How we handle your information and protect the children we work with.
      </PageHeader>
      <section className="section-pad">
        <article className="max-w-3xl mx-auto text-ink/80 leading-relaxed [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1">
          <p className="rounded-xl bg-sand-100 border border-sand-200 px-4 py-3 text-sm">
            Draft for REMD to review. Have it checked against the Nigeria Data Protection Act 2023 (NDPA) before relying on it.
          </p>

          <H>Who we are</H>
          <p>{site.name} is a youth-focused sustainability education initiative based in {site.location}. Contact: <a className="underline text-forest-700" href={`mailto:${site.email}`}>{site.email}</a>.</p>

          <H>What we collect</H>
          <ul>
            <li>Information you send us directly, such as your name, email address, and message when you contact us, volunteer, or apply to the Fellowship.</li>
            <li>Anonymous visit statistics through Vercel Analytics, which does not use cookies to identify you.</li>
          </ul>

          <H>How we use it</H>
          <p>To reply to enquiries, run programs and partnerships, and understand how people use this site. We do not sell your data.</p>

          <H>Your rights</H>
          <p>Under the NDPA you may ask to access, correct, or delete your personal data, or withdraw consent. Email us and we will respond.</p>

          <H>Child safeguarding</H>
          <ul>
            <li>We publish photos or videos of children only with written consent from a parent, guardian, or the school.</li>
            <li>We do not publish children&apos;s full names, home addresses, or contact details.</li>
            <li>Anyone may ask us to remove an image of a child at any time; we will do so promptly.</li>
            <li>Volunteers working with children follow REMD&apos;s safeguarding rules and are never alone with a child.</li>
          </ul>
          <p>To raise a concern or request removal of an image, email <a className="underline text-forest-700" href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </article>
      </section>
      <div className="bg-sand-50"><Wave fill="#082018" /></div>
    </>
  );
}
