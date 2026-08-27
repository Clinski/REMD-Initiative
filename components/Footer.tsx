import Image from "next/image";

export default function Footer() {
  const links = [
    { label: "About", id: "about" },
    { label: "Solution", id: "solution" },
    { label: "Partnership", id: "partnership" },
    { label: "How It Works", id: "how" },
    { label: "Get Involved", id: "involved" },
  ];
  return (
    <footer className="bg-forest-950 text-white/70 px-6 md:px-12 lg:px-20 py-14">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 font-semibold text-white">
            <Image src="/logo-icon.png" alt="" width={32} height={32} className="w-8 h-8" />
            REMD <span className="italic font-serif text-forest-200">Initiative</span>
          </div>
          <p className="mt-3 text-sm">Youth, education, sustainability, and creative learning.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="hover:text-white transition">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm">Contact</h4>
          <p className="text-sm">info.remdinitiative@gmail.com</p>
          <p className="text-sm mt-1">Lagos, Nigeria</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/40">
        © {new Date().getFullYear()} REMD Initiative. All rights reserved.
      </div>
    </footer>
  );
}
