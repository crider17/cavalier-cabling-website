"use client";

import { Zap, GitBranch, Shield } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { FEATURES } from "@/lib/constants";

const iconMap = { Zap, GitBranch, Shield } as const;

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <AnimateOnScroll
                key={i}
                delay={i === 0 ? "delay-100" : i === 1 ? "delay-200" : "delay-300"}
              >
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-brand-orange" />
                  </div>
                  <p className="text-gray-600 leading-relaxed">
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
