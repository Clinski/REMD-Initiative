import Link from "next/link";
import { fund, site } from "@/lib/content";
import CopyButton from "./CopyButton";

export default function FundCTA() {
  return (
    <section id="fund" className="section-pad bg-sand-50">
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[2rem] bg-forest-800 text-white px-6 py-12 md:px-14 md:py-16">
        <div className="absolute inset-0 opacity-40 bg-dot-grid" style={{ backgroundSize: "22px 22px" }} />
        <div className="absolute -bottom-32 -right-24 w-[420px] h-[420px] rounded-full bg-forest-600/50 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
            <p className="text-xl md:text-2xl text-forest-100 font-medium">{fund.headline}</p>
            <p className="mt-2 text-6xl md:text-8xl font-extrabold tracking-tight text-forest-100">{fund.emphasis}</p>
            <p className="mt-6 text-white/75 max-w-md mx-auto lg:mx-0">{fund.message}</p>
            <Link href="/fund" className="mt-6 inline-block text-sm text-forest-200 underline underline-offset-4 hover:text-white">
              See what your sponsorship supports
            </Link>
          </div>

          {fund.showAccountPublicly ? (
            <div className="rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm p-7 md:p-8">
              <div className="flex items-center justify-between">
                <span className="font-bold tracking-tight">REMD</span>
                <span className="font-semibold text-forest-100">{fund.bank}</span>
              </div>
              <span aria-hidden className="mt-6 block w-12 h-9 rounded-md bg-gradient-to-br from-amber-300 to-amber-500" />
              <p className="mt-6 text-3xl sm:text-4xl font-bold tracking-[0.18em]" aria-label={`Account number ${fund.accountNumber}`}>
                {fund.accountNumber}
              </p>
              <p className="mt-3 text-sm sm:text-base tracking-wide text-white/80">{fund.accountName}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <CopyButton text={fund.accountNumber} label="Copy account number" />
              </div>
              <p className="mt-5 pt-4 border-t border-white/15 text-xs text-white/65">{fund.holderNote}</p>
            </div>
          ) : (
            <div className="rounded-3xl bg-white/10 border border-white/20 p-8 text-center">
              <p className="text-white/80">Email us and we will send the account details.</p>
              <a href={`mailto:${site.email}`} className="btn-light mt-5">Email us to sponsor →</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
