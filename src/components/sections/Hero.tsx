import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { HERO } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-brand-gray-dark overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 50%, rgba(232, 96, 44, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(59, 93, 170, 0.06) 0%, transparent 50%),
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 100% 100%, 60px 60px, 60px 60px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="animate-hero-fade animate-hero-fade-1 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gray-400 mb-6">
          {HERO.subtitle}
        </p>

        <h1 className="animate-hero-fade animate-hero-fade-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          {HERO.heading}
        </h1>

        <div className="animate-hero-fade animate-hero-fade-3 w-24 h-1 bg-brand-orange mx-auto mb-10" />

        <div className="animate-hero-fade animate-hero-fade-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" href="#contact">
            {HERO.ctaPrimary}
          </Button>
          <Button variant="outline" href="#services">
            {HERO.ctaSecondary}
          </Button>
        </div>
      </div>

      {/* Scroll chevron */}
      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-white/40" />
      </a>
    </section>
  );
}
