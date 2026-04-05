const team = [
  {
    name: "Elena Marchetti",
    role: "Founder & Creative Director",
    initials: "EM",
  },
  {
    name: "James Chen",
    role: "Strategy Director",
    initials: "JC",
  },
  {
    name: "Sofia Laurent",
    role: "Design Director",
    initials: "SL",
  },
  {
    name: "Marcus Webb",
    role: "Digital Lead",
    initials: "MW",
  },
  {
    name: "Amara Okonkwo",
    role: "Senior Designer",
    initials: "AO",
  },
  {
    name: "Thomas Berg",
    role: "Motion Designer",
    initials: "TB",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="mb-2 text-sm uppercase tracking-widest text-muted-foreground">
            The Team
          </p>
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
            The people behind the work
          </h2>
          <p className="mt-4 text-muted-foreground">
            A small, dedicated team of creatives united by a shared passion for
            exceptional design.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="aspect-[4/5] bg-muted flex items-center justify-center">
                <span className="font-serif text-4xl text-muted-foreground">
                  {member.initials}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-xl tracking-tight">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
