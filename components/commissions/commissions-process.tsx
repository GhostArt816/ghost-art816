import { MessageSquare, Palette, Eye, Package } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Initial Consultation",
    description:
      "We discuss your vision, preferences, and requirements. Share reference images, ideas, or simply describe what you're imagining.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Concept & Sketching",
    description:
      "I create initial sketches and concepts for your approval. We refine the composition and details before moving forward.",
  },
  {
    icon: Eye,
    number: "03",
    title: "Creation & Revisions",
    description:
      "The artwork comes to life. You receive progress updates and can request revisions to ensure it matches your vision.",
  },
  {
    icon: Package,
    number: "04",
    title: "Delivery",
    description:
      "Digital files are delivered via secure link. Physical pieces are carefully packaged and shipped with tracking.",
  },
];

export function CommissionsProcess() {
  return (
    <section className="py-24 md:py-32 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[var(--foreground)]">
            The Commission Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-[var(--border)]" />
              )}

              <div className="relative">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--secondary)]">
                  <step.icon className="h-7 w-7 text-[var(--primary)]" />
                </div>
                <span className="absolute top-0 left-12 text-xs font-mono text-[var(--muted-foreground)]">
                  {step.number}
                </span>
              </div>

              <h3 className="font-serif text-xl text-[var(--foreground)] mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
