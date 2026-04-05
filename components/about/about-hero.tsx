import Image from "next/image";

export function AboutHero() {
  return (
    <section className="pt-32 lg:pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">
              About Us
            </p>
            <h1 className="font-serif text-5xl tracking-tight md:text-6xl">
              <span className="text-balance">
                A studio built on craft and conviction
              </span>
            </h1>
          </div>
          <div className="flex items-end">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Founded in 2012, Atelier Studio has grown from a small design
              practice into an internationally recognized creative agency,
              serving clients who share our commitment to excellence and
              attention to detail.
            </p>
          </div>
        </div>
        <div className="mt-16 aspect-[21/9] overflow-hidden">
          <Image
            src="/images/team-studio.jpg"
            alt="Atelier Studio team at work"
            width={1920}
            height={820}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
