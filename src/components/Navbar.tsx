"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { nav } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-200 ease-out ${
        scrolled ? "shadow-brand-md" : ""
      }`}
      style={{
        background: "rgba(31, 31, 31, 0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20">
        <Logo height={44} />

        {/* Desktop links — selected state: yellow underline (design system) */}
        <ul className="hidden items-center gap-7 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative py-2 text-sm font-medium transition-colors duration-120 ease-out ${
                    active ? "text-content" : "text-muted hover:text-content"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-accent" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary">
            Book a Free Consultation
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg bg-surface text-content md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="bg-carbon-900 shadow-brand-lg md:hidden">
          <ul className="container flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-content hover:bg-surface"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 px-1">
              <Link href="/contact" className="btn-primary w-full">
                Book a Free Consultation
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
