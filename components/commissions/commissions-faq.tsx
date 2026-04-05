"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const faqs = [
  {
    question: "How long does a commission typically take?",
    answer:
      "Turnaround times vary based on the type and complexity of the piece. Digital illustrations typically take 3-4 weeks, portraits 4-6 weeks, and large-scale artwork 6-10 weeks. Rush orders may be accommodated for an additional fee.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "I accept credit cards, PayPal, and bank transfers. For commissions over $500, a 50% deposit is required to begin work, with the remaining balance due upon completion.",
  },
  {
    question: "Can I request revisions during the process?",
    answer:
      "Yes! Depending on your package, you'll have 2-3 revision rounds included. Additional revisions can be arranged for a small fee. I always keep you updated throughout the process.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, I ship worldwide. Shipping costs for physical artwork are calculated based on destination and piece size. All shipments are insured and include tracking.",
  },
  {
    question: "What if I'm not satisfied with the final piece?",
    answer:
      "Your satisfaction is my priority. We work closely throughout the process with regular check-ins and revisions to ensure the final piece meets your expectations. Issues are addressed before the piece is finalized.",
  },
  {
    question: "Can I use the artwork commercially?",
    answer:
      "Commercial usage rights can be included in your commission for an additional fee. This includes using the artwork for merchandise, marketing, or other business purposes. We'll discuss licensing terms during consultation.",
  },
];

export function CommissionsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-[var(--card)]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
            FAQ
          </p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[var(--foreground)]">
            Common Questions
          </h2>
        </div>

        <div className="divide-y divide-[var(--border)]">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-start justify-between text-left"
              >
                <span className="font-medium text-[var(--foreground)] pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 flex-shrink-0 text-[var(--muted-foreground)] transition-transform",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96 mt-4" : "max-h-0"
                )}
              >
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[var(--muted-foreground)] mb-4">
            Have another question?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-8 py-3 text-sm font-medium text-[var(--primary-foreground)] transition-all hover:bg-[var(--primary)]/90"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
