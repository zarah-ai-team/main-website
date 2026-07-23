import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/CtaBand";
import { Globe3D } from "@/components/Globe3D";
import { Tilt } from "@/components/Tilt";
import { RotatingText } from "@/components/RotatingText";
import { ClientLogo } from "@/components/ClientLogo";
import { PainPoints } from "@/components/PainPoints";
import {
  hero,
  problem,
  services,
  servicesIntro,
  capabilities,
  projects,
  processSteps,
  processIntro,
  whyZarah,
  stats,
  industries,
  cta,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        <div className="container grid items-center gap-10 pt-10 md:pt-16 lg:grid-cols-2 lg:gap-6">
          {/* Copy */}
          <div className="flex flex-col items-start">
            <Reveal delay={80}>
              <h1 className="text-3xl font-semibold leading-[1.12] md:text-5xl lg:text-[52px] lg:leading-[60px]">
                {hero.headline.lead}
                <span className="text-accent">{hero.headline.accent}</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                {hero.subheadline}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  {cta.primary}
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <Link href="/work" className="btn-secondary">
                  {cta.seeWork}
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-6 text-sm text-muted">
                We build{" "}
                <RotatingText
                  items={hero.rotating}
                  className="font-semibold text-accent"
                />
              </p>
            </Reveal>
          </div>

          {/* 3D globe — the brand mark in motion */}
          <Reveal delay={160} className="relative mx-auto w-full max-w-[560px]">
            <div className="relative aspect-square">
              <Globe3D />
            </div>
          </Reveal>
        </div>

        {/* Trust bar */}
        <Reveal delay={380}>
          <div className="container mt-10 md:mt-14">
            <div className="flex flex-col items-center gap-6 rounded-xl bg-surface px-8 py-8 shadow-brand-sm sm:flex-row sm:justify-center sm:gap-16">
              <span className="text-xs uppercase tracking-[0.2em] text-muted">
                Trusted to build for
              </span>
              {projects.map((p) => (
                <a
                  key={p.slug}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 transition-opacity duration-120 ease-out hover:opacity-100"
                >
                  <ClientLogo project={p} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===================== IMPACT STATS ===================== */}
      <section className="section pb-0">
        <div className="container">
          <div className="grid gap-6 rounded-xl bg-surface p-8 shadow-brand-sm md:grid-cols-4 md:p-10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="text-center">
                <div className="text-3xl font-bold text-accent md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== THE PROBLEM ===================== */}
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl">
              {problem.headline}
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <p className="text-base leading-relaxed text-muted">
              {problem.lead}
            </p>

            <PainPoints items={problem.pains} className="mt-5" />

            <p className="mt-6 text-base leading-relaxed text-muted">
              {problem.fix}
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors duration-120 ease-out hover:text-accent-hover"
            >
              See how we build it
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===================== SERVICES — WHAT WE BUILD ===================== */}
      <section className="section bg-carbon-800/40">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              align="left"
              title="What we build"
              subtitle={servicesIntro}
            />
            <Reveal>
              <Link href="/services" className="btn-secondary shrink-0">
                Explore our services
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 80}>
                <Tilt className="h-full">
                  <ServiceCard
                    title={s.title}
                    summary={s.summary}
                    icon={s.icon}
                    index={i}
                  />
                </Tilt>
              </Reveal>
            ))}
          </div>

          {/* Supporting capabilities */}
          <Reveal delay={200}>
            <p className="mt-10 text-center text-sm text-muted">
              {capabilities.join(" · ")}
            </p>
            <p className="mt-6 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors duration-120 ease-out hover:text-accent-hover"
              >
                Not sure where to start? Book a free consultation
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== HOW WE WORK ===================== */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="The Zarah Build Process: Discover → Design → Build → Scale"
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

          <Reveal delay={200}>
            <p className="mt-10 text-center">
              <Link href="/contact" className="btn-secondary">
                {cta.scope}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== WHY ZARAH AI ===================== */}
      <section className="section bg-carbon-800/40">
        <div className="container">
          <SectionHeading
            title="Why businesses choose Zarah AI"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyZarah.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 80}>
                <Tilt className="h-full">
                  <div className="card h-full">
                    <span className="grid h-12 w-12 place-items-center rounded-lg bg-carbon-900 text-accent">
                      <Icon name={w.icon as "code"} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {w.body}
                    </p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WORK ===================== */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Systems we've shipped"
            subtitle="Real platforms, live in production, built end-to-end for our clients."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>

          {/* Industries strip */}
          <Reveal delay={160}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-muted">
                Built for
              </span>
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded-full bg-surface px-4 py-1.5 text-sm text-content/80 shadow-brand-sm"
                >
                  {ind}
                </span>
              ))}
              <Link
                href="/contact"
                className="text-sm font-semibold text-accent transition-colors duration-120 ease-out hover:text-accent-hover"
              >
                Don&apos;t see your industry? Let&apos;s talk →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <CtaBand />
    </>
  );
}
