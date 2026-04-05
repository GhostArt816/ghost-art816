const values = [
  {
    title: "Craft",
    description:
      "We believe in the power of meticulous execution. Every detail matters, from the broadest strategic decisions to the finest typographic adjustments.",
  },
  {
    title: "Collaboration",
    description:
      "The best work emerges from genuine partnership. We listen deeply, challenge respectfully, and create together with our clients.",
  },
  {
    title: "Integrity",
    description:
      "We are honest about what we do, how we do it, and what it will take. Our word is our bond, and transparency guides every relationship.",
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards and continuously push to exceed them. Good enough is never good enough.",
  },
];

export function ValuesSection() {
  return (
    <section className="border-t border-border bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="mb-2 text-sm uppercase tracking-widest text-muted-foreground">
            Our Values
          </p>
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
            The principles that guide us
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div key={value.title} className="border-t border-border pt-6">
              <span className="text-sm text-accent">0{index + 1}</span>
              <h3 className="mt-4 font-serif text-xl tracking-tight">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
