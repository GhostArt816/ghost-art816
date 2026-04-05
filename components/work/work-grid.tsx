"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Brand Identity",
  "Digital",
  "Campaign",
  "Packaging",
];

const projects = [
  {
    id: 1,
    title: "Maison Blanc",
    category: "Brand Identity",
    description: "Complete brand identity for a luxury cosmetics house",
    image: "/images/project-1.jpg",
    year: "2024",
  },
  {
    id: 2,
    title: "Velvet House",
    category: "Brand Identity",
    description: "Restaurant branding and interior design direction",
    image: "/images/project-2.jpg",
    year: "2024",
  },
  {
    id: 3,
    title: "Lumiere Paris",
    category: "Campaign",
    description: "Global fashion campaign for spring collection",
    image: "/images/project-3.jpg",
    year: "2023",
  },
  {
    id: 4,
    title: "Heritage Collection",
    category: "Digital",
    description: "Digital experience for luxury real estate",
    image: "/images/project-4.jpg",
    year: "2023",
  },
  {
    id: 5,
    title: "Noir Atelier",
    category: "Packaging",
    description: "Premium packaging for fine jewelry collection",
    image: "/images/project-5.jpg",
    year: "2023",
  },
  {
    id: 6,
    title: "Casa Elegance",
    category: "Brand Identity",
    description: "Boutique hotel brand identity and signage system",
    image: "/images/project-6.jpg",
    year: "2022",
  },
];

export function WorkGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="border-t border-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "border px-6 py-2 text-sm uppercase tracking-widest transition-all",
                activeCategory === category
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="group cursor-pointer">
              <div
                className={cn(
                  "relative overflow-hidden",
                  index % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"
                )}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="p-6 text-background">
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
