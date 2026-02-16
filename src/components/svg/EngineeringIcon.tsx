export default function EngineeringIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Blueprint with dimension callouts */}
      {/* Blueprint sheet */}
      <rect x="2" y="3" width="20" height="18" rx="1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />

      {/* Title block bottom right */}
      <line x1="14" y1="17" x2="22" y2="17" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <line x1="14" y1="17" x2="14" y2="21" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />

      {/* Part outline on blueprint */}
      <rect x="5" y="6" width="10" height="8" rx="0.5" stroke="currentColor" strokeWidth="0.75" strokeDasharray="0" />

      {/* Cutout/feature in part */}
      <circle cx="8" cy="10" r="1.5" stroke="currentColor" strokeWidth="0.5" />

      {/* Horizontal dimension line */}
      <line x1="5" y1="15.5" x2="15" y2="15.5" stroke="currentColor" strokeWidth="0.4" opacity="0.6" />
      <line x1="5" y1="14.5" x2="5" y2="16.5" stroke="currentColor" strokeWidth="0.4" opacity="0.6" />
      <line x1="15" y1="14.5" x2="15" y2="16.5" stroke="currentColor" strokeWidth="0.4" opacity="0.6" />
      {/* Dimension arrowheads */}
      <path d="M 5 15.5 L 6.5 15.2 M 5 15.5 L 6.5 15.8" stroke="currentColor" strokeWidth="0.3" opacity="0.6" />
      <path d="M 15 15.5 L 13.5 15.2 M 15 15.5 L 13.5 15.8" stroke="currentColor" strokeWidth="0.3" opacity="0.6" />

      {/* Vertical dimension line */}
      <line x1="17" y1="6" x2="17" y2="14" stroke="currentColor" strokeWidth="0.4" opacity="0.6" />
      <line x1="16" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="0.4" opacity="0.6" />
      <line x1="16" y1="14" x2="18" y2="14" stroke="currentColor" strokeWidth="0.4" opacity="0.6" />

      {/* Extension lines */}
      <line x1="15" y1="6" x2="16.5" y2="6" stroke="currentColor" strokeWidth="0.3" opacity="0.3" strokeDasharray="1 1" />
      <line x1="15" y1="14" x2="16.5" y2="14" stroke="currentColor" strokeWidth="0.3" opacity="0.3" strokeDasharray="1 1" />

      {/* Centerline through hole */}
      <line x1="6" y1="10" x2="10" y2="10" stroke="currentColor" strokeWidth="0.3" opacity="0.3" strokeDasharray="2 1 0.5 1" />
      <line x1="8" y1="8" x2="8" y2="12" stroke="currentColor" strokeWidth="0.3" opacity="0.3" strokeDasharray="2 1 0.5 1" />
    </svg>
  );
}
