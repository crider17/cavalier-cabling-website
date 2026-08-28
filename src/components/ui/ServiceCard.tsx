import CableAssemblyIcon from "@/components/svg/CableAssemblyIcon";
import WireHarnessIcon from "@/components/svg/WireHarnessIcon";
import MilSpecConnectorIcon from "@/components/svg/MilSpecConnectorIcon";
import ConnectorTerminationIcon from "@/components/svg/ConnectorTerminationIcon";
import TestingIcon from "@/components/svg/TestingIcon";

const iconMap = {
  CableAssembly: CableAssemblyIcon,
  WireHarness: WireHarnessIcon,
  MilSpecConnector: MilSpecConnectorIcon,
  ConnectorTermination: ConnectorTerminationIcon,
  Testing: TestingIcon,
} as const;

interface ServiceCardProps {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="card-glow group h-full bg-white rounded-2xl p-7 border border-gray-100 hover:-translate-y-1 transition-all duration-400">
      {/* Icon + accent line */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-11 h-11 rounded-xl bg-brand-orange/[0.07] border border-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300">
          <Icon className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors duration-300" />
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
      </div>

      <h3 className="font-display text-[1.1rem] font-700 uppercase tracking-wide text-brand-black mb-2.5">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
