"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import CertBadge from "@/components/ui/CertBadge";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { CERTIFICATIONS } from "@/lib/constants";

const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-14">
          <SectionHeading
            label={CERTIFICATIONS.label}
            heading={CERTIFICATIONS.heading}
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl md:max-w-4xl mx-auto">
          {CERTIFICATIONS.items.map((cert, i) => (
            <AnimateOnScroll
              key={cert.title}
              delay={delays[i]}
              className="flex justify-center"
            >
              <CertBadge
                title={cert.title}
                subtitle={cert.subtitle}
                type={cert.type}
                color={cert.color}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
