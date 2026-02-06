"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import IndustryCard from "@/components/ui/IndustryCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { INDUSTRIES } from "@/lib/constants";

const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-14">
          <SectionHeading
            label={INDUSTRIES.label}
            heading={INDUSTRIES.heading}
            light
          />
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.items.map((industry, i) => (
            <AnimateOnScroll key={industry.title} delay={delays[i]} className="h-full">
              <IndustryCard
                title={industry.title}
                description={industry.description}
                icon={industry.icon}
                gradient={industry.gradient}
                accent={industry.accent}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
