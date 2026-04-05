import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Digital Illustration",
    price: "250",
    description: "High-resolution digital artwork perfect for prints or digital use.",
    features: [
      "Full color digital painting",
      "Up to 2 revision rounds",
      "4000x3000px minimum resolution",
      "Print-ready file formats",
      "3-4 week turnaround",
      "Commercial rights available",
    ],
    featured: false,
  },
  {
    name: "Portrait Commission",
    price: "500",
    description: "Traditional or digital portrait capturing the essence of your subject.",
    features: [
      "Oil, acrylic, or digital medium",
      "Up to 3 revision rounds",
      "Choice of canvas size",
      "Professional framing options",
      "4-6 week turnaround",
      "Free shipping included",
    ],
    featured: true,
  },
  {
    name: "Large Scale Artwork",
    price: "1,200",
    description: "Statement pieces for homes, offices, or special occasions.",
    features: [
      "Any medium of choice",
      "Unlimited revisions",
      "Up to 48x60 inch canvas",
      "Premium framing included",
      "6-10 week turnaround",
      "Installation guidance",
    ],
    featured: false,
  },
];

export function PricingTiers() {
  return (
    <section className="py-24 md:py-32 bg-[var(--card)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
            Pricing
          </p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[var(--foreground)]">
            Commission Packages
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Starting prices for different commission types. Final pricing depends
            on complexity, size, and specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative rounded-2xl p-8 flex flex-col",
                tier.featured
                  ? "bg-[var(--primary)] ring-2 ring-[var(--primary)]"
                  : "bg-[var(--secondary)]"
              )}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-[var(--background)] px-4 py-1 text-xs font-medium text-[var(--foreground)]">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3
                  className={cn(
                    "font-serif text-2xl mb-2",
                    tier.featured
                      ? "text-[var(--primary-foreground)]"
                      : "text-[var(--foreground)]"
                  )}
                >
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    "text-sm",
                    tier.featured
                      ? "text-[var(--primary-foreground)]/80"
                      : "text-[var(--muted-foreground)]"
                  )}
                >
                  {tier.description}
                </p>
              </div>

              <div className="mb-8">
                <span
                  className={cn(
                    "text-sm",
                    tier.featured
                      ? "text-[var(--primary-foreground)]/80"
                      : "text-[var(--muted-foreground)]"
                  )}
                >
                  Starting at
                </span>
                <div className="flex items-baseline">
                  <span
                    className={cn(
                      "font-serif text-5xl tracking-tight",
                      tier.featured
                        ? "text-[var(--primary-foreground)]"
                        : "text-[var(--foreground)]"
                    )}
                  >
                    ${tier.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "h-5 w-5 flex-shrink-0",
                        tier.featured
                          ? "text-[var(--primary-foreground)]"
                          : "text-[var(--primary)]"
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm",
                        tier.featured
                          ? "text-[var(--primary-foreground)]"
                          : "text-[var(--foreground)]"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={cn(
                  "block w-full rounded-full py-3 px-6 text-center text-sm font-medium transition-all",
                  tier.featured
                    ? "bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--background)]/90"
                    : "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90"
                )}
              >
                Start Commission
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-[var(--muted-foreground)]">
          Custom projects and corporate commissions available.{" "}
          <Link href="/contact" className="text-[var(--primary)] hover:underline">
            Contact me
          </Link>{" "}
          for a personalized quote.
        </p>
      </div>
    </section>
  );
}
