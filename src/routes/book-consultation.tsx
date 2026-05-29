import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, ShieldCheck, Clock, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SuccessDialog } from "@/components/SuccessDialog";
import { SITE, telLink, whatsappLink } from "@/lib/site";
import { z } from "zod";

export const Route = createFileRoute("/book-consultation")({
  head: () => ({
    meta: [
      { title: "Book Consultation — JVK Law Firm" },
      { name: "description", content: "Book a legal consultation with Adv. J. Vinay Kumar. Choose your preferred date, time and practice area." },
      { property: "og:title", content: "Book Consultation — JVK Law Firm" },
      { property: "og:description", content: "Request a professional legal consultation tailored to your matter." },
      { property: "og:url", content: "/book-consultation" },
    ],
    links: [{ rel: "canonical", href: "/book-consultation" }],
  }),
  component: BookConsultation,
});

const AREAS = [
  "Civil Litigation", "Criminal Matters", "Banking & Financial Disputes",
  "Family & Matrimonial", "Property & Documentation", "Corporate Advisory",
  "Arbitration", "Labour Law", "Consumer Disputes", "WILL Drafting", "Other",
];

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  phone: z.string().trim().min(7).max(20),
  email: z.string().trim().email().max(255),
  area: z.string().min(1, "Please select a practice area"),
  date: z.string().min(1, "Preferred date required"),
  time: z.string().min(1, "Preferred time required"),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

function BookConsultation() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", area: "", date: "", time: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [open, setOpen] = useState(false);

  const submit = (e: React.FormEvent) => {
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
    setForm({ name: "", phone: "", email: "", area: "", date: "", time: "", message: "" });
  };

  return (
    <>
      <PageHero eyebrow="Book Consultation" title="Request a Consultation" description="Share a few details and we'll confirm your appointment shortly." />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-5 gap-10">
          <aside className="lg:col-span-2 space-y-5">
            <div className="bg-gradient-navy text-primary-foreground p-8 rounded-sm shadow-elegant">
              <h2 className="font-serif text-2xl font-semibold mb-3">Why book with us?</h2>
              <ul className="space-y-3 text-sm text-primary-foreground/85">
                {[
                  { i: ShieldCheck, t: "Confidential & professional" },
                  { i: Clock, t: "Quick confirmation" },
                  { i: MessageCircle, t: "WhatsApp updates available" },
                ].map((b) => (
                  <li key={b.t} className="flex items-center gap-3"><b.i size={18} className="text-accent" /> {b.t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border p-6 rounded-sm">
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">Prefer to call?</div>
              <a href={telLink} className="flex items-center gap-2 font-serif text-2xl text-primary"><Phone size={20} /> {SITE.phoneDisplay}</a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm text-[#1a8a47] font-semibold"><MessageCircle size={16} /> Chat on WhatsApp</a>
            </div>
          </aside>

          <form onSubmit={submit} className="lg:col-span-3 bg-card border border-border p-8 md:p-10 rounded-sm shadow-soft space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" name="name" value={form.name} error={errors.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Mobile Number" name="phone" value={form.phone} error={errors.phone} onChange={(v) => setForm({ ...form, phone: v })} />
            </div>
            <Field label="Email" name="email" type="email" value={form.email} error={errors.email} onChange={(v) => setForm({ ...form, email: v })} />
            <div>
              <label htmlFor="area" className="block text-xs uppercase tracking-[0.2em] text-primary/70 font-semibold mb-2">Practice Area</label>
              <select id="area" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-smooth">
                <option value="">Select a practice area</option>
                {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
              {errors.area && <p className="mt-1.5 text-xs text-destructive">{errors.area}</p>}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Preferred Date" name="date" type="date" value={form.date} error={errors.date} onChange={(v) => setForm({ ...form, date: v })} />
              <Field label="Preferred Time" name="time" type="time" value={form.time} error={errors.time} onChange={(v) => setForm({ ...form, time: v })} />
            </div>
            <Field label="Message (optional)" name="message" textarea value={form.message} error={errors.message} onChange={(v) => setForm({ ...form, message: v })} />
            <button type="submit" className="inline-flex items-center gap-2 bg-gradient-navy text-primary-foreground px-7 py-3.5 text-sm font-semibold rounded-sm shadow-soft hover:shadow-elegant transition-smooth">
              Submit Request <Send size={16} />
            </button>
          </form>
        </div>
      </section>

      <SuccessDialog open={open} onClose={() => setOpen(false)} title="Thank You" message="Your consultation request has been successfully submitted. We will contact you shortly." />
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
        <textarea id={name} name={name} rows={4} value={value} onChange={(e) => onChange(e.target.value)} className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-smooth" />
      ) : (
        <input id={name} name={name} type={type} value={value} onChange={(e) => onChange(e.target.value)} className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-smooth" />
      )}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}