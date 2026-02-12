import { Shield, Plane, Wrench, Car } from "lucide-react";

const iconMap = {
  Shield,
  Plane,
  Wrench,
  Car,
} as const;

interface IndustryCardProps {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  gradient: string;
  accent: string;
}

export default function IndustryCard({
  title,
  description,
  icon,
  gradient,
  accent,
}: IndustryCardProps) {
  const Icon = iconMap[icon];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-7 h-full hover:scale-[1.02] transition-all duration-400`}
    >
      {/* Top accent bar */}
      <div className={`h-[2px] w-10 ${accent} rounded-full mb-5`} />

      {/* Watermark icon */}
      <Icon className="absolute -bottom-3 -right-3 w-24 h-24 text-white/[0.03] group-hover:text-white/[0.07] transition-all duration-500" strokeWidth={1} />

      <h3 className="font-display text-xl font-700 uppercase tracking-wide text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-300/90 text-sm leading-relaxed relative z-10">
        {description}
      </p>
    </div>
  );
}
