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
  title: "Ghost Art | Custom Artwork & Commissions",
  description:
    "Discover unique custom artwork by Ghost Art. Specializing in both digital and traditional mediums, we bring your creative visions to life through bespoke commissions and original pieces.",
  keywords: [
    "custom artwork",
    "art commissions",
    "digital art",
    "traditional art",
    "ghost art",
    "original paintings",
    "illustration",
  ],
  authors: [{ name: "Ghost Art" }],
  openGraph: {
    title: "Ghost Art | Custom Artwork & Commissions",
    description:
      "Discover unique custom artwork by Ghost Art. Specializing in both digital and traditional mediums.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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
