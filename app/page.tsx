import { Hero } from "@/components/home/hero";
import { FeaturedWork } from "@/components/home/featured-work";
import { Services } from "@/components/home/services";
import { Testimonials } from "@/components/home/testimonials";
import { CallToAction } from "@/components/home/call-to-action";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Services />
      <Testimonials />
      <CallToAction />
    </>
  );
}
