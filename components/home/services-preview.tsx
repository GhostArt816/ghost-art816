import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description:
      "We define the essence of your brand through research, positioning, and strategic frameworks that guide every creative decision.",
  },
  {
    number: "02",
    title: "Visual Identity",
    description:
      "From logos to complete visual systems, we craft identities that are distinctive, memorable, and built to endure.",
  },
  {
    number: "03",
    title: "Digital Experience",
    description:
      "We design and develop digital platforms that elevate your brand presence and create meaningful connections.",
  },
  {
    number: "04",
    title: "Art Direction",
    description:
      "We bring creative visions to life through photography, film, and multimedia campaigns that captivate audiences.",
  },
];

export function ServicesPreview() {
  return (
    <section className="border-t border-border bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="mb-2 text-sm uppercase tracking-widest text-muted-foreground">
            Our Services
          </p>
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
            Comprehensive creative solutions
          </h2>
        </div>

        <div className="grid gap-0 divide-y divide-border">
          {services.map((service) => (
            <div
              key={service.number}
              className="group grid gap-4 py-8 md:grid-cols-12 md:items-center md:gap-8"
            >
              <span className="text-sm text-muted-foreground md:col-span-1">
                {service.number}
              </span>
              <h3 className="font-serif text-2xl tracking-tight md:col-span-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground md:col-span-6">
                {service.description}
              </p>
              <div className="flex justify-end md:col-span-2">
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-foreground" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-foreground px-8 py-4 text-sm uppercase tracking-widest transition-all hover:bg-foreground hover:text-background"
          >
            Explore All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
