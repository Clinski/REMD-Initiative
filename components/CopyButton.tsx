"use client";

import { useState } from "react";

export default function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 2000);
        } catch {
          /* clipboard unavailable — the number is still visible to copy by hand */
        }
      }}
      className="px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-xs font-semibold transition"
      aria-live="polite"
    >
      {done ? "Copied ✓" : label}
    </button>
  );
}
