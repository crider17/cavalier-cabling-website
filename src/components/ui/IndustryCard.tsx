import DefenseVehicle from "@/components/svg/DefenseVehicle";
import AerospaceJet from "@/components/svg/AerospaceJet";
import IndustrialRoboticArm from "@/components/svg/IndustrialRoboticArm";
import AutomotiveVehicle from "@/components/svg/AutomotiveVehicle";

const iconMap = {
  DefenseVehicle,
  AerospaceJet,
  IndustrialRoboticArm,
  AutomotiveVehicle,
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
  const Illustration = iconMap[icon];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-7 h-full hover:scale-[1.02] transition-all duration-400`}
    >
      {/* Top accent bar */}
      <div className={`h-[2px] w-10 ${accent} rounded-full mb-5`} />

      {/* Watermark illustration */}
      <Illustration className="absolute -bottom-4 -right-4 w-48 h-48 text-white/[0.03] group-hover:text-white/[0.07] transition-all duration-500" />

      <h3 className="font-display text-xl font-700 uppercase tracking-wide text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-300/90 text-sm leading-relaxed relative z-10">
        {description}
      </p>
    </div>
  );
}
