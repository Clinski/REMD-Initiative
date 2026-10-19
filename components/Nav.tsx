"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-forest-900/90 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-16 text-white">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight" onClick={() => setOpen(false)}>
          <Image src="/logo-icon.png" alt="" width={28} height={28} className="w-7 h-7" priority />
          REMD Initiative
        </Link>

        <ul className="hidden xl:flex items-center gap-7 text-sm text-white/80">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-white transition">{l.label}</Link>
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex items-center gap-3">
          <Link href="/#fund" className="px-4 py-2 rounded-full border border-white/30 text-sm font-semibold hover:bg-white/10 transition">
            Fund It
          </Link>
          <Link href="/#partnership" className="px-4 py-2 rounded-full bg-white text-forest-800 text-sm font-semibold hover:bg-sand-50 transition">
            Partner With Us
          </Link>
        </div>

        <button
          type="button"
          className="xl:hidden w-11 h-11 -mr-2 grid place-items-center rounded-lg hover:bg-white/10"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
    </header>

    {/* Outside <header>: its backdrop-blur would otherwise become the containing block for this fixed panel */}
      {open && (
        <div id="mobile-menu" className="xl:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-forest-900 text-white overflow-y-auto px-6 pb-10">
          <ul className="pt-4 divide-y divide-white/10">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block py-4 text-lg font-medium">{l.label}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3">
            <Link href="/#fund" onClick={() => setOpen(false)} className="btn-ghost-light">Fund It</Link>
            <Link href="/#partnership" onClick={() => setOpen(false)} className="btn-light">Partner With Us</Link>
          </div>
        </div>
      )}
    </>
  );
}
