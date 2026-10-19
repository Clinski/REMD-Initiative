import Wave from "@/components/Wave";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CopyButton from "@/components/CopyButton";
import { fund, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Fund It — Sponsor REMD",
  description: "Your sponsorship helps REMD bring interactive climate education to schools across Lagos.",
  alternates: { canonical: "/fund" },
};

export default function FundPage() {
  const sponsorMail = `mailto:${site.email}?subject=${encodeURIComponent("Sponsoring REMD Initiative")}`;
  return (
    <>
      <PageHeader eyebrow="Sponsor the mission" title={<>{fund.headline} <span className="italic font-serif text-forest-200">{fund.emphasis}.</span></>}>
        {fund.message}
      </PageHeader>

      <section className="section-pad">
        <div className="max-w-3xl mx-auto grid gap-6">
          {fund.showAccountPublicly ? (
            <div className="rounded-3xl bg-forest-800 text-white p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-forest-600/40 blur-3xl" />
              <div className="relative">
                <p className="eyebrow-light">Bank transfer</p>
                <p className="mt-4 text-lg font-semibold">{fund.bank}</p>
                <div className="mt-2 flex flex-wrap items-center gap-4">
                  <p className="text-3xl md:text-4xl font-bold tracking-[0.2em]">{fund.accountNumber}</p>
                  <CopyButton text={fund.accountNumber} label="Copy number" />
                </div>
                <p className="mt-3 text-white/75 tracking-wide">{fund.accountName}</p>
                <p className="mt-4 pt-4 border-t border-white/15 text-sm text-white/70">{fund.holderNote}</p>
              </div>
            </div>
          ) : (
            <div className="rounded-3xl bg-forest-800 text-white p-8 md:p-10">
              <p className="eyebrow-light">Sponsor by bank transfer</p>
              <p className="mt-4 text-white/80">Email us and we will send the account details and confirm your sponsorship.</p>
              <a href={sponsorMail} className="btn-light mt-6">Email us to sponsor →</a>
            </div>
          )}

          <div className="rounded-3xl bg-white border border-forest-100 p-8">
            <h2 className="text-2xl font-bold text-forest-900">What your sponsorship supports</h2>
            <ul className="mt-4 grid gap-3 text-ink/75">
              <li className="flex gap-3"><span className="text-forest-500">✓</span>Interactive climate education in schools across Lagos</li>
              <li className="flex gap-3"><span className="text-forest-500">✓</span>School workshops and creative learning kits for classrooms</li>
              <li className="flex gap-3"><span className="text-forest-500">✓</span>Youth-led sustainability projects and the Climate Fellowship</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-forest-50 border border-forest-100 p-8">
            <h2 className="text-xl font-bold text-forest-900">Enquiries &amp; sponsorship</h2>
            <p className="mt-3 text-ink/75">
              Email <a href={`mailto:${site.email}`} className="underline text-forest-700">{site.email}</a>
              {fund.showContactPhonesPublicly && (
                <> or call {fund.contacts.map((c, i) => (<span key={c.name}>{i > 0 && " · "}{c.name}: <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="underline text-forest-700 whitespace-nowrap">{c.phone}</a></span>))}</>
              )}
              .
            </p>
            <p className="mt-4 text-sm text-ink/60">
              Want to give your time instead? <Link href="/#involved" className="underline text-forest-700">See how to get involved</Link>.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-sand-50"><Wave fill="#082018" /></div>
    </>
  );
}
