"use client";

import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { CTA_BANNER } from "@/lib/constants";

export default function CtaBanner() {
  return (
    <section className="py-16 md:py-20 bg-brand-orange">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white/70 mb-4">
            {CTA_BANNER.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
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
