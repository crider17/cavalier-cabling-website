export default function IndustrialRoboticArm({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Base platform */}
      <ellipse cx="100" cy="175" rx="35" ry="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <ellipse cx="100" cy="170" rx="28" ry="5" stroke="currentColor" strokeWidth="0.75" opacity="0.5" fill="none" />

      {/* Base column */}
      <path
        d="M 88 170 L 88 150 L 112 150 L 112 170"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Shoulder joint */}
      <circle cx="100" cy="145" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="100" cy="145" r="4" stroke="currentColor" strokeWidth="0.75" opacity="0.5" fill="none" />

      {/* Upper arm */}
      <path
        d="M 105 137 L 130 85 L 140 80 L 135 90 L 110 140"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Elbow joint */}
      <circle cx="137" cy="82" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="137" cy="82" r="3" stroke="currentColor" strokeWidth="0.75" opacity="0.5" fill="none" />

      {/* Forearm */}
      <path
        d="M 143 77 L 155 50 L 160 42 L 155 55 L 145 75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Wrist joint */}
      <circle cx="158" cy="44" r="6" stroke="currentColor" strokeWidth="1" fill="none" />

      {/* End effector / gripper */}
      <path
        d="M 162 40 L 172 30 L 178 25"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 162 40 L 175 35 L 182 32"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      {/* Gripper tips */}
      <line x1="178" y1="25" x2="180" y2="28" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
      <line x1="182" y1="32" x2="180" y2="28" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />

      {/* Cable routing lines */}
      <path
        d="M 95 148 Q 115 120 132 88"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.3"
        fill="none"
        strokeDasharray="2 3"
      />
      <path
        d="M 140 78 Q 148 60 155 48"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.3"
        fill="none"
        strokeDasharray="2 3"
      />

      {/* Motion arc indicators */}
      <path
        d="M 70 145 A 30 30 0 0 1 100 115"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.2"
        fill="none"
        strokeDasharray="3 4"
      />

      {/* Ground line */}
      <line x1="55" y1="183" x2="145" y2="183" stroke="currentColor" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 3" />
    </svg>
  );
}
