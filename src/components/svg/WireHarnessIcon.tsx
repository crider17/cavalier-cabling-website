export default function WireHarnessIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Branching wire harness schematic */}
      {/* Main trunk */}
      <path
        d="M 3 12 L 10 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Branch point node */}
      <circle cx="10" cy="12" r="1.5" fill="currentColor" opacity="0.4" />

      {/* Upper branch */}
      <path
        d="M 10 12 L 13 8 L 18 8"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Middle branch */}
      <path
        d="M 10 12 L 18 12"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />

      {/* Lower branch */}
      <path
        d="M 10 12 L 13 16 L 18 16"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Connector terminals */}
      <rect x="18" y="6.5" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="0.75" />
      <line x1="19" y1="8" x2="20.5" y2="8" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />

      <rect x="18" y="10.5" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="0.75" />
      <line x1="19" y1="12" x2="20.5" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />

      <rect x="18" y="14.5" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="0.75" />
      <line x1="19" y1="16" x2="20.5" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />

      {/* Tie-wrap marks on trunk */}
      <line x1="5" y1="10.5" x2="5" y2="13.5" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="13.5" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
}
