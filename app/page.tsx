import { HeroSection } from "@/components/home/hero-section";
import { SelectedWork } from "@/components/home/selected-work";
import { ServicesPreview } from "@/components/home/services-preview";
import { Philosophy } from "@/components/home/philosophy";
import { ClientsMarquee } from "@/components/home/clients-marquee";
import { ContactCta } from "@/components/home/contact-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientsMarquee />
      <SelectedWork />
      <ServicesPreview />
      <Philosophy />
      <ContactCta />
    </>
  );
}
