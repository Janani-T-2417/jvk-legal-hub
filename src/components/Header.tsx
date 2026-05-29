import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Advocate" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/legal-services", label: "Legal Services" },
  { to: "/blog", label: "Legal Updates" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="JVK Law Firm logo" className="h-12 w-12 object-contain" width={48} height={48} />
            <div className="hidden sm:block leading-tight">
              <div className="font-serif text-xl font-semibold text-primary">{SITE.name}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Advocate &amp; Legal Consultant
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                inactiveProps={{ className: "text-foreground/75 hover:text-primary" }}
                className="text-sm font-medium tracking-wide transition-smooth relative after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-gradient-gold after:transition-all hover:after:w-full data-[status=active]:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/book-consultation"
              className="hidden md:inline-flex items-center justify-center bg-gradient-navy text-primary-foreground px-5 py-2.5 text-sm font-medium tracking-wide rounded-sm shadow-soft hover:shadow-elegant transition-smooth"
            >
              Book Consultation
            </Link>
            <button
              aria-label="Toggle menu"
              className="lg:hidden p-2 text-primary"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-6 animate-fade-up">
            <nav className="flex flex-col gap-1 pt-2">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary rounded-sm transition-smooth"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/book-consultation"
                onClick={() => setOpen(false)}
                className="mt-2 text-center bg-gradient-navy text-primary-foreground px-5 py-3 text-sm font-medium tracking-wide rounded-sm"
              >
                Book Consultation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}