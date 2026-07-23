import { Reveal } from "./Reveal";

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      <h2 className="text-balance text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm leading-relaxed text-muted md:text-base">{subtitle}</p>
      )}
    </Reveal>
  );
}
