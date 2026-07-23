import Link from "next/link";
import { Icon } from "./Icon";
import { SiteWireframe } from "./SiteWireframe";
import { Tilt } from "./Tilt";
import type { projects } from "@/lib/site";

type Project = (typeof projects)[number];

/**
 * Case-study card: featured yellow top edge (design-system recipe),
 * carbon-on-carbon elevation, subtle 3D tilt on hover.
 * Swap SiteWireframe for a real screenshot <Image> when available.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Tilt className="h-full">
      <article className="card card-featured flex h-full flex-col overflow-hidden !p-0">
        {/* Visual */}
        <div className="relative aspect-[16/10]">
          <SiteWireframe name={project.name} url={project.url} />
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5">
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
            {project.category}
          </span>
          <h3 className="mt-3 text-lg font-semibold">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.tagline}
          </p>

          <div className="mt-auto flex items-center gap-4 pt-6">
            <Link
              href={`/work#${project.slug}`}
              className="text-sm font-semibold text-accent transition-colors duration-120 ease-out hover:text-accent-hover"
            >
              Case study
            </Link>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-120 ease-out hover:text-content"
            >
              Visit site
              <Icon name="arrowUpRight" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </article>
    </Tilt>
  );
}
