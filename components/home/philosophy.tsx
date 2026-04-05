export function Philosophy() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-2 text-sm uppercase tracking-widest text-muted-foreground">
              Our Philosophy
            </p>
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              Dedicated to craft, driven by purpose
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We believe that exceptional design is born from the intersection
              of deep understanding and meticulous execution. Every project
              begins with listening, every solution is refined through
              collaboration, and every detail is considered with intention.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Our work is guided by a commitment to timeless aesthetics,
              meaningful storytelling, and the pursuit of excellence in every
              touchpoint.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-8 border-t border-border pt-12 md:grid-cols-3">
          <div>
            <span className="font-serif text-5xl text-accent">150+</span>
            <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
              Projects Completed
            </p>
          </div>
          <div>
            <span className="font-serif text-5xl text-accent">12</span>
            <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
              Years of Experience
            </p>
          </div>
          <div>
            <span className="font-serif text-5xl text-accent">40+</span>
            <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
              Industry Awards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
