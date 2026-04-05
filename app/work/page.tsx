import { Metadata } from "next";
import { WorkHero } from "@/components/work/work-hero";
import { WorkGrid } from "@/components/work/work-grid";

export const metadata: Metadata = {
  title: "Work | Atelier Studio",
  description:
    "Explore our portfolio of luxury brand identities, digital experiences, and creative campaigns for discerning clients.",
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkGrid />
    </>
  );
}
