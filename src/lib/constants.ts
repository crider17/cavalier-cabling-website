export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Capabilities", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  subtitle:
    "RELIABLE, PRECISION-BUILT CABLING FOR DEFENSE, AEROSPACE, AND HIGH-PERFORMANCE APPLICATIONS.",
  heading: "Mil-Spec Cable Assemblies & Wire Harnesses",
  ctaPrimary: "Request a Quote",
  ctaSecondary: "Our Capabilities",
};

export const FEATURES = [
  {
    icon: "Zap" as const,
    text: "From rapid prototypes to full-scale production runs, we deliver cable assemblies and wire harnesses built to your exact specifications — on time and to the highest standards.",
  },
  {
    icon: "GitBranch" as const,
    text: "Our engineering team works alongside yours, offering DFM feedback, material selection guidance, and testing protocols that reduce risk and accelerate your timeline.",
  },
  {
    icon: "Shield" as const,
    text: "Every assembly we produce is backed by rigorous quality controls, full traceability, and compliance with MIL-SPEC, IPC/WHMA-A-620, and AS9100 standards.",
  },
];

export const SERVICES = {
  label: "WHAT WE BUILD",
  heading:
    "From concept through production — precision-built cabling for demanding applications.",
  items: [
    {
      icon: "Cable" as const,
      title: "Custom Cable Assemblies",
      description:
        "Application-specific cable assemblies engineered for your exact requirements, including multi-conductor, coaxial, RF, and high-power configurations.",
    },
    {
      icon: "Workflow" as const,
      title: "Wire Harness Manufacturing",
      description:
        "Complete wire harness solutions from prototype through production, with full documentation packages and first article inspection reports.",
    },
    {
      icon: "Shield" as const,
      title: "MIL-Spec & Aerospace Cabling",
      description:
        "Cable assemblies built to MIL-DTL-38999, MIL-DTL-26482, and other military specifications with full traceability and compliance documentation.",
    },
    {
      icon: "Plug" as const,
      title: "Connector Termination & Overmolding",
      description:
        "Precision termination services for D-Sub, circular, rectangular, and custom connectors with optional overmolding for environmental protection.",
    },
    {
      icon: "PenTool" as const,
      title: "Engineering & Prototyping",
      description:
        "Collaborative design support including DFM analysis, 3D modeling, material selection, and rapid prototyping to validate your designs before production.",
    },
    {
      icon: "ClipboardCheck" as const,
      title: "Testing & Quality Assurance",
      description:
        "Comprehensive testing including continuity, hi-pot, insulation resistance, and pull force testing with detailed test reports and certifications.",
    },
  ],
};

export const INDUSTRIES = {
  label: "INDUSTRIES WE SERVE",
  heading: "Trusted across critical sectors.",
  items: [
    {
      title: "Defense",
      description:
        "Mission-critical cabling for ground vehicles, communications systems, weapon platforms, and field-deployable equipment. ITAR registered.",
      icon: "Shield" as const,
      gradient: "from-slate-900 via-slate-800 to-slate-900",
      accent: "bg-brand-orange",
    },
    {
      title: "Aerospace",
      description:
        "Flight-qualified cable assemblies for avionics, flight controls, engine systems, and ground support equipment. AS9100 certified.",
      icon: "Plane" as const,
      gradient: "from-blue-950 via-indigo-900 to-blue-950",
      accent: "bg-brand-blue",
    },
    {
      title: "Industrial",
      description:
        "Ruggedized wire harnesses for automation equipment, robotics, heavy machinery, and harsh-environment industrial applications.",
      icon: "Wrench" as const,
      gradient: "from-gray-800 via-gray-700 to-gray-800",
      accent: "bg-brand-green",
    },
    {
      title: "Automotive",
      description:
        "High-performance cabling for specialty and armored vehicles, EV platforms, motorsport applications, and aftermarket systems.",
      icon: "Car" as const,
      gradient: "from-stone-800 via-amber-950 to-stone-800",
      accent: "bg-brand-orange",
    },
  ],
};

export const CERTIFICATIONS = {
  label: "CERTIFICATIONS & COMPLIANCE",
  heading: "Quality you can verify.",
  items: [
    {
      title: "ISO 9001",
      subtitle: "Quality Management",
      type: "circle" as const,
      color: "brand-blue",
    },
    {
      title: "AS 9100:2016",
      subtitle: "Aerospace Standard",
      type: "circle" as const,
      color: "brand-orange",
    },
    {
      title: "ITAR",
      subtitle: "Registered",
      type: "shield" as const,
      color: "brand-green",
    },
    {
      title: "IPC/WHMA-A-620",
      subtitle: "Workmanship Std.",
      type: "circle" as const,
      color: "brand-blue",
    },
  ],
};

export const CTA_BANNER = {
  subtitle:
    "TELL US YOUR REQUIREMENTS — OUR TEAM WILL DELIVER A FAST, ACCURATE QUOTE.",
  heading: "Need Mil-Spec Cabling Expertise?",
  cta: "Request A Quote",
};

export const CONTACT = {
  formHeading: "Request a Quote",
  infoHeading: "GET IN TOUCH",
  phone: "(580) 491-7100",
  location: "Port Huron, MI",
  email: "info@cavaliercabling.com",
  michiganHeading: "Built In Michigan",
  michiganSubtitle: "Proudly manufacturing in Port Huron.",
};

export const SEO = {
  title: "Cavalier Cabling LLC | Mil-Spec Cable Assemblies & Wire Harnesses",
  description:
    "Precision-engineered mil-spec cable assemblies and wire harnesses for defense, aerospace, and high-performance applications. ISO 9001 & AS9100 certified. Port Huron, Michigan.",
  keywords:
    "mil-spec cable assemblies, wire harness manufacturer, defense cabling, aerospace cabling, military cable assemblies, custom wire harness, MIL-DTL-38999, AS9100 certified, ITAR registered, Port Huron Michigan",
  url: "https://cavaliercabling.com",
};
