import { ShopHero } from "@/components/shop/shop-hero";
import { ShopGrid } from "@/components/shop/shop-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Ghost Art",
  description:
    "Shop original artwork and limited edition prints by Ghost Art. Browse available pieces for purchase including paintings, digital prints, and exclusive collections.",
};

export default function ShopPage() {
  return (
    <>
      <ShopHero />
      <ShopGrid />
    </>
  );
}
