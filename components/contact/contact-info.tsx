import { Mail, Clock, Instagram, Twitter } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="rounded-lg bg-[var(--card)] p-6">
        <h3 className="font-serif text-xl text-[var(--foreground)] mb-6">
          Contact Information
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--secondary)] flex items-center justify-center">
              <Mail className="h-5 w-5 text-[var(--primary)]" />
            </div>
            <div>
              <p className="text-sm text-[var(--muted-foreground)]">Email</p>
              <a
                href="mailto:hello@ghostart.com"
                className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              >
                hello@ghostart.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--secondary)] flex items-center justify-center">
              <Clock className="h-5 w-5 text-[var(--primary)]" />
            </div>
            <div>
              <p className="text-sm text-[var(--muted-foreground)]">
                Response Time
              </p>
              <p className="text-[var(--foreground)]">Within 24-48 hours</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-[var(--card)] p-6">
        <h3 className="font-serif text-xl text-[var(--foreground)] mb-6">
          Follow Along
        </h3>

        <div className="flex gap-4">
          <a
            href="#"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--secondary)] text-[var(--muted-foreground)] hover:text-[var(--primary)] hover:bg-[var(--muted)] transition-all"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--secondary)] text-[var(--muted-foreground)] hover:text-[var(--primary)] hover:bg-[var(--muted)] transition-all"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>

        <p className="mt-4 text-sm text-[var(--muted-foreground)]">
          See works in progress and behind-the-scenes content.
        </p>
      </div>

      <div className="rounded-lg border border-[var(--primary)]/20 bg-[var(--primary)]/5 p-6">
        <h3 className="font-serif text-lg text-[var(--foreground)] mb-2">
          Commission Status
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-[var(--primary)]">Open for commissions</span>
        </div>
        <p className="text-sm text-[var(--muted-foreground)]">
          Current wait time: 2-3 weeks before starting new projects.
        </p>
      </div>
    </div>
  );
}
