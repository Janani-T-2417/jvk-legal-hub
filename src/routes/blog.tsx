import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Calendar, Tag, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Legal Updates & Articles — JVK Law Firm" },
      { name: "description", content: "Latest judgments, legal awareness, consumer rights, property, labour, banking and arbitration updates by Adv. J. Vinay Kumar." },
      { property: "og:title", content: "Legal Updates — JVK Law Firm" },
      { property: "og:description", content: "Practical legal awareness articles and case updates." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const CATEGORIES = [
  "All",
  "Latest Judgments",
  "Legal Awareness",
  "Consumer Rights",
  "Property Law",
  "Labour Law",
  "Banking Law",
  "Arbitration",
];

const POSTS = [
  { title: "Cheque Bounce: A Practical Guide to Section 138 NI Act", category: "Banking Law", date: "Nov 12, 2025", excerpt: "Steps to take when a cheque is dishonoured — from notice to filing a complaint within statutory timelines.", featured: true },
  { title: "Property Due Diligence: A 10-Point Checklist Before You Buy", category: "Property Law", date: "Nov 04, 2025", excerpt: "Title verification, encumbrance, approvals and documentation checks every buyer should complete.", featured: true },
  { title: "Maintenance & Custody: Key Principles in Family Court", category: "Legal Awareness", date: "Oct 22, 2025", excerpt: "An overview of how courts balance the interests of spouses and children in matrimonial proceedings." },
  { title: "Consumer Protection Act 2019: What Has Really Changed", category: "Consumer Rights", date: "Oct 14, 2025", excerpt: "New jurisdiction limits, e-commerce coverage and product liability — explained in plain language." },
  { title: "Industrial Disputes Act: Employer Compliance Essentials", category: "Labour Law", date: "Oct 02, 2025", excerpt: "Critical compliance items every employer should track to avoid disputes and penalties." },
  { title: "Arbitration vs Litigation: Choosing the Right Path", category: "Arbitration", date: "Sep 21, 2025", excerpt: "When arbitration adds value and when traditional litigation remains the better route." },
  { title: "Recent Supreme Court Ruling on SARFAESI Notices", category: "Latest Judgments", date: "Sep 10, 2025", excerpt: "Key takeaways from a recent judgment that affects borrowers and banks alike." },
  { title: "WILL Drafting: Avoiding Common Mistakes", category: "Legal Awareness", date: "Aug 30, 2025", excerpt: "Small drafting errors can derail intent — here is how to draft a Will that holds." },
];

function BlogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    return POSTS.filter((p) =>
      (cat === "All" || p.category === cat) &&
      (q === "" || p.title.toLowerCase().includes(q.toLowerCase()) || p.excerpt.toLowerCase().includes(q.toLowerCase()))
    );
  }, [q, cat]);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <>
      <PageHero eyebrow="Legal Updates" title="Insights, Judgments & Awareness" description="Practical legal updates and awareness articles from the desk of Adv. J. Vinay Kumar." />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles..." className="w-full pl-12 pr-4 py-3.5 bg-card border border-border rounded-sm text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-smooth" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {CATEGORIES.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm border transition-smooth ${cat === c ? "bg-gradient-navy text-primary-foreground border-transparent" : "bg-background border-border text-muted-foreground hover:text-primary"}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          {featured.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {featured.map((p) => (
                <article key={p.title} className="group relative bg-gradient-navy text-primary-foreground p-8 md:p-10 rounded-sm overflow-hidden hover-lift">
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-gold/20 blur-2xl" />
                  <span className="relative inline-block text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-4">Featured · {p.category}</span>
                  <h3 className="relative font-serif text-2xl md:text-3xl font-semibold leading-tight mb-3">{p.title}</h3>
                  <p className="relative text-primary-foreground/80 leading-relaxed mb-5">{p.excerpt}</p>
                  <div className="relative flex items-center gap-4 text-xs text-primary-foreground/70">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {p.date}</span>
                    <span className="inline-flex items-center gap-1.5 text-accent font-semibold">Read article <ArrowRight size={14} /></span>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <article key={p.title} className="group bg-card border border-border p-6 rounded-sm hover-lift">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1.5 text-accent font-semibold uppercase tracking-wider"><Tag size={12} /> {p.category}</span>
                  <span className="inline-flex items-center gap-1.5"><Calendar size={12} /> {p.date}</span>
                </div>
                <h3 className="font-serif text-lg text-primary font-semibold leading-tight mb-2 group-hover:text-royal transition-smooth">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-primary font-semibold">
                  Read more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">No articles match your search.</div>
          )}
        </div>
      </section>
    </>
  );
}