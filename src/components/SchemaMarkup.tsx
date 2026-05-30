import { useEffect } from "react";

interface SchemaMarkupProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
  id: string;
}

const SchemaMarkup = ({ schema, id }: SchemaMarkupProps) => {
  useEffect(() => {
    const scriptId = `schema-${id}`;
    let el = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = scriptId;
      document.head.appendChild(el);
    }
    el.text = JSON.stringify(schema);
    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, [schema, id]);

  return null;
};

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Go AI Innovation",
  url: "https://www.goaiinnovation.com",
  logo: "https://www.goaiinnovation.com/assets/logo-DDEgW9NJ.png",
  description:
    "AI consulting and implementation firm helping businesses save time through the Time Reclaimed™ Framework.",
  founder: {
    "@type": "Person",
    name: "Mardel Michelle Zavala",
    jobTitle: "Founder & CEO",
    description:
      "International CPD Accredited AI Consultant with 20+ years in operations and business transformation. Published author of Time Reclaimed™.",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://www.goaiinnovation.com/contact",
  },
  sameAs: [
    "https://www.linkedin.com/company/go-ai-innovation",
    "https://www.instagram.com/goaiinnovation",
    "https://www.youtube.com/@goaiinnovation",
  ],
};

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Go AI Innovation",
  image: "https://www.goaiinnovation.com/assets/logo-DDEgW9NJ.png",
  url: "https://www.goaiinnovation.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    addressCountry: "US",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mardel Michelle Zavala",
  jobTitle: "Founder & CEO, AI Consultant",
  description:
    "International CPD Accredited AI Consultant with 20+ years in operations and business transformation. Creator of the Time Reclaimed™ Framework.",
  url: "https://www.goaiinnovation.com/about",
  worksFor: {
    "@type": "Organization",
    name: "Go AI Innovation",
    url: "https://www.goaiinnovation.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/company/go-ai-innovation",
  ],
  author: {
    "@type": "Book",
    name: "Time Reclaimed™",
    author: {
      "@type": "Person",
      name: "Mardel Michelle Zavala",
    },
    datePublished: "2026",
  },
};

const SERVICE_NAMES: { name: string; description: string }[] = [
  {
    name: "AI Transformation Strategy",
    description:
      "Using the Time Reclaimed™ Framework, we assess operations, identify AI opportunities, and create a strategic roadmap.",
  },
  {
    name: "Workflow Automation",
    description:
      "Streamline repetitive tasks with intelligent automation — from data entry and reporting to client communications.",
  },
  {
    name: "AI Agent Implementation",
    description:
      "Deploy custom AI agents that handle customer inquiries, lead follow-up, scheduling, and more — autonomously.",
  },
  {
    name: "Intelligent Operational Systems",
    description:
      "Re-engineer workflows to eliminate bottlenecks, reduce errors, and accelerate throughput across your organization.",
  },
  {
    name: "Organizational Efficiency Consulting",
    description:
      "Holistic consulting to align people, processes, and technology around AI-driven efficiency gains.",
  },
  {
    name: "AI Training for Teams",
    description:
      "Hands-on AI training so teams can leverage new tools and stay ahead of the curve.",
  },
];

export const SERVICES_SCHEMA = SERVICE_NAMES.map((s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  description: s.description,
  provider: {
    "@type": "Organization",
    name: "Go AI Innovation",
    url: "https://www.goaiinnovation.com",
  },
  areaServed: { "@type": "Country", name: "United States" },
}));

export const FRAMEWORK_HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Time Reclaimed™ Framework — 7-Stage AI Transformation Methodology",
  description:
    "A proprietary 7-stage methodology for implementing AI in operations to reclaim time and drive measurable business results.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Discover",
      text: "Assess operations, workflows, and pain points to identify where time is being lost and where AI can create the most impact.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Diagnose",
      text: "Use data-driven analysis to diagnose root causes of bottlenecks and quantify wasted time and resources.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Design",
      text: "Architect a custom AI implementation strategy tailored to your goals, team, and industry.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Develop",
      text: "Build and configure AI agents, automation workflows, and intelligent operational systems.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Deploy",
      text: "Launch AI systems with hands-on support, ensuring a smooth rollout with minimal disruption.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Drive",
      text: "Monitor performance, optimize systems, and drive measurable improvements in productivity and efficiency.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Dominate",
      text: "Scale intelligent operations to achieve sustained competitive advantage in your industry.",
    },
  ],
};

export default SchemaMarkup;
