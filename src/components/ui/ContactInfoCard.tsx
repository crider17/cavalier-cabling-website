import { Phone, MapPin, Mail } from "lucide-react";

const iconMap = {
  phone: Phone,
  location: MapPin,
  email: Mail,
} as const;

interface ContactInfoCardProps {
  type: keyof typeof iconMap;
  label: string;
  value: string;
  href?: string;
}

export default function ContactInfoCard({
  type,
  label,
  value,
  href,
}: ContactInfoCardProps) {
  const Icon = iconMap[type];

  const content = (
    <div className="group flex items-start gap-4 p-5 rounded-xl bg-brand-gray-light/60 border border-gray-100 hover:border-brand-orange/15 hover:bg-brand-orange/[0.02] transition-all duration-300">
      <div className="w-11 h-11 rounded-xl bg-brand-orange/[0.07] border border-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300">
        <Icon className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
          {label}
        </p>
        <p className="text-base font-semibold text-brand-black">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}
