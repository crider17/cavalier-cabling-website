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
    "bg-brand-orange text-white hover:bg-brand-orange-dark",
  outline:
    "border-2 border-white text-white hover:bg-white/10",
  "white-outline":
    "border-2 border-white text-white hover:bg-white hover:text-brand-orange",
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
    "inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold text-sm tracking-wide transition-all duration-200 cursor-pointer";

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
