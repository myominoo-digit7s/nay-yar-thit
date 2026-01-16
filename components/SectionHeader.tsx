interface SectionHeaderProps {
  tagline?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  tagline,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {tagline && (
        <span
          className={`inline-block font-semibold text-sm uppercase tracking-wider mb-2 ${
            light ? "text-primary-300" : "text-primary-600"
          }`}
        >
          {tagline}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-neutral-800"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white/80" : "text-neutral-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
