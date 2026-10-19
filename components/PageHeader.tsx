export default function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative bg-forest-900 text-white overflow-hidden isolate [contain:paint]">
      <div className="absolute inset-0 opacity-60 bg-dot-grid" style={{ backgroundSize: "22px 22px" }} />
      <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full bg-forest-700/50 blur-3xl" />
      <div className="relative max-w-4xl mx-auto px-6 md:px-12 pt-36 pb-20 text-center">
        <p className="eyebrow-light mb-4">{eyebrow}</p>
        <h1 className="h-display">{title}</h1>
        {children && <div className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">{children}</div>}
      </div>

      <svg className="relative block w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#faf7f1" />
      </svg>
    </section>
  );
}
