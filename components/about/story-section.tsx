import Image from "next/image";

export function StorySection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/founder.jpg"
              alt="Elena Marchetti, Founder & Creative Director"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">
              Our Story
            </p>
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              Founded on a belief in the power of design
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                Atelier Studio was born from a simple conviction: that
                exceptional design has the power to transform businesses,
                elevate experiences, and create lasting emotional connections.
              </p>
              <p className="leading-relaxed">
                What began as a solo practice by founder Elena Marchetti has
                evolved into a multidisciplinary studio of strategists,
                designers, and makers. Yet our founding principles remain
                unchanged: an unwavering commitment to craft, a deep respect for
                our clients&apos; visions, and a belief that the best work
                emerges from genuine collaboration.
              </p>
              <p className="leading-relaxed">
                Today, we partner with ambitious brands across fashion,
                hospitality, beauty, and culture, helping them articulate their
                unique stories through design that endures.
              </p>
            </div>
            <div className="mt-8">
              <p className="font-serif text-lg italic">Elena Marchetti</p>
              <p className="text-sm text-muted-foreground">
                Founder & Creative Director
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
