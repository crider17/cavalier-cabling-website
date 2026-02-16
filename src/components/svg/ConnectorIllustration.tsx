export default function ConnectorIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer shell ring */}
      <circle cx="200" cy="190" r="130" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle cx="200" cy="190" r="140" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      <circle cx="200" cy="190" r="120" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />

      {/* Shell body / flange */}
      <circle cx="200" cy="190" r="110" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeDasharray="4 3" />

      {/* Key slot at top */}
      <rect x="194" y="62" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.5" />

      {/* Inner insert ring */}
      <circle cx="200" cy="190" r="85" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="200" cy="190" r="80" stroke="#E8602C" strokeWidth="0.5" opacity="0.4" />

      {/* Center pin arrangement - MIL-DTL-38999 style */}
      {/* Center pin */}
      <circle cx="200" cy="190" r="6" stroke="#E8602C" strokeWidth="1" opacity="0.8" className="animate-connector-pulse" />
      <circle cx="200" cy="190" r="3" fill="#E8602C" opacity="0.6" className="animate-connector-pulse" />

      {/* Inner ring of pins (6 pins) */}
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x = 200 + 28 * Math.cos(rad);
        const y = 190 + 28 * Math.sin(rad);
        return (
          <g key={`inner-${angle}`}>
            <circle cx={x} cy={y} r="5" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <circle cx={x} cy={y} r="2.5" fill="currentColor" opacity="0.3" />
          </g>
        );
      })}

      {/* Middle ring of pins (12 pins) */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x = 200 + 52 * Math.cos(rad);
        const y = 190 + 52 * Math.sin(rad);
        return (
          <g key={`mid-${angle}`}>
            <circle cx={x} cy={y} r="4.5" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
            <circle cx={x} cy={y} r="2" fill="currentColor" opacity="0.25" />
          </g>
        );
      })}

      {/* Outer ring of pins (18 pins) */}
      {Array.from({ length: 18 }, (_, i) => i * 20).map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x = 200 + 72 * Math.cos(rad);
        const y = 190 + 72 * Math.sin(rad);
        return (
          <g key={`outer-${angle}`}>
            <circle cx={x} cy={y} r="3.5" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
            <circle cx={x} cy={y} r="1.5" fill="currentColor" opacity="0.2" />
          </g>
        );
      })}

      {/* Coupling ring threads */}
      <path
        d="M 200 50 A 140 140 0 0 1 340 190"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.2"
        fill="none"
        strokeDasharray="2 4"
      />

      {/* Cable attachment below */}
      <path
        d="M 170 320 L 170 340 Q 170 360 200 360 Q 230 360 230 340 L 230 320"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
        fill="none"
        strokeLinecap="round"
      />
      <line x1="170" y1="320" x2="230" y2="320" stroke="currentColor" strokeWidth="1" opacity="0.4" />

      {/* Strain relief boot */}
      <path
        d="M 175 330 Q 175 350 200 355 Q 225 350 225 330"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.2"
        fill="none"
      />

      {/* Dimension callout lines */}
      {/* Horizontal dimension */}
      <line x1="55" y1="190" x2="75" y2="190" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
      <line x1="325" y1="190" x2="345" y2="190" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
      <line x1="60" y1="180" x2="60" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
      <line x1="340" y1="180" x2="340" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
      <text x="200" y="42" textAnchor="middle" fill="currentColor" opacity="0.2" fontSize="9" fontFamily="monospace">
        MIL-DTL-38999
      </text>

      {/* Size callout */}
      <text x="350" y="194" textAnchor="start" fill="currentColor" opacity="0.15" fontSize="8" fontFamily="monospace">
        25-37P
      </text>
    </svg>
  );
}
