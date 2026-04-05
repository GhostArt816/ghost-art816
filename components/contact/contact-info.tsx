import { Mail, MapPin } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="mb-8 font-serif text-2xl">Get in Touch</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Mail className="mt-1 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </p>
              <a
                href="mailto:hello@atelierstudio.com"
                className="text-foreground transition-colors hover:text-muted-foreground"
              >
                hello@atelierstudio.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                Location
              </p>
              <p className="text-foreground">
                New York, NY
                <br />
                <span className="text-muted-foreground">
                  Available for global projects
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-12">
        <h3 className="mb-4 font-serif text-xl">Connect</h3>
        <div className="flex flex-col gap-3">
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Behance
          </a>
        </div>
      </div>

      <div className="border-t border-border pt-12">
        <h3 className="mb-4 font-serif text-xl">New Business</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          For new project inquiries, please fill out the form or email us
          directly. We typically respond within 48 hours.
        </p>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <span className="text-sm text-muted-foreground">
            Currently accepting new projects
          </span>
        </div>
      </div>
    </div>
  );
}
