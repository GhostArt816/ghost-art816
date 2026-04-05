import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-24 md:py-32 bg-[var(--card)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--secondary)] to-[var(--background)] p-12 md:p-20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--primary)]/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-[var(--foreground)] mb-6 text-balance">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto mb-10">
              Whether you have a clear vision or just a spark of an idea, let&apos;s
              work together to bring your artistic dreams to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-medium text-[var(--primary-foreground)] transition-all hover:bg-[var(--primary)]/90"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/commissions"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-8 py-4 text-sm font-medium text-[var(--foreground)] transition-all hover:bg-[var(--secondary)]"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
