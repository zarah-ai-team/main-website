/**
 * A stylized "site skeleton" visual used as the case-study placeholder until
 * real screenshots are added. Solid carbon blocks + one yellow action per
 * view — stays inside the design system (plain surfaces, no gradients).
 */
export function SiteWireframe({ name, url }: { name: string; url: string }) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-carbon-900">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 bg-carbon-800 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-carbon-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-carbon-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-carbon-600" />
        <span className="ml-3 truncate rounded-md bg-carbon-900 px-2 py-0.5 text-[11px] text-muted">
          {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </span>
      </div>

      {/* Wireframe body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* nav bar */}
        <div className="flex items-center justify-between">
          <span className="h-2.5 w-16 rounded-full bg-carbon-600" />
          <span className="flex gap-2">
            <span className="h-2.5 w-8 rounded-full bg-carbon-600/60" />
            <span className="h-2.5 w-8 rounded-full bg-carbon-600/60" />
            <span className="h-2.5 w-10 rounded-full bg-accent" />
          </span>
        </div>
        {/* hero */}
        <div className="mt-2 flex flex-1 flex-col justify-center gap-2.5 rounded-lg bg-carbon-800 p-5">
          <span className="text-lg font-semibold text-content md:text-xl">
            {name}
          </span>
          <span className="h-2 w-3/4 rounded-full bg-carbon-600" />
          <span className="h-2 w-1/2 rounded-full bg-carbon-600/60" />
          <span className="mt-2 h-7 w-24 rounded-md bg-accent" />
        </div>
        {/* cards row */}
        <div className="grid grid-cols-3 gap-3">
          <span className="h-10 rounded-lg bg-carbon-800" />
          <span className="h-10 rounded-lg bg-carbon-800" />
          <span className="h-10 rounded-lg bg-carbon-800" />
        </div>
      </div>
    </div>
  );
}
