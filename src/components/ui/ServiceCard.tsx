import {
  Cable,
  Workflow,
  Shield,
  Plug,
  PenTool,
  ClipboardCheck,
} from "lucide-react";

const iconMap = {
  Cable,
  Workflow,
  Shield,
  Plug,
  PenTool,
  ClipboardCheck,
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
    <div className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 hover:border-t-4 hover:border-t-brand-orange transition-all duration-200">
      <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-brand-orange" />
      </div>
      <h3 className="text-lg font-bold text-brand-black mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
