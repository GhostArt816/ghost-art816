"use client";

const clients = [
  "Maison Blanc",
  "Artisan & Co",
  "Velvet House",
  "Heritage Collection",
  "Lumiere Paris",
  "Noir Studio",
  "Casa Elegance",
  "The Refined",
];

export function ClientsMarquee() {
  return (
    <section className="border-y border-border py-8 overflow-hidden">
      <div className="flex animate-marquee gap-16">
        {[...clients, ...clients].map((client, index) => (
          <span
            key={index}
            className="whitespace-nowrap text-sm uppercase tracking-widest text-muted-foreground"
          >
            {client}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
