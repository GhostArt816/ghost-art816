"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ShoppingBag, X, Check } from "lucide-react";

const categories = ["All", "Original", "Print", "Digital"];

const products = [
  {
    id: 1,
    title: "Eternal Grace",
    category: "Original",
    price: 1800,
    image: "/images/portfolio-1.jpg",
    description: "Original oil on canvas, 24x36 inches. Framed and ready to hang.",
    available: true,
  },
  {
    id: 2,
    title: "Morning Mist - Limited Print",
    category: "Print",
    price: 120,
    image: "/images/portfolio-2.jpg",
    description: "Giclée print on archival paper, 16x20 inches. Edition of 50.",
    available: true,
  },
  {
    id: 3,
    title: "Enchanted Forest - Digital",
    category: "Digital",
    price: 45,
    image: "/images/portfolio-3.jpg",
    description: "High-resolution digital download. Print at any size up to 40x30 inches.",
    available: true,
  },
  {
    id: 4,
    title: "Timeless Objects",
    category: "Original",
    price: 950,
    image: "/images/portfolio-4.jpg",
    description: "Original oil on canvas, 18x24 inches. Unframed.",
    available: false,
  },
  {
    id: 5,
    title: "Geometric Dreams - Print",
    category: "Print",
    price: 85,
    image: "/images/portfolio-5.jpg",
    description: "Museum-quality print on heavyweight paper, 12x12 inches.",
    available: true,
  },
  {
    id: 6,
    title: "Cosmic Journey - Digital",
    category: "Digital",
    price: 35,
    image: "/images/portfolio-6.jpg",
    description: "Digital artwork bundle with multiple resolutions for prints and screens.",
    available: true,
  },
];

export function ShopGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [addedToCart, setAddedToCart] = useState<number[]>([]);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const handleAddToCart = (productId: number) => {
    setAddedToCart((prev) => [...prev, productId]);
    setTimeout(() => {
      setAddedToCart((prev) => prev.filter((id) => id !== productId));
    }, 2000);
  };

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

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group"
            >
              <button
                onClick={() => setSelectedProduct(product)}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-lg mb-4 text-left"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {!product.available && (
                  <div className="absolute inset-0 bg-[var(--background)]/60 flex items-center justify-center">
                    <span className="text-sm font-medium text-[var(--foreground)]">
                      Sold
                    </span>
                  </div>
                )}
              </button>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[var(--primary)]">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-xl text-[var(--foreground)] mt-1">
                    {product.title}
                  </h3>
                  <p className="text-lg text-[var(--muted-foreground)] mt-1">
                    ${product.price.toLocaleString()}
                  </p>
                </div>

                {product.available && (
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className={cn(
                      "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all",
                      addedToCart.includes(product.id)
                        ? "bg-green-500 text-white"
                        : "bg-[var(--secondary)] text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]"
                    )}
                  >
                    {addedToCart.includes(product.id) ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <ShoppingBag className="h-5 w-5" />
                    )}
                    <span className="sr-only">Add to cart</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Product Modal */}
        {selectedProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)]/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[var(--secondary)] text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>

            <div
              className="relative max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-[var(--card)] rounded-2xl p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-[var(--primary)]">
                  {selectedProduct.category}
                </span>
                <h3 className="font-serif text-3xl text-[var(--foreground)] mt-2">
                  {selectedProduct.title}
                </h3>
                <p className="font-serif text-4xl text-[var(--primary)] mt-4">
                  ${selectedProduct.price.toLocaleString()}
                </p>

                <p className="text-[var(--muted-foreground)] mt-6 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="mt-auto pt-8">
                  {selectedProduct.available ? (
                    <button
                      onClick={() => {
                        handleAddToCart(selectedProduct.id);
                        setSelectedProduct(null);
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-medium text-[var(--primary-foreground)] transition-all hover:bg-[var(--primary)]/90"
                    >
                      <ShoppingBag className="h-5 w-5" />
                      Add to Cart
                    </button>
                  ) : (
                    <div className="text-center">
                      <p className="text-[var(--muted-foreground)] mb-4">
                        This piece has been sold.
                      </p>
                      <a
                        href="/contact"
                        className="text-[var(--primary)] hover:underline"
                      >
                        Inquire about similar work
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
