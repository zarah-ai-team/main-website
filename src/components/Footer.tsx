import Link from "next/link";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { nav, services, site, emailLink, whatsappLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-10 bg-surface">
      <div className="container grid gap-12 py-16 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-5">
          <Logo height={72} />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            {site.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={emailLink()} className="btn-primary text-sm">
              <Icon name="mail" className="h-4 w-4" />
              Email us
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark text-sm"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Nav */}
        <div className="md:col-span-3 md:col-start-7">
          <h3 className="text-sm font-semibold text-content">Company</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted transition-colors duration-120 ease-out hover:text-content"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold text-content">Services</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href="/services"
                  className="text-muted transition-colors duration-120 ease-out hover:text-content"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-carbon-600/50">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
