import { Icon, type IconName } from "./Icon";

export function ServiceCard({
  title,
  summary,
  points,
  icon,
  index,
}: {
  title: string;
  summary: string;
  points?: readonly string[];
  icon: string;
  index?: number;
}) {
  return (
    <div className="card h-full">
      <div className="flex items-center gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-carbon-900 text-accent">
          <Icon name={icon as IconName} className="h-6 w-6" />
        </span>
        {typeof index === "number" && (
          <span className="ml-auto text-sm font-medium text-muted/60">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>

      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{summary}</p>

      {points && points.length > 0 && (
        <ul className="mt-5 space-y-2.5 border-t border-carbon-600/50 pt-5">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-sm text-content/90">
              <Icon
                name="check"
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
              />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
