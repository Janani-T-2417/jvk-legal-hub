import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ScrollText, Building2, Scale, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import advocate from "@/assets/advocate.jpg";
import office from "@/assets/office.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Adv. J. Vinay Kumar — JVK Law Firm" },
      { name: "description", content: "Learn about Adv. J. Vinay Kumar — Advocate & Legal Consultant in Visakhapatnam with expertise in civil, criminal, banking, property, labour and corporate law." },
      { property: "og:title", content: "About Adv. J. Vinay Kumar — JVK Law Firm" },
      { property: "og:description", content: "Advocate & Legal Consultant committed to professional, transparent and practical legal services." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const BANK_SERVICES = [
  "Title Verification",
  "Property Due Diligence",
  "Legal Scrutiny",
  "Documentation Verification",
  "Property Legal Opinions",
  "Loan Processing Legal Support",
];

const CORPORATE = [
  "Arbitration and Dispute Resolution",
  "Labour Law Matters",
  "Corporate Legal Advisory",
  "Contract Review",
  "Legal Documentation",
  "Industrial Disputes",
  "Compliance Matters",
  "Recovery Proceedings",
  "Legal Notices",
  "Representation Services",
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About the Advocate" title="Adv. J. Vinay Kumar" description="Advocate & Legal Consultant — committed to reliable legal services with professionalism, transparency and practical solutions." />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 right-12 bottom-12 bg-gradient-gold/30" />
            <img src={advocate} alt="Adv. J. Vinay Kumar in advocate robes at his desk" className="relative w-full h-auto shadow-elegant" width={1024} height={1280} loading="lazy" />
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Profile" title="Reliable Legal Services. Practical Advice." />
            <div className="space-y-4 text-muted-foreground leading-relaxed -mt-6">
              <p>Adv. J. Vinay Kumar is committed to providing reliable legal services with professionalism, transparency and practical solutions.</p>
              <p>He represents clients across civil, criminal, banking, labour, arbitration, property and High Court matters — bringing courtroom experience and a client-focused approach to every engagement.</p>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {["Civil Litigation", "Criminal Defense", "Banking Disputes", "Property Law", "Family Matters", "Corporate Advisory"].map((s) => (
                <div key={s} className="flex items-center gap-2 text-sm text-primary"><CheckCircle2 size={16} className="text-accent" /> {s}</div>
              ))}
            </div>
            <Link to="/book-consultation" className="mt-8 inline-flex items-center gap-2 bg-gradient-navy text-primary-foreground px-6 py-3 text-sm font-medium rounded-sm shadow-soft hover:shadow-elegant transition-smooth">
              Book Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="gold-divider" />
                <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Empanelled Advocate</span>
              </div>
              <h2 className="font-serif text-4xl text-primary font-semibold leading-tight">Bank Panel &amp; Property Legal Opinions</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Empanelled with reputed banks, Adv. J. Vinay Kumar provides legal opinions for individual properties, residential plots, commercial properties and larger land extents.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {BANK_SERVICES.map((s) => (
                  <div key={s} className="flex items-center gap-3 bg-background border border-border px-4 py-3 rounded-sm">
                    <Building2 size={16} className="text-accent" />
                    <span className="text-sm text-primary">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img src={office} alt="Law office with library and consultation desk" className="w-full h-auto shadow-elegant" width={1600} height={1067} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading eyebrow="Corporate & Advisory" title="Corporate & Legal Advisory Services" description="Adv. J. Vinay Kumar is associated with reputed companies and institutions, providing professional legal support and advisory services across various legal and corporate matters." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CORPORATE.map((c) => (
              <div key={c} className="flex items-start gap-3 bg-card border border-border p-5 rounded-sm hover-lift">
                <Scale size={18} className="text-accent mt-0.5" />
                <span className="text-sm text-primary font-medium">{c}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-muted-foreground italic">Committed to professionalism, confidentiality and result-oriented legal support.</p>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading eyebrow="Office Gallery" title="Inside Our Office" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[office, advocate, office, advocate, office, advocate].map((img, i) => (
              <div key={i} className="group overflow-hidden rounded-sm shadow-soft">
                <img src={img} alt={`Office view ${i + 1}`} className="w-full h-64 object-cover group-hover:scale-105 transition-smooth" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8 text-xs uppercase tracking-wider text-muted-foreground">
            <ScrollText size={16} className="inline mr-2 text-accent" />
            Advocate portrait · Consultation desk · Law library · Certificates
          </div>
        </div>
      </section>
    </>
  );
}