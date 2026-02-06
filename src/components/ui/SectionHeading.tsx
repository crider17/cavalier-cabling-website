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
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange mb-3">
        {label}
      </p>
      <h2
        className={`text-3xl font-extrabold md:text-4xl ${
          light ? "text-white" : "text-brand-black"
        }`}
      >
        {heading}
      </h2>
    </div>
  );
}
