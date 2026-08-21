const links = [
  { href: "#about", label: "About" },
  { href: "#solution", label: "Solution" },
  { href: "#partnership", label: "Partnership" },
  { href: "#how", label: "How It Works" },
  { href: "#involved", label: "Get Involved" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="absolute top-0 inset-x-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 pt-9 pb-5 text-white">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="w-7 h-7 rounded-md bg-white/15 border border-white/20 flex items-center justify-center text-xs">R</span>
          REMD Initiative
        </a>
        <ul className="hidden lg:flex items-center gap-7 text-sm text-white/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#partnership" className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-white text-forest-800 text-sm font-semibold hover:bg-sand-50 transition">
          Partner With Us
        </a>
      </nav>
    </header>
  );
}
