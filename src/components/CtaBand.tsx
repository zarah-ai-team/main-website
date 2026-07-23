import Link from "next/link";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { site, cta, finalCta, emailLink } from "@/lib/site";

/**
 * The money block — one bold yellow moment per page, driving consultation
 * bookings (per the CTA bank: primary always leads to the contact page).
 */
export function CtaBand({
  title = finalCta.headline,
  subtitle = finalCta.subhead,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="relative overflow-hidden rounded-xl bg-accent p-8 text-center text-carbon-900 shadow-brand-lg md:p-16">
          <h2 className="mx-auto max-w-2xl text-balance text-2xl font-semibold leading-tight md:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-carbon-900/80 md:text-base">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-dark">
              {cta.primaryLong}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a
              href={emailLink()}
              className="btn bg-transparent text-carbon-900 ring-1 ring-inset ring-carbon-900/40 hover:bg-carbon-900/10"
            >
              <Icon name="mail" className="h-4 w-4" />
              Prefer email? {site.contact.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
