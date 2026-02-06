interface CertBadgeProps {
  title: string;
  subtitle: string;
  type: "circle" | "shield";
  color: string;
}

const colorMap: Record<string, { border: string; text: string; bg: string }> = {
  "brand-blue": {
    border: "border-brand-blue",
    text: "text-brand-blue",
    bg: "bg-brand-blue/5",
  },
  "brand-orange": {
    border: "border-brand-orange",
    text: "text-brand-orange",
    bg: "bg-brand-orange/5",
  },
  "brand-green": {
    border: "border-brand-green",
    text: "text-brand-green",
    bg: "bg-brand-green/5",
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
      <div className="flex flex-col items-center">
        <div
          className={`relative w-24 h-28 ${colors.bg} ${colors.border} border-2 flex flex-col items-center justify-center`}
          style={{
            clipPath:
              "polygon(50% 0%, 100% 10%, 100% 75%, 50% 100%, 0% 75%, 0% 10%)",
          }}
        >
          <span className={`text-xs font-bold ${colors.text}`}>{title}</span>
        </div>
        <p className="mt-2 text-xs text-gray-500 font-medium">{subtitle}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-24 h-24 rounded-full ${colors.border} border-[3px] ${colors.bg} flex flex-col items-center justify-center`}
      >
        <span className={`text-xs font-bold ${colors.text} text-center leading-tight px-2`}>
          {title}
        </span>
      </div>
      <p className="mt-2 text-xs text-gray-500 font-medium">{subtitle}</p>
    </div>
  );
}
