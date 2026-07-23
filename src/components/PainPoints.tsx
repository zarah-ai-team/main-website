import { Icon, type IconName } from "./Icon";
import { Reveal } from "./Reveal";

/**
 * A short, scannable list of icon + phrase pain-points — used in place of
 * dense paragraphs wherever we're naming the problems Zarah AI solves.
 * Each row reveals with a staggered slide-in.
 */
export function PainPoints({
  items,
  className = "",
}: {
  items: readonly { icon: string; text: string }[];
  className?: string;
}) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, i) => (
        <Reveal key={item.text} delay={i * 90} as="li">
          <div className="flex items-center gap-3 rounded-lg bg-surface px-4 py-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-carbon-900 text-accent">
              <Icon name={item.icon as IconName} className="h-4 w-4" />
            </span>
            <span className="text-sm text-content/90">{item.text}</span>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
