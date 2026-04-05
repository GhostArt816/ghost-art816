import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutValues } from "@/components/about/about-values";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Ghost Art",
  description:
    "Learn about Ghost Art, the artist behind the custom artwork. Discover the creative journey, artistic philosophy, and passion for bringing visions to life.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
    </>
  );
}
