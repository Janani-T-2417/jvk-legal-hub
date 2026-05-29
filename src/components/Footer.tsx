import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE, telLink, mailLink, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-secondary/60 border-t border-border mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="JVK logo" className="h-14 w-14 object-contain" width={56} height={56} loading="lazy" />
              <div>
                <div className="font-serif text-xl text-primary font-semibold">{SITE.name}</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Advocate &amp; Legal Consultant
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Reliable legal services delivered with professionalism, transparency and practical solutions across civil, criminal, banking, labour, property and High Court matters.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Facebook" className="p-2 bg-background border border-border rounded-sm text-primary hover:bg-gradient-navy hover:text-primary-foreground transition-smooth"><Facebook size={16} /></a>
              <a href="#" aria-label="Instagram" className="p-2 bg-background border border-border rounded-sm text-primary hover:bg-gradient-navy hover:text-primary-foreground transition-smooth"><Instagram size={16} /></a>
              <a href="#" aria-label="LinkedIn" className="p-2 bg-background border border-border rounded-sm text-primary hover:bg-gradient-navy hover:text-primary-foreground transition-smooth"><Linkedin size={16} /></a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="p-2 bg-background border border-border rounded-sm text-primary hover:bg-gradient-navy hover:text-primary-foreground transition-smooth"><MessageCircle size={16} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Advocate" },
                { to: "/practice-areas", label: "Practice Areas" },
                { to: "/legal-services", label: "Legal Services" },
                { to: "/blog", label: "Legal Updates" },
                { to: "/book-consultation", label: "Book Consultation" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-primary transition-smooth">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-primary mb-4">Practice Areas</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>Civil Litigation</li>
              <li>Criminal Matters</li>
              <li>Banking &amp; Financial Disputes</li>
              <li>Family &amp; Matrimonial</li>
              <li>Property &amp; Documentation</li>
              <li>Corporate Advisory</li>
              <li>Arbitration Matters</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-primary mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><MapPin size={16} className="text-accent mt-0.5 shrink-0" /><span>{SITE.address.line1}, {SITE.address.line2}, {SITE.address.line3}</span></li>
              <li className="flex gap-3"><Phone size={16} className="text-accent mt-0.5 shrink-0" /><a href={telLink} className="hover:text-primary">{SITE.phoneDisplay}</a></li>
              <li className="flex gap-3"><Mail size={16} className="text-accent mt-0.5 shrink-0" /><a href={mailLink} className="hover:text-primary break-all">{SITE.email}</a></li>
              <li className="flex gap-3"><Clock size={16} className="text-accent mt-0.5 shrink-0" /><span>{SITE.hours.weekdays}<br />{SITE.hours.sunday}</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2025 JVK LAW FIRM. All Rights Reserved.</p>
          <p>Designed with elegance for trusted legal representation.</p>
        </div>
      </div>
    </footer>
  );
}