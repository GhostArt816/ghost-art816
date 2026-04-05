"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "brand-strategy",
    number: "01",
    title: "Brand Strategy",
    description:
      "We define the essence of your brand through comprehensive research, competitive analysis, and strategic frameworks that guide every creative decision.",
    offerings: [
      "Brand Positioning",
      "Market Research & Analysis",
      "Brand Architecture",
      "Messaging Framework",
      "Competitive Audit",
      "Brand Guidelines",
    ],
  },
  {
    id: "visual-identity",
    number: "02",
    title: "Visual Identity",
    description:
      "From logos to complete visual systems, we craft identities that are distinctive, memorable, and built to endure across all touchpoints.",
    offerings: [
      "Logo Design",
      "Typography Systems",
      "Color Palette Development",
      "Iconography",
      "Pattern & Texture Design",
      "Brand Collateral",
    ],
  },
  {
    id: "digital-experience",
    number: "03",
    title: "Digital Experience",
    description:
      "We design and develop digital platforms that elevate your brand presence and create meaningful connections with your audience.",
    offerings: [
      "Website Design & Development",
      "User Experience Design",
      "E-commerce Platforms",
      "Mobile Applications",
      "Digital Product Design",
      "Interactive Experiences",
    ],
  },
  {
    id: "art-direction",
    number: "04",
    title: "Art Direction",
    description:
      "We bring creative visions to life through photography, film, and multimedia campaigns that captivate and inspire audiences.",
    offerings: [
      "Campaign Concepting",
      "Photo Direction",
      "Video Production",
      "Content Strategy",
      "Social Media Design",
      "Editorial Design",
    ],
  },
  {
    id: "packaging",
    number: "05",
    title: "Packaging Design",
    description:
      "We create packaging that tells your brand story, enhances product value, and delivers memorable unboxing experiences.",
    offerings: [
      "Structural Design",
      "Label & Wrap Design",
      "Sustainable Packaging",
      "Limited Editions",
      "Gift Sets",
      "Retail Displays",
    ],
  },
  {
    id: "environmental",
    number: "06",
    title: "Environmental Design",
    description:
      "We extend your brand into physical spaces, creating immersive environments that engage all the senses.",
    offerings: [
      "Retail Design",
      "Exhibition Design",
      "Wayfinding Systems",
      "Hospitality Spaces",
      "Pop-up Experiences",
      "Signage Systems",
    ],
  },
];

export function ServicesList() {
  const [openService, setOpenService] = useState<string | null>(
    "brand-strategy"
  );

  return (
    <section className="border-t border-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="divide-y divide-border">
          {services.map((service) => (
            <div key={service.id} className="py-8">
              <button
                onClick={() =>
                  setOpenService(
                    openService === service.id ? null : service.id
                  )
                }
                className="flex w-full items-center justify-between text-left"
              >
                <div className="flex items-center gap-8">
                  <span className="text-sm text-muted-foreground">
                    {service.number}
                  </span>
                  <h3 className="font-serif text-2xl tracking-tight md:text-3xl">
                    {service.title}
                  </h3>
                </div>
                {openService === service.id ? (
                  <Minus className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Plus className="h-5 w-5 text-muted-foreground" />
                )}
              </button>

              <div
                className={cn(
                  "grid transition-all duration-300",
                  openService === service.id
                    ? "mt-8 grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-8 md:grid-cols-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div>
                      <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
                        What we offer
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.offerings.map((offering) => (
                          <li key={offering} className="text-sm">
                            {offering}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
