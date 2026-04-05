import { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { StorySection } from "@/components/about/story-section";
import { ValuesSection } from "@/components/about/values-section";
import { TeamSection } from "@/components/about/team-section";
import { AwardsBanner } from "@/components/about/awards-banner";

export const metadata: Metadata = {
  title: "About | Atelier Studio",
  description:
    "Learn about our story, values, and the team behind Atelier Studio. We are a luxury creative agency dedicated to exceptional brand experiences.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <AwardsBanner />
    </>
  );
}
