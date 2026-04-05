const awards = [
  { name: "D&AD", count: "8 Awards" },
  { name: "Awwwards", count: "12 Sites" },
  { name: "Communication Arts", count: "15 Features" },
  { name: "Type Directors Club", count: "6 Awards" },
];

export function AwardsBanner() {
  return (
    <section className="border-t border-border bg-foreground py-16 text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {awards.map((award) => (
            <div key={award.name} className="text-center">
              <p className="font-serif text-2xl">{award.name}</p>
              <p className="mt-1 text-sm text-background/60">{award.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
