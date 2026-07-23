import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaBand } from "@/components/CtaBand";
import { SectionHeading } from "@/components/SectionHeading";
import { Tilt } from "@/components/Tilt";
import { services, capabilities, processSteps, processIntro } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | Custom Software, AI, CRM & ERP",
  description:
    "Custom web development, AI solutions, and tailored CRM/ERP systems — custom-engineered digital systems with AI woven in where it counts.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title={
          <>
            What we <span className="text-accent">build</span>
          </>
        }
        subtitle="Custom-engineered digital systems, with AI woven in where it counts. Take one service or let us build your entire stack."
      />

      {/* Services grid */}
      <section className="section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 80}>
                <Tilt className="h-full">
                  <ServiceCard
                    title={s.title}
                    summary={s.summary}
                    points={s.points}
                    icon={s.icon}
                    index={i}
                  />
                </Tilt>
              </Reveal>
            ))}
          </div>

          {/* Supporting capabilities */}
          <Reveal delay={160}>
            <p className="mt-10 text-center text-sm text-muted">
              Also part of the stack: {capabilities.join(" · ")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process recap */}
      <section className="section bg-carbon-800/40">
        <div className="container">
          <SectionHeading
            title="The Zarah Build Process: Discover → Design → Build → Scale"
            subtitle={processIntro}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 90}>
                <Tilt className="h-full">
                  <div className="card h-full">
                    <span className="text-3xl font-bold text-accent">
                      {step.step}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure where to start?"
        subtitle="Book a free consultation. Tell us the problem you're trying to solve, and we'll give you a clear, honest take on how to build it — no jargon, no obligation."
      />
    </>
  );
}
