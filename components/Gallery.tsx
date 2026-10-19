"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type GalleryPhoto = { src: string; alt: string; w: number; h: number };

export default function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % photos.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, photos.length]);

  const current = open === null ? null : photos[open];
  const btn = "absolute z-10 w-11 h-11 grid place-items-center rounded-full bg-white/15 hover:bg-white/25 text-white text-xl transition";

  return (
    <>
      <ul className="columns-2 lg:columns-3 gap-3 sm:gap-4">
        {photos.map((p, i) => (
          <li key={p.src} className="break-inside-avoid mb-3 sm:mb-4">
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Enlarge photo: ${p.alt}`}
              className="group block w-full overflow-hidden rounded-2xl bg-forest-100"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                sizes="(min-width:1024px) 33vw, 50vw"
                className="w-full h-auto transition duration-500 group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div role="dialog" aria-modal="true" aria-label="Photo viewer" className="fixed inset-0 z-[60] bg-black/90 flex flex-col items-center justify-center p-4" onClick={() => setOpen(null)}>
          <button type="button" aria-label="Close" className={`${btn} top-4 right-4`} onClick={() => setOpen(null)}>✕</button>
          <button type="button" aria-label="Previous photo" className={`${btn} left-3 top-1/2 -translate-y-1/2`} onClick={(e) => { e.stopPropagation(); setOpen((open! - 1 + photos.length) % photos.length); }}>‹</button>
          <button type="button" aria-label="Next photo" className={`${btn} right-3 top-1/2 -translate-y-1/2`} onClick={(e) => { e.stopPropagation(); setOpen((open! + 1) % photos.length); }}>›</button>
          <Image
            src={current.src}
            alt={current.alt}
            width={current.w}
            height={current.h}
            sizes="90vw"
            priority
            className="max-h-[82vh] w-auto max-w-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-4 max-w-xl text-center text-sm text-white/80" onClick={(e) => e.stopPropagation()}>{current.alt}</p>
          <p className="mt-1 text-xs text-white/50">{open! + 1} / {photos.length}</p>
        </div>
      )}
    </>
  );
}
