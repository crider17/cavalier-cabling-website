"use client";

import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { CTA_BANNER } from "@/lib/constants";

export default function CtaBanner() {
  return (
    <section className="relative py-20 md:py-24 bg-brand-orange overflow-hidden">
      {/* Diagonal pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            rgba(255, 255, 255, 1) 20px,
            rgba(255, 255, 255, 1) 21px
          )`,
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-white/60 mb-5">
            {CTA_BANNER.subtitle}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-800 uppercase text-white mb-10 tracking-tight">
            {CTA_BANNER.heading}
          </h2>
          <Button variant="white-outline" href="#contact">
            {CTA_BANNER.cta} &rarr;
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
