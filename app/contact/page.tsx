import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ghost Art",
  description:
    "Get in touch with Ghost Art for custom artwork commissions, inquiries, or collaborations. Start your art project today.",
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
            Contact
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-[var(--foreground)] mb-6">
            Let&apos;s Create Together
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
            Whether you have a clear vision or just a spark of an idea, I&apos;d
            love to hear from you. Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
