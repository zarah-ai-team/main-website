import { Reveal } from "./Reveal";

export function PageHero({
  title,
  subtitle,
}: {
  title: React.ReactNode;
  subtitle: React.ReactNode;
}) {
  return (
    <section className="relative pt-16 md:pt-24">
      {/* Full-width container so the hero aligns with the content below it —
          width limits live on the text, not the wrapper. */}
      <div className="container flex flex-col items-start gap-5 pb-6">
        <Reveal>
          <h1 className="max-w-4xl text-balance text-3xl font-semibold leading-[1.12] md:text-4xl lg:text-5xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="max-w-2xl text-base leading-relaxed text-muted">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
