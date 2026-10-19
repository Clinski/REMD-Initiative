import Wave from "@/components/Wave";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function NotFound() {
  return (
    <>
      <PageHeader eyebrow="404" title={<>Page not <span className="italic font-serif text-forest-200">found.</span></>}>
        The page you are looking for does not exist or has moved.
      </PageHeader>
      <section className="section-pad text-center">
        <Link href="/" className="btn-primary">Back to home</Link>
      </section>
      <div className="bg-sand-50"><Wave fill="#082018" /></div>
    </>
  );
}
