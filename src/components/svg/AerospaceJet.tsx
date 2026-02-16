export default function AerospaceJet({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Fighter jet silhouette - top-down view style */}
      {/* Fuselage */}
      <path
        d="M 100 25 L 105 40 L 108 70 L 110 100 L 112 130 L 115 155 L 110 170 L 100 175 L 90 170 L 85 155 L 88 130 L 90 100 L 92 70 L 95 40 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Nose cone */}
      <path
        d="M 98 30 L 100 20 L 102 30"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Canopy */}
      <ellipse cx="100" cy="55" rx="4" ry="10" stroke="currentColor" strokeWidth="0.75" opacity="0.7" fill="none" />

      {/* Main wings (swept) */}
      <path
        d="M 92 95 L 35 120 L 30 125 L 32 130 L 88 115"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M 108 95 L 165 120 L 170 125 L 168 130 L 112 115"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Wing hardpoints */}
      <line x1="55" y1="115" x2="55" y2="122" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <line x1="70" y1="110" x2="70" y2="117" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <line x1="130" y1="110" x2="130" y2="117" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <line x1="145" y1="115" x2="145" y2="122" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />

      {/* Horizontal stabilizers */}
      <path
        d="M 90 155 L 60 165 L 58 170 L 88 162"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M 110 155 L 140 165 L 142 170 L 112 162"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Vertical stabilizers (twin) */}
      <path
        d="M 93 150 L 88 145 L 86 155 L 90 160"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M 107 150 L 112 145 L 114 155 L 110 160"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Engine exhaust nozzles */}
      <ellipse cx="95" cy="175" rx="3" ry="2" stroke="currentColor" strokeWidth="0.75" opacity="0.6" fill="none" />
      <ellipse cx="105" cy="175" rx="3" ry="2" stroke="currentColor" strokeWidth="0.75" opacity="0.6" fill="none" />

      {/* Center line */}
      <line x1="100" y1="30" x2="100" y2="170" stroke="currentColor" strokeWidth="0.3" opacity="0.2" strokeDasharray="3 5" />
    </svg>
  );
}
