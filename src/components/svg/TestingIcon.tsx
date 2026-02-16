export default function TestingIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Test probe with waveform/signal */}
      {/* Probe body */}
      <path
        d="M 3 18 L 8 13 L 9.5 14.5 L 4.5 19.5 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Probe tip */}
      <path
        d="M 8 13 L 10 11"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />

      {/* Contact point spark */}
      <circle cx="10.5" cy="10.5" r="1" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />

      {/* Signal waveform */}
      <path
        d="M 11.5 9 L 13 9 L 13.5 5 L 14.5 13 L 15.5 5 L 16.5 13 L 17.5 5 L 18 9 L 19.5 9"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Signal display frame */}
      <rect x="11" y="3.5" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />

      {/* Display grid */}
      <line x1="11" y1="7.5" x2="21" y2="7.5" stroke="currentColor" strokeWidth="0.25" opacity="0.2" />
      <line x1="16" y1="3.5" x2="16" y2="11.5" stroke="currentColor" strokeWidth="0.25" opacity="0.2" />

      {/* Pass indicator */}
      <path
        d="M 15 15 L 16.5 17 L 20 13"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Wire from probe */}
      <path
        d="M 4 19 Q 2 20 2 21"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
