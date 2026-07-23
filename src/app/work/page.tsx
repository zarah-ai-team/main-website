import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/CtaBand";
import { SiteWireframe } from "@/components/SiteWireframe";
import { ClientLogo } from "@/components/ClientLogo";
import { Tilt } from "@/components/Tilt";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Zarah AI — including Liberty India (premium travel DMC platform) and Book United Hotels (specialist hotel booking & B2B distribution platform).",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Systems we&apos;ve <span className="text-accent">shipped</span>
          </>
        }
        subtitle="Real platforms, live in production, built end-to-end. Here's a closer look at what the client needed, what we built, and the result."
      />

      <section className="section">
        <div className="container flex flex-col gap-24">
          {projects.map((p, i) => (
            <article
              key={p.slug}
              id={p.slug}
              className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2"
            >
              {/* Visual */}
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <Tilt>
                  <div className="card card-featured aspect-[4/3] overflow-hidden !p-0">
                    <SiteWireframe
                      name={p.name}
                      url={p.url}
                      logo={p.logo}
                      logoHeight={p.logoHeight}
                      logoAspect={p.logoAspect}
                    />
                  </div>
                </Tilt>
              </Reveal>

              {/* Copy */}
              <Reveal delay={100} className={i % 2 === 1 ? "lg:order-1" : ""}>
                <ClientLogo project={p} className="mb-4" showName={false} />
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                  {p.category}
                </span>
                <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                  {p.name}
                </h2>
                <p className="mt-3 text-base text-muted">{p.tagline}</p>

                <p className="mt-6 text-sm leading-relaxed text-content/90">
                  {p.summary}
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-content">
                      The challenge
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {p.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-content">
                      What we delivered
                    </h3>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                      {p.delivered.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-sm text-content/90"
                        >
                          <Icon
                            name="check"
                            className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card">
                    <h3 className="text-sm font-semibold text-content">
                      Outcome
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {p.outcome}
                    </p>
                  </div>
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-8"
                >
                  Visit {p.name}
                  <Icon name="arrowUpRight" className="h-4 w-4" />
                </a>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Your system could be next"
        subtitle="Book a free consultation. Tell us the problem you're trying to solve, and we'll give you a clear, honest take on how to build it — no jargon, no obligation."
      />
    </>
  );
}
