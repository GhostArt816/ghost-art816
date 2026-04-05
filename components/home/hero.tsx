import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-artwork.jpg"
          alt="Ghost Art featured artwork"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/70 via-[var(--background)]/50 to-[var(--background)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-6">
          Custom Artwork & Commissions
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-[var(--foreground)] text-balance max-w-4xl mx-auto leading-tight">
          Art That Speaks to Your Soul
        </h1>
        <p className="mt-8 text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
          Transforming visions into timeless pieces. Specializing in both
          digital and traditional mediums, creating bespoke artwork that tells
          your unique story.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-medium text-[var(--primary-foreground)] transition-all hover:bg-[var(--primary)]/90"
          >
            View Portfolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/commissions"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-8 py-4 text-sm font-medium text-[var(--foreground)] transition-all hover:bg-[var(--secondary)]"
          >
            Commission a Piece
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-[var(--muted-foreground)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
