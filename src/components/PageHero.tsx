export function PageHero({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="relative bg-gradient-navy text-primary-foreground pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, rgba(200,164,93,0.6) 0, transparent 40%), radial-gradient(circle at 80% 80%, rgba(200,164,93,0.4) 0, transparent 40%)",
      }} />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          {eyebrow && (
            <div className="flex items-center gap-3 justify-center mb-4">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">{eyebrow}</span>
              <span className="h-px w-10 bg-accent" />
            </div>
          )}
          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight">{title}</h1>
          {description && (
            <p className="mt-5 text-base md:text-lg text-primary-foreground/80 leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}