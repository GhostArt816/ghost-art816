import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactCta() {
  return (
    <section className="border-t border-border bg-foreground py-24 text-background lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="mb-4 text-sm uppercase tracking-widest text-background/60">
            Start a Conversation
          </p>
          <h2 className="max-w-3xl font-serif text-4xl tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-balance">
              Ready to elevate your brand experience?
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-background/70">
            We would love to hear about your project and explore how we can
            bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-2 border border-background bg-background px-8 py-4 text-sm uppercase tracking-widest text-foreground transition-all hover:bg-transparent hover:text-background"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
