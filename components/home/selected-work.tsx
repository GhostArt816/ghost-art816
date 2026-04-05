import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Maison Blanc",
    category: "Brand Identity",
    image: "/images/project-1.jpg",
    year: "2024",
  },
  {
    id: 2,
    title: "Velvet House",
    category: "Restaurant Branding",
    image: "/images/project-2.jpg",
    year: "2024",
  },
  {
    id: 3,
    title: "Lumiere Paris",
    category: "Fashion Campaign",
    image: "/images/project-3.jpg",
    year: "2023",
  },
  {
    id: 4,
    title: "Heritage Collection",
    category: "Interior Design",
    image: "/images/project-4.jpg",
    year: "2023",
  },
];

export function SelectedWork() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-widest text-muted-foreground">
              Selected Work
            </p>
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              Recent Projects
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden items-center gap-2 text-sm uppercase tracking-widest transition-colors hover:text-muted-foreground md:flex"
          >
            View All
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href="/work"
              className="group relative"
            >
              <div
                className={`relative overflow-hidden ${
                  index % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10" />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-xl tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.category}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {project.year}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest transition-colors hover:text-muted-foreground"
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
