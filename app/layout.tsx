import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atelier Studio | Luxury Creative Agency",
  description:
    "A premium creative agency crafting exceptional brand experiences. We specialize in brand strategy, visual identity, and bespoke design solutions for discerning clients.",
  keywords: [
    "creative agency",
    "brand strategy",
    "luxury design",
    "visual identity",
    "premium branding",
    "design studio",
  ],
  authors: [{ name: "Atelier Studio" }],
  openGraph: {
    title: "Atelier Studio | Luxury Creative Agency",
    description:
      "A premium creative agency crafting exceptional brand experiences.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f6f3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
