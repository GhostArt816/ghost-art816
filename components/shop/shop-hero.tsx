export function ShopHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
            Shop
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-[var(--foreground)] mb-6">
            Available Works
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
            Browse original artwork and limited edition prints available for
            purchase. Each piece is carefully crafted and ready to become part
            of your collection.
          </p>
        </div>
      </div>
    </section>
  );
}
