export function AboutStory() {
  return (
    <section className="py-24 md:py-32 bg-[var(--card)]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
            My Journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[var(--foreground)]">
            From Passion to Purpose
          </h2>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-[var(--muted-foreground)] leading-relaxed mb-8">
            My artistic journey began in the quiet corners of my childhood home,
            where sketchbooks became my closest companions. What started as a way
            to express unspoken thoughts evolved into a lifelong dedication to
            the craft of visual storytelling.
          </p>

          <p className="text-[var(--muted-foreground)] leading-relaxed mb-8">
            After studying fine arts and exploring various mediums, I found my
            voice in the intersection of traditional techniques and contemporary
            vision. Whether working with oils on canvas or crafting digital
            illustrations, my goal remains the same: to create art that resonates
            on a deeper level.
          </p>

          <p className="text-[var(--muted-foreground)] leading-relaxed mb-8">
            Today, Ghost Art represents not just my work, but a philosophy—that
            art should be personal, meaningful, and accessible. Every commission
            I take on is a collaboration, a journey we undertake together to bring
            your unique vision to life.
          </p>

          <blockquote className="border-l-2 border-[var(--primary)] pl-6 my-12">
            <p className="font-serif text-2xl text-[var(--foreground)] italic">
              &quot;Art is not what you see, but what you make others see.&quot;
            </p>
            <cite className="text-sm text-[var(--muted-foreground)] not-italic">
              — Edgar Degas
            </cite>
          </blockquote>

          <p className="text-[var(--muted-foreground)] leading-relaxed">
            I believe that commissioned art should tell your story, not mine.
            That&apos;s why I invest time in understanding your vision, your
            memories, and your aspirations before ever touching brush to canvas.
            The result is artwork that feels authentically yours—a piece that
            will grow more meaningful with time.
          </p>
        </div>
      </div>
    </section>
  );
}
