import { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesList } from "@/components/services/services-list";
import { ProcessSection } from "@/components/services/process-section";
import { ServicesCta } from "@/components/services/services-cta";

export const metadata: Metadata = {
  title: "Services | Atelier Studio",
  description:
    "Comprehensive creative services including brand strategy, visual identity, digital experience design, and art direction.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <ServicesCta />
    </>
  );
}
