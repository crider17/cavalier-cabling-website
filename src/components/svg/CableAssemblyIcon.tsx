export default function CableAssemblyIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Multi-conductor cable cross-section */}
      {/* Outer jacket */}
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />

      {/* Shield/braid layer */}
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="0.5" opacity="0.5" strokeDasharray="2 1.5" />

      {/* Conductors in cross-section */}
      <circle cx="12" cy="7.5" r="2" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="7.5" r="0.8" fill="currentColor" opacity="0.5" />

      <circle cx="8" cy="13" r="2" stroke="currentColor" strokeWidth="1" />
      <circle cx="8" cy="13" r="0.8" fill="currentColor" opacity="0.5" />

      <circle cx="16" cy="13" r="2" stroke="currentColor" strokeWidth="1" />
      <circle cx="16" cy="13" r="0.8" fill="currentColor" opacity="0.5" />

      {/* Center drain wire */}
      <circle cx="12" cy="12" r="1" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />
      <circle cx="12" cy="12" r="0.4" fill="currentColor" opacity="0.4" />

      {/* Filler material between conductors */}
      <path
        d="M 10.5 9.5 Q 12 11 13.5 9.5"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.2"
        fill="none"
      />
      <path
        d="M 9.5 11 Q 10.5 12.5 9.5 14"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.2"
        fill="none"
      />
      <path
        d="M 14.5 11 Q 13.5 12.5 14.5 14"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.2"
        fill="none"
      />
    </svg>
  );
}
