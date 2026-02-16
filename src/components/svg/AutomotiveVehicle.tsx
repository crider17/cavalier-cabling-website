export default function AutomotiveVehicle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Performance / EV vehicle silhouette - side view */}
      {/* Main body profile */}
      <path
        d="M 25 125 L 30 120 L 40 115 L 55 108 L 65 95 L 75 82 L 90 75 L 110 72 L 130 72 L 145 74 L 155 80 L 162 90 L 168 100 L 175 115 L 178 120 L 180 125"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Roofline */}
      <path
        d="M 75 82 L 85 72 L 115 68 L 140 70 L 155 80"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Windshield */}
      <line x1="75" y1="82" x2="90" y2="72" stroke="currentColor" strokeWidth="0.75" opacity="0.7" />

      {/* Rear window */}
      <line x1="145" y1="74" x2="155" y2="80" stroke="currentColor" strokeWidth="0.75" opacity="0.7" />

      {/* Side windows */}
      <path
        d="M 92 74 L 115 72 L 140 73"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.5"
        fill="none"
      />

      {/* Door line */}
      <line x1="115" y1="72" x2="115" y2="115" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />

      {/* Undercarriage / rocker panel */}
      <path
        d="M 25 125 L 45 130 L 70 132 L 130 132 L 160 130 L 180 125"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Front wheel */}
      <circle cx="60" cy="132" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="60" cy="132" r="12" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <circle cx="60" cy="132" r="4" fill="currentColor" opacity="0.3" />
      {/* Spokes */}
      {[0, 72, 144, 216, 288].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 60 + 5 * Math.cos(rad);
        const y1 = 132 + 5 * Math.sin(rad);
        const x2 = 60 + 11 * Math.cos(rad);
        const y2 = 132 + 11 * Math.sin(rad);
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" opacity="0.4" />;
      })}

      {/* Rear wheel */}
      <circle cx="150" cy="132" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="150" cy="132" r="12" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <circle cx="150" cy="132" r="4" fill="currentColor" opacity="0.3" />
      {[0, 72, 144, 216, 288].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 150 + 5 * Math.cos(rad);
        const y1 = 132 + 5 * Math.sin(rad);
        const x2 = 150 + 11 * Math.cos(rad);
        const y2 = 132 + 11 * Math.sin(rad);
        return <line key={`r-${angle}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" opacity="0.4" />;
      })}

      {/* Headlight */}
      <path
        d="M 30 118 L 38 115 L 42 118"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.6"
        fill="none"
      />

      {/* Taillight */}
      <path
        d="M 175 118 L 172 115 L 168 118"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.6"
        fill="none"
      />

      {/* Ground line */}
      <line x1="20" y1="152" x2="185" y2="152" stroke="currentColor" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 3" />

      {/* Speed lines */}
      <line x1="10" y1="95" x2="30" y2="95" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      <line x1="5" y1="105" x2="25" y2="105" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
      <line x1="8" y1="115" x2="22" y2="115" stroke="currentColor" strokeWidth="0.5" opacity="0.12" />
    </svg>
  );
}
