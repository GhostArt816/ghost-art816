"use client";

import { useState } from "react";
import { ArrowRight, Loader2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Brand Strategy",
  "Visual Identity",
  "Digital Experience",
  "Art Direction",
  "Packaging Design",
  "Other",
];

const budgetRanges = [
  "Under $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Not sure yet",
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center border border-foreground">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="font-serif text-2xl">Thank you</h3>
        <p className="mt-2 text-muted-foreground">
          We have received your message and will be in touch within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
            placeholder="Jane"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
          placeholder="jane@company.com"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
          placeholder="Your company name"
        />
      </div>

      <div>
        <label
          htmlFor="projectType"
          className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground"
        >
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          className="w-full border-b border-border bg-transparent py-3 text-foreground focus:border-foreground focus:outline-none transition-colors"
        >
          <option value="">Select a service</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="budget"
          className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground"
        >
          Budget Range
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full border-b border-border bg-transparent py-3 text-foreground focus:border-foreground focus:outline-none transition-colors"
        >
          <option value="">Select a range</option>
          {budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground"
        >
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your project, goals, and timeline..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "group inline-flex items-center gap-2 border border-foreground bg-foreground px-8 py-4 text-sm uppercase tracking-widest text-background transition-all hover:bg-transparent hover:text-foreground",
          isSubmitting && "opacity-70 cursor-not-allowed"
        )}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Inquiry
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}
