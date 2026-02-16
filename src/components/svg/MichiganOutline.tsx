export default function MichiganOutline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Upper Peninsula */}
      <path
        d="M 50 120 L 60 115 L 80 110 L 100 108 L 120 112 L 140 108 L 160 105 L 180 100 L 200 98 L 210 102 L 215 110 L 220 105 L 230 108 L 235 115 L 230 120 L 225 128 L 218 130 L 210 128 L 200 132 L 190 130 L 175 135 L 160 132 L 145 138 L 130 135 L 115 140 L 100 138 L 85 135 L 70 130 L 55 128 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Mackinac Bridge (connecting line) */}
      <path
        d="M 225 128 Q 230 145 228 160"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="3 3"
        opacity="0.4"
        fill="none"
      />

      {/* Lower Peninsula */}
      <path
        d="M 228 160 L 235 165 L 245 170 L 260 175 L 275 185 L 285 195 L 295 210 L 305 230 L 310 250 L 312 270 L 308 290 L 300 310 L 290 325 L 278 340 L 265 350 L 250 358 L 238 362 L 225 360 L 215 355 L 205 345 L 195 340 L 185 335 L 178 328 L 172 315 L 165 305 L 158 300 L 150 298 L 142 300 L 135 305 L 128 310 L 122 308 L 118 300 L 120 290 L 125 278 L 130 268 L 135 255 L 140 245 L 148 235 L 155 225 L 162 218 L 168 210 L 175 200 L 182 192 L 190 185 L 200 178 L 210 170 L 220 165 L 228 160 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Port Huron location - pulsing pin */}
      <g className="animate-pin-pulse">
        {/* Pin drop shadow */}
        <ellipse cx="310" cy="250" rx="6" ry="2" fill="currentColor" opacity="0.15" />

        {/* Pin body */}
        <path
          d="M 310 245 C 310 238 303 233 303 227 C 303 223 306 220 310 220 C 314 220 317 223 317 227 C 317 233 310 238 310 245 Z"
          stroke="#E8602C"
          strokeWidth="1.5"
          fill="#E8602C"
          opacity="0.8"
        />

        {/* Pin inner circle */}
        <circle cx="310" cy="227" r="3" fill="white" opacity="0.9" />
      </g>

      {/* Pulse rings around pin */}
      <circle cx="310" cy="235" r="10" stroke="#E8602C" strokeWidth="0.75" opacity="0.3" className="animate-pin-ring-1" />
      <circle cx="310" cy="235" r="18" stroke="#E8602C" strokeWidth="0.5" opacity="0.15" className="animate-pin-ring-2" />
    </svg>
  );
}
