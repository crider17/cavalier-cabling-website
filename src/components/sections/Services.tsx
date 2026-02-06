"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { SERVICES } from "@/lib/constants";

const delays = ["delay-100", "delay-200", "delay-300", "delay-100", "delay-200", "delay-300"];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-14">
          <SectionHeading label={SERVICES.label} heading={SERVICES.heading} />
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.items.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={delays[i]} className="h-full">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
