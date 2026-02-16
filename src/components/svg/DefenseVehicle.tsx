export default function DefenseVehicle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* MRAP-style armored vehicle silhouette */}
      {/* Hull body */}
      <path
        d="M 30 130 L 35 100 L 40 85 L 55 75 L 70 70 L 130 70 L 145 75 L 160 85 L 165 100 L 170 130"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* V-hull bottom */}
      <path
        d="M 30 130 L 55 150 L 100 155 L 145 150 L 170 130"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Turret / roof structure */}
      <path
        d="M 75 70 L 75 55 L 125 55 L 125 70"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Gun / weapon station */}
      <path
        d="M 125 60 L 165 55 L 170 53"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />

      {/* Antenna */}
      <line x1="80" y1="55" x2="78" y2="38" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
      <circle cx="78" cy="36" r="1.5" stroke="currentColor" strokeWidth="0.75" fill="none" />

      {/* Windshield slits */}
      <line x1="60" y1="80" x2="75" y2="78" stroke="currentColor" strokeWidth="0.75" opacity="0.7" />
      <line x1="85" y1="77" x2="115" y2="77" stroke="currentColor" strokeWidth="0.75" opacity="0.7" />
      <line x1="125" y1="78" x2="140" y2="80" stroke="currentColor" strokeWidth="0.75" opacity="0.7" />

      {/* Side armor plates */}
      <line x1="40" y1="90" x2="40" y2="125" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <line x1="160" y1="90" x2="160" y2="125" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />

      {/* Wheels (4 large off-road tires) */}
      <circle cx="55" cy="155" r="16" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="55" cy="155" r="8" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <circle cx="55" cy="155" r="3" fill="currentColor" opacity="0.3" />

      <circle cx="100" cy="158" r="16" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="100" cy="158" r="8" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <circle cx="100" cy="158" r="3" fill="currentColor" opacity="0.3" />

      <circle cx="145" cy="155" r="16" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="145" cy="155" r="8" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <circle cx="145" cy="155" r="3" fill="currentColor" opacity="0.3" />

      {/* Ground line */}
      <line x1="20" y1="174" x2="180" y2="174" stroke="currentColor" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 3" />
    </svg>
  );
}
