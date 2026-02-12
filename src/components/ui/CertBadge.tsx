interface CertBadgeProps {
  title: string;
  subtitle: string;
  type: "circle" | "shield";
  color: string;
}

const colorMap: Record<string, { border: string; text: string; bg: string; glow: string }> = {
  "brand-blue": {
    border: "border-brand-blue/30",
    text: "text-brand-blue",
    bg: "bg-brand-blue/[0.04]",
    glow: "group-hover:border-brand-blue/50 group-hover:bg-brand-blue/[0.08]",
  },
  "brand-orange": {
    border: "border-brand-orange/30",
    text: "text-brand-orange",
    bg: "bg-brand-orange/[0.04]",
    glow: "group-hover:border-brand-orange/50 group-hover:bg-brand-orange/[0.08]",
  },
  "brand-green": {
    border: "border-brand-green/30",
    text: "text-brand-green",
    bg: "bg-brand-green/[0.04]",
    glow: "group-hover:border-brand-green/50 group-hover:bg-brand-green/[0.08]",
  },
};

export default function CertBadge({
  title,
  subtitle,
  type,
  color,
}: CertBadgeProps) {
  const colors = colorMap[color] || colorMap["brand-blue"];

  if (type === "shield") {
    return (
      <div className="flex flex-col items-center group">
        <div className="h-24 flex items-center justify-center">
          <div
            className={`relative w-24 h-24 ${colors.bg} ${colors.border} border-2 flex flex-col items-center justify-center transition-all duration-300 ${colors.glow}`}
            style={{
              clipPath:
                "polygon(50% 0%, 100% 10%, 100% 75%, 50% 100%, 0% 75%, 0% 10%)",
            }}
          >
            <span className={`text-xs font-bold ${colors.text}`}>{title}</span>
          </div>
        </div>
        <p className="mt-3 text-xs text-gray-400 font-medium tracking-wide">{subtitle}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center group">
      <div className="h-24 flex items-center justify-center">
        <div
          className={`w-24 h-24 rounded-full ${colors.border} border-2 ${colors.bg} flex flex-col items-center justify-center transition-all duration-300 ${colors.glow}`}
        >
          <span className={`text-xs font-bold ${colors.text} text-center leading-tight px-2`}>
            {title}
          </span>
        </div>
      </div>
      <p className="mt-3 text-xs text-gray-400 font-medium tracking-wide">{subtitle}</p>
    </div>
  );
}
