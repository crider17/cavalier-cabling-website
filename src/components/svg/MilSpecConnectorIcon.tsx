export default function MilSpecConnectorIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Circular connector front face */}
      {/* Outer shell */}
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />

      {/* Coupling ring */}
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />

      {/* Insert ring */}
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="0.75" />

      {/* Key slot */}
      <rect x="11" y="2.5" width="2" height="2.5" rx="0.5" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />

      {/* Center pin */}
      <circle cx="12" cy="12" r="1.2" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="12" cy="12" r="0.5" fill="currentColor" opacity="0.5" />

      {/* Inner ring pins */}
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x = 12 + 3.2 * Math.cos(rad);
        const y = 12 + 3.2 * Math.sin(rad);
        return (
          <g key={angle}>
            <circle cx={x} cy={y} r="0.9" stroke="currentColor" strokeWidth="0.5" />
            <circle cx={x} cy={y} r="0.35" fill="currentColor" opacity="0.4" />
          </g>
        );
      })}

      {/* Outer ring pins */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x = 12 + 5.5 * Math.cos(rad);
        const y = 12 + 5.5 * Math.sin(rad);
        return (
          <circle key={`o-${angle}`} cx={x} cy={y} r="0.6" stroke="currentColor" strokeWidth="0.4" opacity="0.7" />
        );
      })}
    </svg>
  );
}
