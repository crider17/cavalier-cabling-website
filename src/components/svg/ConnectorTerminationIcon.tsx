export default function ConnectorTerminationIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Connector cutaway with terminated wires */}
      {/* Connector body (side cutaway) */}
      <rect x="13" y="4" width="8" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />

      {/* Inner cavity line */}
      <line x1="15" y1="5.5" x2="15" y2="18.5" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />

      {/* Contact pins inside connector */}
      <line x1="15" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="0.75" />
      <line x1="15" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="0.75" />
      <line x1="15" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="0.75" />

      {/* Pin tips (contact points) */}
      <circle cx="20.5" cy="8" r="0.5" fill="currentColor" opacity="0.6" />
      <circle cx="20.5" cy="12" r="0.5" fill="currentColor" opacity="0.6" />
      <circle cx="20.5" cy="16" r="0.5" fill="currentColor" opacity="0.6" />

      {/* Wires entering connector */}
      <path d="M 3 7 L 8 7 Q 13 7 14 8 L 15 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M 3 12 L 10 12 L 15 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M 3 17 L 8 17 Q 13 17 14 16 L 15 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />

      {/* Solder/crimp points */}
      <circle cx="15" cy="8" r="0.8" fill="currentColor" opacity="0.3" />
      <circle cx="15" cy="12" r="0.8" fill="currentColor" opacity="0.3" />
      <circle cx="15" cy="16" r="0.8" fill="currentColor" opacity="0.3" />

      {/* Wire insulation marks */}
      <line x1="6" y1="6" x2="6" y2="8" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
      <line x1="6" y1="11" x2="6" y2="13" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
      <line x1="6" y1="16" x2="6" y2="18" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
    </svg>
  );
}
