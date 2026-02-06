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
      className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${gradient} p-6 h-full hover:scale-[1.02] transition-all duration-300`}
    >
      <div className={`h-1 w-12 ${accent} rounded-full mb-4`} />

      {/* Icon watermark */}
      <Icon className="absolute -bottom-4 -right-4 w-28 h-28 text-white/[0.04] group-hover:text-white/[0.08] transition-colors duration-300" />

      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed relative z-10">
        {description}
      </p>
    </div>
  );
}
