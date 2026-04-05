import Image from "next/image";

export function AboutHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
              About
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-[var(--foreground)] mb-6">
              The Artist Behind the Art
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              Creating art is more than a profession for me—it&apos;s a way of
              connecting with people, telling stories, and preserving moments
              that matter. Every brushstroke carries intention, every piece
              holds meaning.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/artist-portrait.jpg"
                alt="Ghost Art - Artist portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-[var(--primary)]/20 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
