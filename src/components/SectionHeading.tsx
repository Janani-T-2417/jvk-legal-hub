export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-14`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
          <span className="gold-divider" />
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
            {eyebrow}
          </span>
          <span className="gold-divider" />
        </div>
      )}
      <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}