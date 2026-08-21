import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "REMD Initiative — Youth · Education · Sustainability",
  description:
    "REMD Initiative builds youth engagement around sustainability through interactive tools, school workshops, and youth-led action across Nigeria.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
