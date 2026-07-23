import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { Tilt } from "@/components/Tilt";
import { Icon } from "@/components/Icon";
import { values, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Custom Software & AI Engineering",
  description:
    "Zarah AI builds custom software and AI that fits your business — senior engineers, full IP ownership, long-term partnership.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={
          <>
            We build software that fits —{" "}
            <span className="text-accent">and AI that ships.</span>
          </>
        }
        subtitle="Zarah AI exists because businesses deserve better than off-the-shelf. We combine senior engineering with AI to build custom systems — websites, AI solutions, CRMs, and ERPs — designed around how you actually work."
      />

      {/* Story */}
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>
                Most businesses aren&apos;t held back by ambition — they&apos;re
                held back by tools that don&apos;t fit. Processes bent to match
                someone else&apos;s software. Five subscriptions that don&apos;t
                talk to each other. Manual work a system should handle. And AI
                that never makes it past the demo.
              </p>
              <p>
                <span className="text-content">Zarah AI</span> was founded to
                build the alternative: custom websites, AI solutions, and
                CRM/ERP systems engineered around how a business actually runs
                — with senior engineers doing the building and AI woven in
                where it creates real leverage.
              </p>
              <p>
                We&apos;ve shipped production platforms for travel and
                hospitality clients like{" "}
                <span className="text-content">Liberty India</span> and{" "}
                <span className="text-content">Book United Hotels</span> — and
                the same discipline drives every build: understand the
                business first, then build the system that fits it.
              </p>
            </div>
            <Link href="/contact" className="btn-primary mt-8">
              Build with us
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <Tilt>
              <div className="card card-featured p-8">
                <h3 className="text-lg font-semibold">By the numbers</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  What working with us actually means, in practice.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-6 border-t border-carbon-600/50 pt-8">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-bold text-accent">
                        {s.value}
                      </div>
                      <div className="mt-1 text-xs text-muted">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          </Reveal>
        </div>
      </section>

      {/* What we believe */}
      <section className="section bg-carbon-800/40">
        <div className="container">
          <SectionHeading title="What we believe" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 90}>
                <Tilt className="h-full">
                  <div className="card h-full">
                    <h3 className="text-lg font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {v.body}
                    </p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
