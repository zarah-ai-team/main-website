"use client";

import { useRef } from "react";

/**
 * Subtle 3D tilt-on-hover wrapper (perspective transform follows the
 * pointer). Functional depth, not decoration-noise:
 * - max ±6° rotation, 200ms ease-out return (design-system motion token)
 * - disabled on touch devices and when prefers-reduced-motion is set
 */
export function Tilt({
  children,
  className = "",
  max = 6,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  function canTilt() {
    return (
      window.matchMedia("(hover: hover)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || !canTilt()) return;
    const rect = el.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    el.style.transition = "transform 60ms ease-out";
    el.style.transform = `perspective(900px) rotateX(${(-ny * max).toFixed(2)}deg) rotateY(${(nx * max).toFixed(2)}deg) translateZ(0)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 200ms ease-out";
    el.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  }

  return (
    <div style={{ perspective: "900px" }} className={className}>
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="h-full will-change-transform"
      >
        {children}
      </div>
    </div>
  );
}
