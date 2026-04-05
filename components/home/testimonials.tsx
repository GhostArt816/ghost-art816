import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The portrait exceeded all my expectations. It captured not just the likeness but the very essence of my grandmother. A true treasure.",
    author: "Sarah Mitchell",
    role: "Portrait Commission",
  },
  {
    quote:
      "Working with Ghost Art was an incredible experience. They understood my vision perfectly and delivered a masterpiece for our home.",
    author: "James & Emily Porter",
    role: "Custom Landscape",
  },
  {
    quote:
      "The digital artwork for our brand identity was stunning. Professional, creative, and delivered beyond the deadline.",
    author: "Michael Chen",
    role: "Brand Illustration",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[var(--foreground)]">
            What Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-lg border border-[var(--border)] bg-[var(--card)]"
            >
              <Quote className="h-8 w-8 text-[var(--primary)]/30 mb-6" />
              <blockquote className="text-[var(--foreground)] leading-relaxed mb-8">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="mt-auto">
                <p className="font-medium text-[var(--foreground)]">
                  {testimonial.author}
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
