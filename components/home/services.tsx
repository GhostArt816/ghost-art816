import { Palette, PenTool, Monitor, Frame } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Palette,
    title: "Traditional Art",
    description:
      "Oil paintings, acrylics, watercolors, and mixed media pieces created with timeless techniques.",
  },
  {
    icon: PenTool,
    title: "Illustration",
    description:
      "Custom illustrations for books, editorial, branding, and personal projects.",
  },
  {
    icon: Monitor,
    title: "Digital Art",
    description:
      "High-resolution digital paintings and concept art for any creative need.",
  },
  {
    icon: Frame,
    title: "Commissions",
    description:
      "Bespoke artwork tailored to your vision, from portraits to abstract pieces.",
  },
];

export function Services() {
  return (
    <section className="py-24 md:py-32 bg-[var(--card)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
            What I Do
          </p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[var(--foreground)] max-w-2xl mx-auto">
            Bringing Your Vision to Life
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-lg bg-[var(--secondary)] hover:bg-[var(--muted)] transition-colors"
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--primary)]/10">
                <service.icon className="h-6 w-6 text-[var(--primary)]" />
              </div>
              <h3 className="font-serif text-xl text-[var(--foreground)] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/commissions"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)] px-8 py-4 text-sm font-medium text-[var(--primary)] transition-all hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]"
          >
            Explore Commission Options
          </Link>
        </div>
      </div>
    </section>
  );
}
