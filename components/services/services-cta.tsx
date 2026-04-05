import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServicesCta() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-2xl font-serif text-4xl tracking-tight md:text-5xl">
            <span className="text-balance">
              Let&apos;s discuss your project
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Every great project begins with a conversation. Reach out to explore
            how we can help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-2 border border-foreground bg-foreground px-8 py-4 text-sm uppercase tracking-widest text-background transition-all hover:bg-transparent hover:text-foreground"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
