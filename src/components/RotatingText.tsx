"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through short phrases with a soft fade/slide swap.
 * Static (first item) when prefers-reduced-motion is set.
 */
export function RotatingText({
  items,
  interval = 2200,
  className = "",
}: {
  items: readonly string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((v) => (v + 1) % items.length);
        setVisible(true);
      }, 260);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <span
      aria-hidden="true"
      className={`inline-block transition-all duration-320 ease-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-1.5 opacity-0"
      } ${className}`}
    >
      {items[index]}
    </span>
  );
}
