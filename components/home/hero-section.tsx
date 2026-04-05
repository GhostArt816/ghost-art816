import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-32">
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">
              Creative Agency
            </p>
            <h1 className="font-serif text-5xl leading-tight tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-balance">
                Where vision meets
                <br />
                <em className="not-italic text-accent">exquisite</em> craft
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              We are a luxury creative agency specializing in brand strategy,
              visual identity, and bespoke design solutions for the world&apos;s
              most discerning clients.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 border border-foreground bg-foreground px-8 py-4 text-sm uppercase tracking-widest text-background transition-all hover:bg-transparent hover:text-foreground"
              >
                View Our Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground transition-colors hover:text-muted-foreground"
              >
                Start a Project
              </Link>
            </div>
          </div>
          <div className="relative order-1 aspect-[4/5] overflow-hidden lg:order-2">
            <Image
              src="/images/hero-agency.jpg"
              alt="Atelier Studio creative workspace"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
