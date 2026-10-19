/**
 * Single source of truth for REMD site content.
 * Edit here — pages and components read from this file.
 */

export const site = {
  name: "REMD Initiative",
  tagline: "Youth · Education · Sustainability",
  description:
    "REMD Initiative builds youth engagement around sustainability through interactive tools, school workshops, and youth-led action across Nigeria.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://remd-initiative.vercel.app",
  email: "info.remdinitiative@gmail.com",
  location: "Lagos, Nigeria",
  volunteerForm:
    "https://docs.google.com/forms/d/1iDToXVf5FVuzK0jM8HuYxymxxAnYB6jsPhfJbHuAppM/viewform",
  // Add real profile URLs here; the footer shows only the ones that are filled in.
  social: {
    instagram: "https://www.instagram.com/remd_initiative",
    x: "",
    linkedin: "https://www.linkedin.com/company/remd-initiative/",
    facebook: "",
    tiktok: "",
  } as Record<string, string>,
};

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#solution", label: "Solution" },
  { href: "/#how", label: "How It Works" },
  { href: "/outreach", label: "Outreach" },
  { href: "/team", label: "Team" },
  { href: "/fellowship", label: "Fellowship" },
  { href: "/#contact", label: "Contact" },
];

/**
 * Team: each member has a designed card image in /public/team/ (resized from the originals).
 * Bio text comes from the cards. Add a member by dropping a card in /public/team/ and adding a row.
 */
export const team: { name: string; role: string; bio: string; photo?: string }[] = [
  {
    name: "Azeezat Salawu", role: "Founder", photo: "/team/azeezat-salawu.jpg",
    bio: "Architects the overall vision of REMD Initiative. Drives the mission to transform climate education. The catalyst who started the movement.",
  },
  {
    name: "Adedoyin Dairo", role: "Co-Founder", photo: "/team/adedoyin-dairo.jpg",
    bio: "Scales the initiative from concept to community impact. Bridges sustainability strategy with on-the-ground execution. The operational brain driving our growth.",
  },
  {
    name: "Sofiat Tahir", role: "Financial Advisor", photo: "/team/sofiat-tahir.jpg",
    bio: "Structures our resources for long-term scalability. Ensures the initiative's impact outlasts immediate funding. The anchor keeping the project financially grounded.",
  },
  {
    name: "Dorcas Adedokun", role: "Social Media Manager", photo: "/team/dorcas-adedokun.jpg",
    bio: "Amplifies the REMD mission across the digital landscape. Builds and engages our core online community. The voice connecting the brand to the youth.",
  },
  {
    name: "Williams Ohemu", role: "Visual Designer", photo: "/team/williams-ohemu.jpg",
    bio: "Designs the visual language that makes learning feel like play. Turns environmental concepts into a premium identity. The creative engine behind the brand.",
  },
  {
    name: "Iman Aiyeola", role: "Content Strategist", photo: "/team/iman-aiyeola.jpg",
    bio: "Crafts the narratives that make climate action a habit. Translates complex environmental data into compelling stories. The mastermind behind the message.",
  },
];
export const teamIsPlaceholder = false;

/**
 * Outreach: facts supplied by REMD. Photos are copies in /public/outreach with location/camera
 * metadata removed. Published with the written permission of the school principal.
 * Photos appear in this order (the first three also show on the home page).
 */
export const outreach = {
  title: "Our first outreach",
  date: "7 October 2026" as string | null,
  school: "Prime Focus School, Ipaja" as string | null,
  summary:
    "On 7 October 2026, REMD held its first school outreach at Prime Focus School, Ipaja. We spoke to the whole school and ran an interactive session with 30 students, using climate-action cards, crossword worksheets, and hands-on activities.",
  // Only entries with a value are shown. Add { label: "Volunteers", value: "…" } when there are some.
  stats: [
    { label: "Interactive session", value: "30 students" as string | null },
    { label: "Reached", value: "Whole school" as string | null },
  ],
  photos: [
    { src: "/outreach/outreach-08.jpg", w: 810, h: 1080, alt: "Students seated in a classroom during the REMD session, smiling and making peace signs" },
    { src: "/outreach/outreach-03.jpg", w: 810, h: 1080, alt: "Two students smiling and holding a “Ripple Effect” climate learning card" },
    { src: "/outreach/outreach-06.jpg", w: 810, h: 1080, alt: "Three students holding climate-action learning cards" },
    { src: "/outreach/outreach-01.jpg", w: 1080, h: 810, alt: "REMD team members posing together in front of the “Inspiring Change, Creating Impact” banner" },
    { src: "/outreach/outreach-05.jpg", w: 810, h: 1080, alt: "Two students holding a “Save the Plantain” learning card" },
    { src: "/outreach/outreach-07.jpg", w: 810, h: 1080, alt: "Two students holding a “The Moi-Moi Leaf” learning card" },
    { src: "/outreach/outreach-04.jpg", w: 810, h: 1080, alt: "A student completing a crossword worksheet at their desk" },
    { src: "/outreach/outreach-10.jpg", w: 608, h: 1080, alt: "A student painting during a hands-on activity" },
    { src: "/outreach/outreach-02.jpg", w: 810, h: 1080, alt: "A REMD team member in a REMD T-shirt speaking with students in the classroom" },
    { src: "/outreach/outreach-11.jpg", w: 810, h: 1080, alt: "A student holding up a REMD “Inspiring Change, Creating Impact” T-shirt" },
    { src: "/outreach/outreach-09.jpg", w: 608, h: 1080, alt: "The back of a REMD T-shirt reading “Read, Educate, Make a Difference”" },
  ] as { src: string; alt: string; w: number; h: number }[],
  photoSlots: 0,
};

export const fund = {
  headline: "Don’t just watch the movement.",
  emphasis: "FUND IT",
  message:
    "Your sponsorship accelerates our mission. Help us bring interactive climate education to schools across Lagos.",
  // Consent to publish the account details and contact numbers was confirmed by Sofiat, Azeezat and Doyin (2026-10-19).
  showAccountPublicly: true,
  bank: "Access Bank",
  accountNumber: "1830601258",
  accountName: "TAHIR SOFIAT OYINKANSOLA",
  holderNote: "This account is held by Sofiat Tahir, REMD Initiative’s Financial Advisor.",
  contacts: [
    { name: "Azeezat", phone: "+234 817 915 8655" },
    { name: "Doyin", phone: "+234 708 479 8871" },
  ],
  showContactPhonesPublicly: false,
};
