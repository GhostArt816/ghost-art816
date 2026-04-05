import { CommissionsHero } from "@/components/commissions/commissions-hero";
import { PricingTiers } from "@/components/commissions/pricing-tiers";
import { CommissionsProcess } from "@/components/commissions/commissions-process";
import { CommissionsFAQ } from "@/components/commissions/commissions-faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commissions & Pricing | Ghost Art",
  description:
    "Commission custom artwork from Ghost Art. View pricing for portraits, digital art, illustrations, and traditional paintings. Start your bespoke art project today.",
};

export default function CommissionsPage() {
  return (
    <>
      <CommissionsHero />
      <PricingTiers />
      <CommissionsProcess />
      <CommissionsFAQ />
    </>
  );
}
