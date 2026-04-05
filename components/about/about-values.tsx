import Link from "next/link";
import { Heart, Sparkles, Handshake } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description:
      "Every piece is created with genuine love for the craft. Art isn't just what I do—it's who I am.",
  },
  {
    icon: Sparkles,
    title: "Quality Focused",
    description:
      "I use the finest materials and dedicate the time needed to ensure every detail meets the highest standards.",
  },
  {
    icon: Handshake,
    title: "Client-Centered",
    description:
      "Your vision guides the creative process. I'm here to bring your ideas to life, not impose my own.",
  },
];

export function AboutValues() {
  return (
    <section className="py-24 md:py-32 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
            My Values
          </p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[var(--foreground)]">
            What I Stand For
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value) => (
            <div
              key={value.title}
              className="text-center p-8 rounded-lg bg-[var(--card)]"
            >
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--primary)]/10">
                <value.icon className="h-7 w-7 text-[var(--primary)]" />
              </div>
              <h3 className="font-serif text-xl text-[var(--foreground)] mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-[var(--muted-foreground)] mb-8 max-w-2xl mx-auto">
            Ready to start a creative journey together? I&apos;d love to hear
            about your project and explore how we can bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-medium text-[var(--primary-foreground)] transition-all hover:bg-[var(--primary)]/90"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </section>
  );
}
