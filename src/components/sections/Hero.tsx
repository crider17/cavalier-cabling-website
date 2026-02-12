import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { HERO } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-brand-gray-dark overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0">
        {/* Radial color accents */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 15% 50%, rgba(232, 96, 44, 0.07) 0%, transparent 50%),
              radial-gradient(ellipse at 85% 20%, rgba(59, 93, 170, 0.05) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 80%, rgba(232, 96, 44, 0.03) 0%, transparent 40%)
            `,
          }}
        />

        {/* Technical grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Diagonal accent lines */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              rgba(232, 96, 44, 1) 40px,
              rgba(232, 96, 44, 1) 41px
            )`,
          }}
        />

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-gray-dark to-transparent" />
      </div>

      {/* Corner accents */}
      <div className="absolute top-24 left-8 w-16 h-[1px] bg-brand-orange/20 hidden lg:block" />
      <div className="absolute top-24 left-8 w-[1px] h-16 bg-brand-orange/20 hidden lg:block" />
      <div className="absolute bottom-24 right-8 w-16 h-[1px] bg-brand-orange/20 hidden lg:block" />
      <div className="absolute bottom-24 right-8 w-[1px] h-16 bg-brand-orange/20 hidden lg:block" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="animate-hero-fade animate-hero-fade-1 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange/80 mb-8">
          {HERO.subtitle}
        </p>

        <h1 className="animate-hero-fade animate-hero-fade-2 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-800 uppercase text-white leading-[0.95] tracking-tight mb-8">
          {HERO.heading}
        </h1>

        <div className="animate-hero-line flex items-center justify-center gap-3 mb-12">
          <div className="h-[2px] w-12 bg-brand-orange/40" />
          <div className="h-[2px] w-20 bg-brand-orange" />
          <div className="h-[2px] w-12 bg-brand-orange/40" />
        </div>

        <div className="animate-hero-fade animate-hero-fade-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" href="#contact">
            {HERO.ctaPrimary}
          </Button>
          <Button variant="outline" href="#services">
            {HERO.ctaSecondary}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7 text-white/30" />
      </a>
    </section>
  );
}
