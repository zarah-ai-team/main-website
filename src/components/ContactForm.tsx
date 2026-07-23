"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { site, cta } from "@/lib/site";

const NEED_OPTIONS = [
  "Website / Web App",
  "AI Solution",
  "Custom CRM",
  "Custom ERP",
  "Not sure yet",
] as const;

/**
 * A no-backend lead form: on submit it composes a pre-filled email and opens
 * the visitor's mail client addressed to your inbox.
 *
 * To collect submissions server-side instead (e.g. Formspree, Resend, or a
 * Next.js route handler), replace `handleSubmit` with a fetch() to your
 * endpoint. The fields below are ready for that.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const need = String(data.get("need") || "");
    const message = String(data.get("message") || "");

    const subject = `Free consultation request — ${company || name}`;
    const body = [
      `Name: ${name}`,
      `Work email: ${email}`,
      `Company: ${company}`,
      `What they need: ${need}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const inputClass =
    "w-full rounded-lg bg-carbon-900 px-4 py-3 text-sm text-content placeholder:text-muted/60 outline-none transition-shadow duration-120 ease-out focus:ring-2 focus:ring-accent";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-content">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-content">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="company"
            className="mb-1.5 block text-sm text-content"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            required
            autoComplete="organization"
            placeholder="Company name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="need" className="mb-1.5 block text-sm text-content">
            What do you need?
          </label>
          <select id="need" name="need" required className={inputClass}>
            {NEED_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-content">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What problem are you trying to solve?"
          className={`${inputClass} resize-y`}
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        <Icon name="mail" className="h-4 w-4" />
        {cta.submit}
      </button>

      <p className="text-xs text-muted">
        No spam. No obligation. Just a genuinely useful conversation about your
        project.
      </p>

      {sent && (
        <p className="text-sm text-accent">
          Your email app should have opened with the message ready to send. If
          it didn&apos;t, email us directly at{" "}
          <a
            href={`mailto:${site.contact.email}`}
            className="underline hover:text-content"
          >
            {site.contact.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
