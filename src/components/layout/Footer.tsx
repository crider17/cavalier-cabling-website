import Image from "next/image";
import { NAV_LINKS, CONTACT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-black relative overflow-hidden">
      {/* Subtle top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Cavalier Cabling LLC"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-display text-sm font-700 uppercase tracking-wider text-white">
                Cavalier Cabling
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Precision-engineered mil-spec cable assemblies and wire harnesses
              for defense, aerospace, and high-performance applications.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-xs font-700 uppercase tracking-widest text-gray-400 mb-4">
              Navigation
            </h3>
            <div className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-500 hover:text-brand-orange transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xs font-700 uppercase tracking-widest text-gray-400 mb-4">
              Contact
            </h3>
            <div className="space-y-2.5 text-sm text-gray-500">
              <a
                href={`tel:${CONTACT.phone.replace(/\D/g, "")}`}
                className="block hover:text-brand-orange transition-colors"
              >
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="block hover:text-brand-orange transition-colors"
              >
                {CONTACT.email}
              </a>
              <p>{CONTACT.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <p className="text-gray-600 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Cavalier Cabling LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
