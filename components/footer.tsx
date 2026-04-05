import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";

const navigation = {
  main: [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Commissions", href: "/commissions" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="mb-12 text-center">
          <Link href="/" className="inline-block">
            <span className="font-serif text-3xl tracking-tight text-[var(--foreground)]">
              Ghost Art
            </span>
          </Link>
          <p className="mt-4 text-sm text-[var(--muted-foreground)] max-w-md mx-auto">
            Creating unique custom artwork that brings your creative visions to
            life through digital and traditional mediums.
          </p>
        </div>

        <nav
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-12 flex justify-center gap-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-[var(--muted-foreground)]">
          &copy; {new Date().getFullYear()} Ghost Art. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
