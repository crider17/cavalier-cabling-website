import clsx from "clsx";

type Variant = "primary" | "outline" | "white-outline";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-orange text-white hover:bg-brand-orange-dark shadow-[0_2px_12px_rgba(232,96,44,0.25)] hover:shadow-[0_4px_20px_rgba(232,96,44,0.35)]",
  outline:
    "border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/5",
  "white-outline":
    "border-2 border-white/40 text-white hover:bg-white hover:text-brand-orange hover:border-white",
};

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  disabled = false,
  className,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer";

  const classes = clsx(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
