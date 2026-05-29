import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SuccessDialog } from "@/components/SuccessDialog";
import { SITE, telLink, mailLink, whatsappLink } from "@/lib/site";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact JVK Law Firm — Adv. J. Vinay Kumar, Visakhapatnam" },
      { name: "description", content: "Reach Adv. J. Vinay Kumar in Visakhapatnam by phone, WhatsApp, email or visit our office at Jagadamba Junction." },
      { property: "og:title", content: "Contact — JVK Law Firm" },
      { property: "og:description", content: "Get in touch for legal consultation and representation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  email: z.string().trim().email("Valid email required").max(255),
  subject: z.string().trim().min(2, "Subject is required").max(200),
  message: z.string().trim().min(5, "Message is required").max(2000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [open, setOpen] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setOpen(true);
    setForm({ name: "", phone: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="Get in Touch" description="Reach out to discuss your matter — by phone, WhatsApp, email or visit our office in Visakhapatnam." />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, label: "Phone", value: SITE.phoneDisplay, href: telLink },
              { icon: MessageCircle, label: "WhatsApp", value: SITE.phoneDisplay, href: whatsappLink() },
              { icon: Mail, label: "Email", value: SITE.email, href: mailLink },
              { icon: MapPin, label: "Office Address", value: `${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.line3}` },
              { icon: Clock, label: "Working Hours", value: `${SITE.hours.weekdays} · ${SITE.hours.sunday}` },
            ].map((c) => (
              <a key={c.label} href={c.href} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-start gap-4 bg-card border border-border p-5 rounded-sm hover-lift">
                <div className="w-11 h-11 rounded-sm bg-gradient-navy text-primary-foreground flex items-center justify-center shrink-0">
                  <c.icon size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold">{c.label}</div>
                  <div className="text-sm text-primary mt-1 leading-relaxed">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 bg-card border border-border p-8 md:p-10 rounded-sm shadow-soft space-y-5">
            <div>
              <h2 className="font-serif text-3xl text-primary font-semibold">Send Us a Message</h2>
              <p className="text-sm text-muted-foreground mt-1">We'll get back to you within 24 hours.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" value={form.name} error={errors.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Phone" name="phone" value={form.phone} error={errors.phone} onChange={(v) => setForm({ ...form, phone: v })} />
            </div>
            <Field label="Email" name="email" type="email" value={form.email} error={errors.email} onChange={(v) => setForm({ ...form, email: v })} />
            <Field label="Subject" name="subject" value={form.subject} error={errors.subject} onChange={(v) => setForm({ ...form, subject: v })} />
            <Field label="Message" name="message" textarea value={form.message} error={errors.message} onChange={(v) => setForm({ ...form, message: v })} />
            <button type="submit" className="inline-flex items-center gap-2 bg-gradient-navy text-primary-foreground px-7 py-3.5 text-sm font-semibold rounded-sm shadow-soft hover:shadow-elegant transition-smooth">
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-sm overflow-hidden border border-border shadow-soft">
            <iframe
              title="JVK Law Firm office location"
              src="https://www.google.com/maps?q=Jagadamba+Junction,+Visakhapatnam&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>

      <SuccessDialog open={open} onClose={() => setOpen(false)} title="Message Received" message="Thank you for contacting JVK Law Firm. We will get back to you shortly." />
    </>
  );
}

function Field({ label, name, value, onChange, error, type = "text", textarea = false }: {
  label: string; name: string; value: string; onChange: (v: string) => void; error?: string; type?: string; textarea?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.2em] text-primary/70 font-semibold mb-2">{label}</label>
      {textarea ? (
        <textarea id={name} name={name} rows={5} value={value} onChange={(e) => onChange(e.target.value)} className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-smooth" />
      ) : (
        <input id={name} name={name} type={type} value={value} onChange={(e) => onChange(e.target.value)} className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-smooth" />
      )}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}