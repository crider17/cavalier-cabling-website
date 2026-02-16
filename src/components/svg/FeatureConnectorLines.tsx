export default function FeatureConnectorLines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* Left connector line (column 1 to column 2) */}
      <path
        d="M 300 50 L 340 50 L 350 40 L 380 40 L 390 50 L 460 50"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.1"
      />
      {/* Node dots */}
      <circle cx="300" cy="50" r="3" fill="currentColor" opacity="0.12" />
      <circle cx="460" cy="50" r="3" fill="currentColor" opacity="0.12" />

      {/* Center accent */}
      <circle cx="380" cy="40" r="2" stroke="#E8602C" strokeWidth="0.5" opacity="0.2" fill="none" />

      {/* Right connector line (column 2 to column 3) */}
      <path
        d="M 740 50 L 780 50 L 790 60 L 820 60 L 830 50 L 900 50"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.1"
      />
      {/* Node dots */}
      <circle cx="740" cy="50" r="3" fill="currentColor" opacity="0.12" />
      <circle cx="900" cy="50" r="3" fill="currentColor" opacity="0.12" />

      {/* Center accent */}
      <circle cx="820" cy="60" r="2" stroke="#E8602C" strokeWidth="0.5" opacity="0.2" fill="none" />
    </svg>
  );
}
