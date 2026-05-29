import { createFileRoute, Link } from "@tanstack/react-router";
import { Scale, Gavel, Landmark, Users, Home, FileText, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas — JVK Law Firm" },
      { name: "description", content: "Practice areas including civil litigation, criminal defense, banking disputes, family law, property documentation and consumer matters." },
      { property: "og:title", content: "Practice Areas — JVK Law Firm" },
      { property: "og:description", content: "Comprehensive legal practice areas handled by Adv. J. Vinay Kumar." },
      { property: "og:url", content: "/practice-areas" },
    ],
    links: [{ rel: "canonical", href: "/practice-areas" }],
  }),
  component: PracticeAreas,
});

const AREAS = [
  {
    icon: Scale, title: "Civil Litigation",
    desc: "Handling civil disputes across a broad range of subject matters with thorough preparation and effective representation.",
    items: ["Property matters", "Recovery suits", "Injunctions", "Agreements", "Partitions", "Civil proceedings"],
  },
  {
    icon: Gavel, title: "Criminal Matters",
    desc: "Skilled criminal defense and representation through every stage of the criminal justice process.",
    items: ["Bail applications", "Criminal defense", "FIR-related matters", "Complaints", "Criminal trial proceedings"],
  },
  {
    icon: Landmark, title: "Banking & Financial Disputes",
    desc: "Comprehensive support across banking, recovery and financial dispute matters.",
    items: ["Loan disputes", "Recovery proceedings", "Banking frauds", "Cheque bounce cases", "SARFAESI matters", "Consumer financial grievances"],
  },
  {
    icon: Users, title: "Family & Matrimonial Cases",
    desc: "Sensitive handling of family matters with focus on practical, durable outcomes.",
    items: ["Divorce matters", "Child custody", "Maintenance", "Domestic disputes", "Family settlements"],
  },
  {
    icon: Home, title: "Property & Documentation",
    desc: "Property law expertise from verification through registration and dispute resolution.",
    items: ["Property verification", "Agreement drafting", "Registration guidance", "Documentation support", "Property dispute resolution"],
  },
  {
    icon: FileText, title: "Consumer & Legal Notices",
    desc: "Crisp legal notices, complaints and replies for consumer and business matters.",
    items: ["Legal notices", "Consumer complaints", "Legal replies", "Business documentation"],
  },
];

function PracticeAreas() {
  return (
    <>
      <PageHero eyebrow="Practice Areas" title="Comprehensive Legal Practice" description="Trusted representation across civil, criminal, banking, family, property and consumer matters." />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 space-y-8">
          {AREAS.map((a, i) => (
            <article key={a.title} className={`grid lg:grid-cols-12 gap-6 bg-card border border-border p-8 md:p-10 rounded-sm hover-lift ${i % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""}`}>
              <div className="lg:col-span-3 flex flex-col items-start">
                <div className="w-16 h-16 rounded-sm bg-gradient-navy text-primary-foreground flex items-center justify-center mb-4">
                  <a.icon size={28} />
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Area {String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-serif text-3xl text-primary font-semibold mb-3">{a.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">{a.desc}</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {a.items.map((it) => (
                    <div key={it} className="flex items-center gap-2 text-sm text-primary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {it}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
          <div className="text-center pt-6">
            <Link to="/book-consultation" className="inline-flex items-center gap-2 bg-gradient-navy text-primary-foreground px-7 py-3.5 text-sm font-semibold rounded-sm shadow-soft hover:shadow-elegant transition-smooth">
              Discuss Your Matter <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}