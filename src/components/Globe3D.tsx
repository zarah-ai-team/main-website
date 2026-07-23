"use client";

import { useEffect, useRef } from "react";

/**
 * Zarah AI brand motif in 3D: a yellow "mosaic" particle globe with an
 * orbiting satellite (the airplane orbit from the logo), rendered on a
 * plain carbon canvas.
 *
 * - Pure Canvas 2D with 3D projection — no libraries, tiny bundle.
 * - Reacts subtly to the pointer (tilt follows the cursor).
 * - Pauses when scrolled offscreen; renders a single static frame when
 *   prefers-reduced-motion is set.
 */
export function Globe3D({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // ---- Geometry: fibonacci-distributed points on a unit sphere --------
    const N = 500;
    const pts: { x: number; y: number; z: number }[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const th = golden * i;
      pts.push({ x: Math.cos(th) * r, y, z: Math.sin(th) * r });
    }

    // ---- Sizing (DPR-aware, responsive) ---------------------------------
    let w = 0;
    let h = 0;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) drawFrame(0);
    });
    ro.observe(canvas);

    // ---- Pointer-follow tilt --------------------------------------------
    const baseTiltX = -0.35;
    let tiltX = baseTiltX;
    let tiltY = 0;
    let targetTiltX = baseTiltX;
    let targetTiltY = 0;
    const onPointer = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      targetTiltY = nx * 0.22;
      targetTiltX = baseTiltX + ny * 0.14;
    };
    if (!reduced) window.addEventListener("pointermove", onPointer, { passive: true });

    // ---- Render -----------------------------------------------------------
    const YELLOW = "255, 222, 57"; // #FFDE39
    const GREY = "184, 183, 182"; // #B8B7B6
    let rot = 0;

    function project(
      p: { x: number; y: number; z: number },
      cosR: number,
      sinR: number,
    ) {
      // rotate around Y (spin)
      const x1 = p.x * cosR + p.z * sinR;
      const z1 = -p.x * sinR + p.z * cosR;
      const y1 = p.y;
      // tilt around X
      const cosTX = Math.cos(tiltX);
      const sinTX = Math.sin(tiltX);
      const y2 = y1 * cosTX - z1 * sinTX;
      const z2 = y1 * sinTX + z1 * cosTX;
      // tilt around Y (pointer)
      const cosTY = Math.cos(tiltY);
      const sinTY = Math.sin(tiltY);
      const x3 = x1 * cosTY + z2 * sinTY;
      const z3 = -x1 * sinTY + z2 * cosTY;
      return { x: x3, y: y2, z: z3 };
    }

    function drawFrame(t: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      const R = Math.min(w, h) * 0.33;
      const cx = w / 2;
      const cy = h / 2;
      const persp = 3.4;

      tiltX += (targetTiltX - tiltX) * 0.04;
      tiltY += (targetTiltY - tiltY) * 0.04;

      const cosR = Math.cos(rot);
      const sinR = Math.sin(rot);

      // Sphere dots — the mosaic globe
      for (const p of pts) {
        const q = project(p, cosR, sinR);
        const s = persp / (persp - q.z);
        const px = cx + q.x * R * s;
        const py = cy + q.y * R * s;
        const depth = (q.z + 1) / 2; // 0 (back) → 1 (front)
        const alpha = 0.08 + depth * 0.82;
        const size = (0.7 + depth * 1.5) * (R / 220);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${YELLOW}, ${alpha})`;
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Orbit ring — flat circle in sphere space, tilted with the globe
      const orbitR = 1.42;
      const RING_SEGS = 90;
      ctx.beginPath();
      for (let i = 0; i <= RING_SEGS; i++) {
        const a = (i / RING_SEGS) * Math.PI * 2;
        const q = project(
          { x: Math.cos(a) * orbitR, y: 0, z: Math.sin(a) * orbitR },
          1,
          0,
        );
        const s = persp / (persp - q.z);
        const px = cx + q.x * R * s;
        const py = cy + q.y * R * s;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = `rgba(${GREY}, 0.32)`;
      ctx.lineWidth = 2.5 * (R / 220);
      ctx.stroke();

      // Satellite + trail — the orbiting "airplane"
      const oa = reduced ? 0.9 : t * 0.00052;
      const TRAIL = 26;
      for (let i = TRAIL; i >= 0; i--) {
        const a = oa - i * 0.028;
        const q = project(
          { x: Math.cos(a) * orbitR, y: 0, z: Math.sin(a) * orbitR },
          1,
          0,
        );
        const s = persp / (persp - q.z);
        const px = cx + q.x * R * s;
        const py = cy + q.y * R * s;
        if (i === 0) {
          // satellite head — white, like the plane on the logo
          ctx.beginPath();
          ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
          ctx.arc(px, py, 3.4 * (R / 220) * s, 0, Math.PI * 2);
          ctx.fill();
        } else {
          const fade = (1 - i / TRAIL) * 0.6;
          ctx.beginPath();
          ctx.fillStyle = `rgba(${YELLOW}, ${fade})`;
          ctx.arc(px, py, 1.6 * (R / 220) * s, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rot += 0.0021;
    }

    // ---- Animation loop, paused when offscreen ---------------------------
    let raf = 0;
    let visible = true;
    const loop = (t: number) => {
      if (visible) drawFrame(t);
      raf = requestAnimationFrame(loop);
    };

    if (reduced) {
      drawFrame(0);
    } else {
      const io = new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
        },
        { threshold: 0 },
      );
      io.observe(canvas);
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        ro.disconnect();
        window.removeEventListener("pointermove", onPointer);
      };
    }

    return () => ro.disconnect();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
