const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin by understanding your brand, your goals, and your audience through in-depth research and collaborative workshops.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We synthesize insights into a clear strategic direction that will guide all creative decisions and ensure meaningful outcomes.",
  },
  {
    number: "03",
    title: "Creation",
    description:
      "Our team brings the strategy to life through meticulous design and development, with regular reviews and refinements.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "We deliver comprehensive assets and documentation, ensuring a seamless handoff and successful implementation.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="mb-2 text-sm uppercase tracking-widest text-muted-foreground">
            Our Process
          </p>
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
            How we work
          </h2>
          <p className="mt-4 text-muted-foreground">
            A collaborative approach refined over years of partnership with
            discerning clients.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-border pt-6">
              <span className="text-sm text-accent">{step.number}</span>
              <h3 className="mt-4 font-serif text-xl tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
