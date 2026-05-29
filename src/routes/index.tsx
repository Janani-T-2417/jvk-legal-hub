import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Scale, Gavel, Landmark, Users, Home as HomeIcon, Briefcase,
  ShieldCheck, MessageSquareText, Clock, Sparkles, Heart, BookOpen,
  ArrowRight, Phone, MessageCircle, Star, Quote,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import advocate from "@/assets/advocate.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { telLink, whatsappLink, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JVK Law Firm — Adv. J. Vinay Kumar | Advocate in Visakhapatnam" },
      { name: "description", content: "Trusted legal solutions across civil, criminal, banking, property, family, arbitration and High Court matters. Book a consultation today." },
      { property: "og:title", content: "JVK Law Firm — Adv. J. Vinay Kumar" },
      { property: "og:description", content: "Professional Legal Solutions | Trusted Representation | Practical Advice." },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
  }),
  component: HomePage,
});

const WHY = [
  { icon: ShieldCheck, title: "Professional & Transparent", desc: "Reliable legal support delivered with integrity and complete transparency at every stage." },
  { icon: MessageSquareText, title: "Timely Case Updates", desc: "Clear, regular communication so you always know where your matter stands." },
  { icon: Sparkles, title: "Personalized Strategy", desc: "Tailored legal strategy designed around the specifics of your matter and goals." },
  { icon: Heart, title: "Ethical & Practical Solutions", desc: "Honest counsel and practical solutions — never short-term shortcuts." },
  { icon: Gavel, title: "Dedicated Court Representation", desc: "Strong, prepared representation in District Courts and the High Court of A.P." },
  { icon: Users, title: "Client-Focused Approach", desc: "Individuals, families, employees, businesses and corporates all served with care." },
];

const AREAS = [
  { icon: Scale, title: "Civil Litigation", desc: "Property suits, recovery, injunctions, partitions and civil proceedings." },
  { icon: Gavel, title: "Criminal Matters", desc: "Bail, defense, FIRs, complaints and criminal trial representation." },
  { icon: Landmark, title: "Banking & Financial", desc: "Loan disputes, recovery, SARFAESI, cheque bounce and banking fraud." },
  { icon: Users, title: "Family & Matrimonial", desc: "Divorce, custody, maintenance and family settlements handled sensitively." },
  { icon: HomeIcon, title: "Property & Documentation", desc: "Verification, drafting, registration guidance and dispute resolution." },
  { icon: Briefcase, title: "Corporate Advisory", desc: "Contracts, compliance, labour, arbitration and corporate legal support." },
];

const TESTIMONIALS = [
  { name: "Ravi K.", role: "Business Owner, Visakhapatnam", text: "Adv. Vinay Kumar handled our banking matter with exceptional professionalism. His clarity and timely updates gave us complete confidence." },
  { name: "Sundari M.", role: "Private Client", text: "He took time to understand our family matter and guided us with empathy. The resolution was practical and exactly what we needed." },
  { name: "Suresh P.", role: "Corporate Client", text: "Reliable advisory support across labour and arbitration. His drafting and representation have been consistently strong." },
  { name: "Anita R.", role: "Property Owner", text: "The legal opinion on our property was thorough and well-documented. We proceeded with our purchase with full peace of mind." },
];

function HomePage() {
  return (
    <>
      <HeroSection />
      <AdvocateIntro />
      <WhyChoose />
      <PracticeAreasPreview />
      <CourtRepresentation />
      <Testimonials />
      <CTASection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative -mt-20 min-h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="Premium courtroom with justice scale and law books" className="w-full h-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/40" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-3xl text-primary-foreground animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-accent" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">JVK Law Firm · Visakhapatnam</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            Trusted Legal Solutions With <span className="text-gradient-gold">Professional Representation</span>
          </h1>
          <p className="mt-7 text-base md:text-lg text-primary-foreground/85 leading-relaxed max-w-2xl">
            Welcome to the office of Adv. J. Vinay Kumar — reliable legal services delivered with commitment, transparency and practical solutions. We protect the rights and interests of individuals, families, employees, businesses and corporate clients through effective legal representation and consultation.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/book-consultation" className="inline-flex items-center gap-2 bg-gradient-gold text-gold-foreground px-7 py-3.5 text-sm font-semibold tracking-wide rounded-sm shadow-gold hover:shadow-elegant transition-smooth">
              Book Consultation <ArrowRight size={16} />
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-background/10 backdrop-blur border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 text-sm font-semibold tracking-wide rounded-sm hover:bg-background/20 transition-smooth">
              <MessageCircle size={16} /> WhatsApp Now
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { k: "10+", v: "Years of Practice" },
              { k: "500+", v: "Clients Served" },
              { k: "100%", v: "Client-Focused" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-serif text-3xl md:text-4xl text-accent font-semibold">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/70 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AdvocateIntro() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 right-12 bottom-12 bg-gradient-gold/30 rounded-sm" />
            <img src={advocate} alt="Adv. J. Vinay Kumar — Advocate & Legal Consultant" className="relative w-full h-auto rounded-sm shadow-elegant object-cover" width={1024} height={1280} loading="lazy" />
            <div className="absolute -bottom-6 -right-6 bg-background border border-border shadow-elegant p-5 max-w-[220px] hidden md:block">
              <div className="flex items-center gap-1 text-accent mb-1">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <div className="text-xs text-muted-foreground">Trusted by hundreds of clients in Visakhapatnam</div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="gold-divider" />
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">About the Advocate</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary font-semibold leading-tight">Meet Adv. J. Vinay Kumar</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Adv. J. Vinay Kumar is a dedicated Advocate and Legal Consultant providing professional legal services across civil litigation, criminal matters, banking disputes, property law, labour matters, arbitration proceedings, and High Court litigation.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With a client-focused approach and strong legal knowledge, he assists individuals, families, businesses and corporate clients with practical legal solutions and effective representation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/about" className="inline-flex items-center gap-2 bg-gradient-navy text-primary-foreground px-6 py-3 text-sm font-medium rounded-sm shadow-soft hover:shadow-elegant transition-smooth">
                Learn More <ArrowRight size={16} />
              </Link>
              <a href={telLink} className="inline-flex items-center gap-2 border border-primary/20 text-primary px-6 py-3 text-sm font-medium rounded-sm hover:bg-secondary transition-smooth">
                <Phone size={16} /> {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading eyebrow="Why Choose Us" title="Reliable Counsel. Practical Solutions." description="A modern legal practice built on professionalism, transparency and consistent client communication." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY.map((w) => (
            <div key={w.title} className="group bg-background border border-border p-8 rounded-sm hover-lift">
              <div className="w-14 h-14 rounded-sm bg-gradient-navy text-primary-foreground flex items-center justify-center mb-5 group-hover:bg-gradient-gold group-hover:text-gold-foreground transition-smooth">
                <w.icon size={24} />
              </div>
              <h3 className="font-serif text-xl text-primary font-semibold mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PracticeAreasPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading eyebrow="Practice Areas" title="Comprehensive Legal Expertise" description="Trusted representation across the most common civil, criminal and commercial matters." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AREAS.map((a) => (
            <Link key={a.title} to="/practice-areas" className="group relative bg-card border border-border p-8 rounded-sm overflow-hidden hover-lift">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <a.icon size={32} className="text-accent mb-4" />
              <h3 className="font-serif text-xl text-primary font-semibold mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{a.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-primary font-semibold">
                Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CourtRepresentation() {
  return (
    <section className="py-24 bg-gradient-navy text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 10% 30%, rgba(200,164,93,0.5) 0, transparent 35%), radial-gradient(circle at 90% 70%, rgba(200,164,93,0.4) 0, transparent 35%)",
      }} />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Court Practice</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-tight">Court Practice &amp; Representation</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-primary-foreground/85 leading-relaxed">
            <p>Adv. J. Vinay Kumar is actively practicing before the District Courts of Visakhapatnam and various surrounding courts, providing professional legal representation across civil, criminal, banking, labour, arbitration and property-related matters.</p>
            <p>Regular appearances and legal services are also provided before the High Court of Andhra Pradesh in diverse legal proceedings and litigation matters.</p>
            <p>With practical courtroom experience and a client-focused approach, effective legal assistance and representation are provided at different stages of litigation and dispute resolution.</p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {["District Courts, Visakhapatnam", "High Court of Andhra Pradesh", "Consumer Forums & Tribunals", "Arbitration Proceedings"].map((c) => (
                <div key={c} className="flex items-center gap-3 bg-background/5 border border-primary-foreground/15 px-4 py-3 rounded-sm">
                  <BookOpen size={18} className="text-accent" />
                  <span className="text-sm">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading eyebrow="Client Reviews" title="What Our Clients Say" description="Stories of trust, clarity and effective representation from real clients." />
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="relative bg-background border border-border p-8 rounded-sm hover-lift">
              <Quote className="absolute top-6 right-6 text-accent/30" size={48} />
              <div className="flex items-center gap-1 text-accent mb-4">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-muted-foreground leading-relaxed italic">"{t.text}"</p>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="font-serif text-lg text-primary">{t.name}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative bg-gradient-navy rounded-sm shadow-elegant p-10 md:p-16 text-primary-foreground overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-gold/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight">Need Legal Assistance?</h2>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed max-w-lg">
                Book a consultation today and receive professional legal guidance tailored to your matter.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href={telLink} className="inline-flex items-center gap-2 bg-gradient-gold text-gold-foreground px-6 py-3 text-sm font-semibold rounded-sm shadow-gold transition-smooth hover:shadow-elegant">
                <Phone size={16} /> Call Now
              </a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 text-sm font-semibold rounded-sm transition-smooth hover:opacity-90">
                <MessageCircle size={16} /> WhatsApp
              </a>
              <Link to="/book-consultation" className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-6 py-3 text-sm font-semibold rounded-sm hover:bg-background/10 transition-smooth">
                <Clock size={16} /> Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
