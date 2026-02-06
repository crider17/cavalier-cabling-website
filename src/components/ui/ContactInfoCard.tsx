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
    <div className="flex items-start gap-4 p-5 rounded-xl bg-brand-gray-light hover:shadow-md transition-shadow duration-200">
      <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-brand-orange" />
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
