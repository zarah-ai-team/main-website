import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { ContactForm } from "@/components/ContactForm";
import { site, emailLink, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Book a Free Project Consultation",
  description:
    "Tell us your project and get a genuine take within one business day. Book a free, no-obligation consultation with Zarah AI.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Let&apos;s build something{" "}
            <span className="text-accent">that fits</span>
          </>
        }
        subtitle="Tell us the problem you're solving. We'll come back within one business day with a genuine take on how to build it — not a sales pitch."
      />

      <section className="section pt-6">
        <div className="container grid gap-10 lg:grid-cols-12">
          {/* Direct contact options */}
          <Reveal className="lg:col-span-5">
            <div className="flex flex-col gap-4">
              <a
                href={emailLink("Project inquiry")}
                className="card group flex items-center gap-4"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-carbon-900 text-accent">
                  <Icon name="mail" className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm text-muted">Email</span>
                  <span className="block font-semibold text-content">
                    {site.contact.email}
                  </span>
                </span>
                <Icon
                  name="arrowUpRight"
                  className="ml-auto h-5 w-5 text-muted transition-colors duration-120 ease-out group-hover:text-content"
                />
              </a>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex items-center gap-4"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-carbon-900 text-accent">
                  <Icon name="whatsapp" className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm text-muted">WhatsApp</span>
                  <span className="block font-semibold text-content">
                    {site.contact.whatsappDisplay}
                  </span>
                </span>
                <Icon
                  name="arrowUpRight"
                  className="ml-auto h-5 w-5 text-muted transition-colors duration-120 ease-out group-hover:text-content"
                />
              </a>

              <div className="card">
                <span className="block text-sm text-muted">Based in</span>
                <span className="mt-1 block font-semibold text-content">
                  {site.contact.location}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  We work with clients remotely across time zones — from first
                  call to launch and beyond.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-7">
            <div className="card card-featured p-6 md:p-8">
              <h2 className="text-xl font-semibold">Send us a message</h2>
              <p className="mt-1 text-sm text-muted">
                Prefer a form? Fill this in and it&apos;ll open your email ready
                to send.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
