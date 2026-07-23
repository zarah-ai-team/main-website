import Image from "next/image";
import type { projects } from "@/lib/site";

type Project = (typeof projects)[number];

/**
 * Renders a client's real logo mark (+ name, unless the mark already bakes
 * in its own wordmark). Liberty India's mark is a solid-white emblem —
 * reads cleanly straight off our dark canvas, paired with a text label.
 * United Hotels' mark is its full lockup (icon + "United Hotels" + tagline),
 * so the name label is skipped by default to avoid repeating it.
 */
export function ClientLogo({
  project,
  className = "",
  textClassName = "text-base font-semibold text-content/80",
  showName = !project.logoIncludesWordmark,
}: {
  project: Project;
  className?: string;
  textClassName?: string;
  showName?: boolean;
}) {
  // Explicit pixel width from the asset's real aspect ratio — flex main-axis
  // "auto" sizing on replaced elements uses the width/height *attributes*
  // (not the decoded image), so a generic ratio hint renders distorted.
  const width = Math.round(project.logoHeight * project.logoAspect);

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={project.logo}
        alt={`${project.name} logo`}
        width={width}
        height={project.logoHeight}
        className="shrink-0"
        style={{ height: project.logoHeight, width }}
      />
      {showName && <span className={textClassName}>{project.name}</span>}
    </span>
  );
}
