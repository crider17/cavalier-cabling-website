interface SectionHeadingProps {
  label: string;
  heading: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({
  label,
  heading,
  light = false,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange mb-4">
        {label}
      </p>
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-[2.75rem] font-800 uppercase tracking-tight leading-tight ${
          light ? "text-white" : "text-brand-black"
        }`}
      >
        {heading}
      </h2>
    </div>
  );
}
