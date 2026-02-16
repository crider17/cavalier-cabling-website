export default function CircuitTraces({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Trace 1 - top left to center */}
      <path
        d="M 0 120 L 180 120 L 200 140 L 400 140 L 420 120 L 520 120"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        className="trace-draw trace-delay-1"
      />
      <circle cx="520" cy="120" r="3" fill="currentColor" className="trace-draw trace-delay-1" />

      {/* Trace 2 - left side mid */}
      <path
        d="M 0 320 L 120 320 L 140 300 L 280 300 L 300 320 L 380 320 L 400 340 L 450 340"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        className="trace-draw trace-delay-2"
      />
      <circle cx="450" cy="340" r="2.5" fill="currentColor" className="trace-draw trace-delay-2" />

      {/* Trace 3 - bottom left */}
      <path
        d="M 80 700 L 80 580 L 100 560 L 100 480 L 120 460 L 260 460"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        className="trace-draw trace-delay-3"
      />
      <circle cx="260" cy="460" r="3" fill="currentColor" className="trace-draw trace-delay-3" />

      {/* Trace 4 - top right */}
      <path
        d="M 1200 80 L 1020 80 L 1000 100 L 860 100 L 840 80 L 760 80"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        className="trace-draw trace-delay-4"
      />
      <circle cx="760" cy="80" r="2.5" fill="currentColor" className="trace-draw trace-delay-4" />

      {/* Trace 5 - right side */}
      <path
        d="M 1200 400 L 1080 400 L 1060 380 L 940 380 L 920 400 L 820 400"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        className="trace-draw trace-delay-5"
      />
      <circle cx="820" cy="400" r="3" fill="currentColor" className="trace-draw trace-delay-5" />

      {/* Trace 6 - bottom right */}
      <path
        d="M 1100 700 L 1100 600 L 1080 580 L 1080 500 L 1060 480 L 940 480"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        className="trace-draw trace-delay-6"
      />
      <circle cx="940" cy="480" r="2.5" fill="currentColor" className="trace-draw trace-delay-6" />

      {/* Trace 7 - center horizontal */}
      <path
        d="M 500 350 L 560 350 L 580 330 L 620 330 L 640 350 L 700 350"
        stroke="#E8602C"
        strokeWidth="0.75"
        strokeLinecap="round"
        className="trace-draw trace-delay-3"
        opacity="0.5"
      />
      <circle cx="500" cy="350" r="2" fill="#E8602C" opacity="0.5" className="trace-draw trace-delay-3" />
      <circle cx="700" cy="350" r="2" fill="#E8602C" opacity="0.5" className="trace-draw trace-delay-3" />

      {/* Trace 8 - top center */}
      <path
        d="M 500 0 L 500 60 L 520 80 L 520 160 L 540 180 L 600 180"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        className="trace-draw trace-delay-5"
      />

      {/* Via pads (small circles at intersections) */}
      <circle cx="200" cy="140" r="4" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
      <circle cx="1000" cy="100" r="4" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
      <circle cx="1060" cy="380" r="4" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
    </svg>
  );
}
