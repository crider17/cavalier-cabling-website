"use client";

import { useState, FormEvent } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ContactInfoCard from "@/components/ui/ContactInfoCard";
import Button from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = {
      name: formData.get("name"),
      organization: formData.get("organization"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Built In Michigan banner */}
      <div className="relative bg-brand-gray-dark py-16 overflow-hidden">
        {/* City skyline silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-[0.06]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full fill-white"
          >
            <path d="M0,120 L0,80 L40,80 L40,60 L60,60 L60,40 L80,40 L80,60 L100,60 L100,30 L110,30 L110,20 L120,20 L120,30 L130,30 L130,60 L150,60 L150,50 L170,50 L170,35 L180,35 L180,25 L190,25 L190,35 L200,35 L200,50 L220,50 L220,70 L260,70 L260,45 L270,45 L270,25 L280,25 L280,15 L290,15 L290,25 L300,25 L300,45 L310,45 L310,70 L340,70 L340,55 L360,55 L360,40 L380,40 L380,55 L400,55 L400,65 L440,65 L440,50 L450,50 L450,30 L460,30 L460,20 L470,20 L470,30 L480,30 L480,50 L500,50 L500,75 L540,75 L540,60 L560,60 L560,45 L570,45 L570,30 L580,30 L580,45 L600,45 L600,60 L640,60 L640,70 L680,70 L680,40 L690,40 L690,20 L700,20 L700,10 L710,10 L710,20 L720,20 L720,40 L740,40 L740,70 L780,70 L780,55 L800,55 L800,65 L840,65 L840,50 L860,50 L860,35 L870,35 L870,20 L880,20 L880,35 L900,35 L900,50 L920,50 L920,75 L960,75 L960,60 L980,60 L980,45 L1000,45 L1000,60 L1020,60 L1020,70 L1060,70 L1060,55 L1080,55 L1080,40 L1090,40 L1090,25 L1100,25 L1100,40 L1120,40 L1120,55 L1140,55 L1140,65 L1160,65 L1160,80 L1200,80 L1200,120 Z" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              {CONTACT.michiganHeading}
            </h2>
            <p className="text-gray-400">{CONTACT.michiganSubtitle}</p>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Contact form + info */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <AnimateOnScroll>
              <h2 className="text-2xl font-bold text-brand-black mb-6">
                {CONTACT.formHeading}
              </h2>

              {status === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <p className="text-green-800 font-semibold text-lg mb-2">
                    Thank you!
                  </p>
                  <p className="text-green-600">
                    We&apos;ve received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-brand-gray-light text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-brand-gray-light text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-brand-gray-light text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-brand-gray-light text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-brand-gray-light text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto"
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </Button>

                  {status === "error" && (
                    <p className="text-red-500 text-sm">
                      Something went wrong. Please try again or email us
                      directly.
                    </p>
                  )}
                </form>
              )}
            </AnimateOnScroll>

            {/* Info cards */}
            <AnimateOnScroll delay="delay-200">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-orange mb-6">
                {CONTACT.infoHeading}
              </h2>

              <div className="space-y-4">
                <ContactInfoCard
                  type="phone"
                  label="Give Us A Call"
                  value={CONTACT.phone}
                  href={`tel:${CONTACT.phone.replace(/\D/g, "")}`}
                />
                <ContactInfoCard
                  type="location"
                  label="On The Map"
                  value={CONTACT.location}
                />
                <ContactInfoCard
                  type="email"
                  label="Send A Message"
                  value={CONTACT.email}
                  href={`mailto:${CONTACT.email}`}
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
