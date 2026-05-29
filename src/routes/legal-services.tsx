import { createFileRoute, Link } from "@tanstack/react-router";
import { Building, FileSignature, ScrollText, Handshake, HardHat, ShoppingBag, Landmark, Briefcase, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/legal-services")({
  head: () => ({
    meta: [
      { title: "Legal Services — JVK Law Firm" },
      { name: "description", content: "Real estate legal opinions, registration, WILL drafting, arbitration, labour law, consumer disputes, High Court litigation and corporate advisory." },
      { property: "og:title", content: "Legal Services — JVK Law Firm" },
      { property: "og:description", content: "Premium legal services delivered with professionalism and confidentiality." },
      { property: "og:url", content: "/legal-services" },
    ],
    links: [{ rel: "canonical", href: "/legal-services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { icon: Building, title: "Real Estate Legal Opinions", desc: "Comprehensive legal opinions for residential plots, commercial properties and larger land extents — backed by thorough title verification." },
  { icon: FileSignature, title: "Registration & Documentation", desc: "End-to-end support for agreement drafting, registration guidance and documentation review for individuals and businesses." },
  { icon: ScrollText, title: "WILL Drafting", desc: "Carefully drafted Wills that reflect your intent, protect your family and meet all legal formalities." },
  { icon: Handshake, title: "Arbitration Matters", desc: "Representation and advisory across arbitration proceedings, settlement discussions and dispute resolution." },
  { icon: HardHat, title: "Labour Law Cases", desc: "Industrial disputes, employee grievances, labour compliance and representation before labour authorities." },
  { icon: ShoppingBag, title: "Consumer Disputes", desc: "Consumer complaints, replies to notices and representation before consumer forums for individuals and businesses." },
  { icon: Landmark, title: "High Court Litigation", desc: "Regular appearances and representation before the High Court of Andhra Pradesh in diverse legal proceedings." },
  { icon: Briefcase, title: "Corporate Legal Advisory", desc: "Contracts, compliance, recovery proceedings and ongoing legal advisory for companies and institutions." },
];

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Legal Services" title="Premium Legal Services" description="Professional, confidential and result-oriented legal support across a comprehensive service catalogue." />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="group relative bg-card border border-border p-7 rounded-sm hover-lift overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="w-12 h-12 rounded-sm bg-gradient-navy text-primary-foreground flex items-center justify-center mb-4 group-hover:bg-gradient-gold group-hover:text-gold-foreground transition-smooth">
                  <s.icon size={22} />
                </div>
                <h3 className="font-serif text-lg text-primary font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/book-consultation" className="inline-flex items-center gap-2 bg-gradient-navy text-primary-foreground px-7 py-3.5 text-sm font-semibold rounded-sm shadow-soft hover:shadow-elegant transition-smooth">
              Request Service <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}