import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featuredWorks = [
  {
    id: 1,
    title: "Eternal Grace",
    category: "Portrait",
    image: "/images/portfolio-1.jpg",
  },
  {
    id: 2,
    title: "Morning Mist",
    category: "Landscape",
    image: "/images/portfolio-2.jpg",
  },
  {
    id: 3,
    title: "Enchanted Forest",
    category: "Digital Art",
    image: "/images/portfolio-3.jpg",
  },
  {
    id: 4,
    title: "Timeless Objects",
    category: "Still Life",
    image: "/images/portfolio-4.jpg",
  },
];

export function FeaturedWork() {
  return (
    <section className="py-24 md:py-32 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
              Selected Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[var(--foreground)]">
              Featured Pieces
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            View All Work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredWorks.map((work, index) => (
            <Link
              key={work.id}
              href={`/portfolio/${work.id}`}
              className={`group relative overflow-hidden rounded-lg ${
                index === 0 || index === 3 ? "md:aspect-[4/3]" : "md:aspect-[4/5]"
              } aspect-[4/3]`}
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-xs uppercase tracking-widest text-[var(--primary)] mb-2">
                  {work.category}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                  {work.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
