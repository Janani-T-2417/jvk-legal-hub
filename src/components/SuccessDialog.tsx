import { CheckCircle2 } from "lucide-react";

export function SuccessDialog({
  open,
  onClose,
  title,
  message,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 animate-fade-in">
      <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-background border border-border rounded-lg shadow-elegant max-w-md w-full p-8 text-center animate-fade-up">
        <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="font-serif text-2xl text-primary mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{message}</p>
        <button
          onClick={onClose}
          className="mt-6 bg-gradient-navy text-primary-foreground px-6 py-2.5 rounded-sm text-sm font-medium hover:shadow-elegant transition-smooth"
        >
          Close
        </button>
      </div>
    </div>
  );
}