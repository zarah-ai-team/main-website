import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Official Zarah AI lock-up (yellow mosaic globe + wordmark), from the
 * brand design system. `variant="dark"` is the white-wordmark version for
 * dark canvases; `variant="light"` for light surfaces.
 */
export function Logo({
  className = "",
  variant = "dark",
  height = 40,
}: {
  className?: string;
  variant?: "dark" | "light";
  height?: number;
}) {
  // Lock-up aspect ratio is 874:588
  const width = Math.round((height * 874) / 588);
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label={`${site.name} home`}
    >
      <Image
        src={`/logo-zarah-ai-${variant}.svg`}
        alt={site.name}
        width={width}
        height={height}
        priority
        className="w-auto"
        style={{ height }}
      />
    </Link>
  );
}
