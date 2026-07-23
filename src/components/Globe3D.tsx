"use client";

import { useEffect, useRef } from "react";

/**
 * Zarah AI brand motif in 3D: a yellow "mosaic" particle globe with an
 * orbiting satellite (the airplane orbit from the logo), rendered on a
 * plain carbon canvas. Pure Canvas 2D with 3D projection — no libraries.
 *
 * First-load intro (~2.4s), telling the brand story:
 *  1. Dots lie scattered across the whole canvas — fragmented, disconnected.
 *  2. They gather along gently curved paths, assembling the globe in a
 *     sweeping wave — one system taking shape.
 *  3. The globe's rotation eases in from stillness as it completes.
 *  4. A white satellite draws its own orbit ring around the globe, then
 *     seamlessly keeps revolving — the finished system, live and in motion.
 *
 * Subtle pointer-follow tilt once settled. Pauses offscreen. Renders a
 * single settled frame (intro skipped) under prefers-reduced-motion.
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
    const INTRO_TOTAL = 2400;
    const pts: {
      x: number;
      y: number;
      z: number;
      startNX: number; // scattered start (normalized, canvas-relative)
      startNY: number;
      delay: number; // deterministic sweep + light jitter
      duration: number;
      bowDir: number; // curved-path bow direction
    }[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const th = golden * i;
      pts.push({
        x: Math.cos(th) * r,
        y,
        z: Math.sin(th) * r,
        startNX: (Math.random() - 0.5) * 1.25,
        startNY: (Math.random() - 0.5) * 1.25,
        // Stagger follows the fibonacci index — the assembly reads as one
        // continuous wave sweeping the sphere, not random popcorn.
        delay: (i / N) * 700 + Math.random() * 120,
        duration: 1250 + Math.random() * 250,
        bowDir: i % 2 === 0 ? 1 : -1,
      });
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
    const SAT_SPEED = 0.00052; // rad/ms once orbiting freely
    const RING_START = -0.6; // angle where the satellite begins its draw
    let rot = 0;
    let introStart: number | null = null;

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

    const easeInOutCubic = (x: number) =>
      x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    const smoothstep = (x: number) => {
      const t = Math.min(1, Math.max(0, x));
      return t * t * (3 - 2 * t);
    };

    function drawFrame(t: number) {
      if (!ctx) return;

      if (reduced) {
        introStart = t - INTRO_TOTAL; // settled immediately
      } else if (introStart === null) {
        introStart = t;
      }
      const elapsed = t - introStart;
      const p = Math.min(1, Math.max(0, elapsed / INTRO_TOTAL));

      ctx.clearRect(0, 0, w, h);
      const R = Math.min(w, h) * 0.33;
      const cx = w / 2;
      const cy = h / 2;
      const persp = 3.4;

      // Pointer tilt engages only once settled; rotation eases in from
      // stillness over the intro's final third — no hard unfreeze.
      if (p >= 1) {
        tiltX += (targetTiltX - tiltX) * 0.04;
        tiltY += (targetTiltY - tiltY) * 0.04;
      }
      rot += 0.0021 * smoothstep((p - 0.65) / 0.35);

      const cosR = Math.cos(rot);
      const sinR = Math.sin(rot);

      // Sphere dots — the mosaic globe
      for (const pt of pts) {
        const q = project(pt, cosR, sinR);
        const s = persp / (persp - q.z);
        const finalX = cx + q.x * R * s;
        const finalY = cy + q.y * R * s;
        const depth = (q.z + 1) / 2; // 0 (back) → 1 (front)
        let alpha = 0.08 + depth * 0.82;
        const size = (0.7 + depth * 1.5) * (R / 220);

        let px = finalX;
        let py = finalY;
        if (p < 1) {
          const localT = Math.min(
            1,
            Math.max(0, (elapsed - pt.delay) / pt.duration),
          );
          const eased = easeInOutCubic(localT);
          const startX = cx + pt.startNX * w;
          const startY = cy + pt.startNY * h;
          const dx = finalX - startX;
          const dy = finalY - startY;
          // Curved travel: a perpendicular bow with a sin envelope — zero at
          // both ends, so dots leave gently and land exactly on target.
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const bow = Math.sin(Math.PI * eased) * dist * 0.18 * pt.bowDir;
          px = startX + dx * eased + (-dy / dist) * bow;
          py = startY + dy * eased + (dx / dist) * bow;
          // Fade in across the first third of each dot's own flight
          alpha *= smoothstep(localT / 0.35);
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(${YELLOW}, ${alpha})`;
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Orbit ring — drawn by the satellite as a growing arc (55% → 95% of
      // the intro), then held. The white head IS the satellite; once the
      // circle closes it simply keeps revolving.
      const orbitR = 1.42;
      const ringP = easeInOutCubic(
        Math.min(1, Math.max(0, (p - 0.55) / 0.4)),
      );
      if (ringP > 0.001) {
        const sweep = ringP * Math.PI * 2;
        const RING_SEGS = 90;
        const segs = Math.max(2, Math.ceil(RING_SEGS * ringP));
        ctx.beginPath();
        for (let i = 0; i <= segs; i++) {
          const a = RING_START + (i / segs) * sweep;
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

        // Satellite: rides the arc tip while drawing; free orbit afterwards.
        const satAngle =
          p < 1
            ? RING_START + sweep
            : RING_START + Math.PI * 2 + (elapsed - INTRO_TOTAL) * SAT_SPEED;
        const satAlpha = smoothstep((p - 0.55) / 0.08);
        const TRAIL = 26;
        for (let i = TRAIL; i >= 0; i--) {
          const a = satAngle - i * 0.028;
          if (p < 1 && a < RING_START) continue; // trail can't precede the drawn arc
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
            ctx.fillStyle = `rgba(255, 255, 255, ${0.95 * satAlpha})`;
            ctx.arc(px, py, 3.4 * (R / 220) * s, 0, Math.PI * 2);
            ctx.fill();
          } else {
            const fade = (1 - i / TRAIL) * 0.6 * satAlpha;
            ctx.beginPath();
            ctx.fillStyle = `rgba(${YELLOW}, ${fade})`;
            ctx.arc(px, py, 1.6 * (R / 220) * s, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
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
