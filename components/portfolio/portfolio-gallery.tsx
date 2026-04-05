"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const categories = ["All", "Portrait", "Landscape", "Digital", "Abstract", "Still Life"];

const artworks = [
  {
    id: 1,
    title: "Eternal Grace",
    category: "Portrait",
    image: "/images/portfolio-1.jpg",
    description: "Oil on canvas, 24x36 inches",
  },
  {
    id: 2,
    title: "Morning Mist",
    category: "Landscape",
    image: "/images/portfolio-2.jpg",
    description: "Acrylic on canvas, 30x40 inches",
  },
  {
    id: 3,
    title: "Enchanted Forest",
    category: "Digital",
    image: "/images/portfolio-3.jpg",
    description: "Digital painting, 4000x3000px",
  },
  {
    id: 4,
    title: "Timeless Objects",
    category: "Still Life",
    image: "/images/portfolio-4.jpg",
    description: "Oil on canvas, 18x24 inches",
  },
  {
    id: 5,
    title: "Geometric Dreams",
    category: "Abstract",
    image: "/images/portfolio-5.jpg",
    description: "Mixed media on canvas, 36x36 inches",
  },
  {
    id: 6,
    title: "Cosmic Journey",
    category: "Digital",
    image: "/images/portfolio-6.jpg",
    description: "Digital painting, 5000x3500px",
  },
];

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);

  const filteredArtworks =
    activeCategory === "All"
      ? artworks
      : artworks.filter((artwork) => artwork.category === activeCategory);

  return (
    <section className="pb-24 md:pb-32 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                  : "bg-[var(--secondary)] text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((artwork) => (
            <button
              key={artwork.id}
              onClick={() => setSelectedArtwork(artwork)}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg text-left"
            >
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs uppercase tracking-widest text-[var(--primary)] mb-1">
                  {artwork.category}
                </p>
                <h3 className="font-serif text-xl text-[var(--foreground)]">
                  {artwork.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedArtwork && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)]/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedArtwork(null)}
          >
            <button
              onClick={() => setSelectedArtwork(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[var(--secondary)] text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-xs uppercase tracking-widest text-[var(--primary)] mb-2">
                  {selectedArtwork.category}
                </p>
                <h3 className="font-serif text-3xl text-[var(--foreground)] mb-2">
                  {selectedArtwork.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {selectedArtwork.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
