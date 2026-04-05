import { PortfolioGallery } from "@/components/portfolio/portfolio-gallery";
import { PortfolioHero } from "@/components/portfolio/portfolio-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Ghost Art",
  description:
    "Explore the complete portfolio of Ghost Art. Browse through digital and traditional artwork including portraits, landscapes, illustrations, and abstract pieces.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGallery />
    </>
  );
}
