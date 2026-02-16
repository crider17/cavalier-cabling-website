"use client";

import { Zap, GitBranch, Shield } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { FEATURES } from "@/lib/constants";
import FeatureConnectorLines from "@/components/svg/FeatureConnectorLines";

const iconMap = { Zap, GitBranch, Shield } as const;

const titles = [
  "Full-Scale Production",
  "Engineering Partnership",
  "Quality Assured",
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white relative">
      {/* Connector lines between feature columns (desktop only) */}
      <div className="hidden md:block absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none">
        <FeatureConnectorLines className="w-full h-auto text-brand-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <AnimateOnScroll
                key={i}
                delay={i === 0 ? "delay-100" : i === 1 ? "delay-200" : "delay-300"}
              >
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-brand-orange/[0.07] border border-brand-orange/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-orange/[0.12] group-hover:border-brand-orange/20 transition-all duration-300">
                    <Icon className="w-7 h-7 text-brand-orange" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-700 uppercase tracking-wide text-brand-black mb-3">
                    {titles[i]}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[0.95rem]">
                    {feature.text}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
