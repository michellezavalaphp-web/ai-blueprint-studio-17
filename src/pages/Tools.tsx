import SectionHeading from "@/components/SectionHeading";
import ToolCard from "@/components/ToolCard";
import { Gauge, Clock, ScanSearch, FileText, PenTool } from "lucide-react";

const allTools = [
  {
    icon: Gauge,
    title: "AI Readiness Assessment",
    description:
      "Answer a few questions about your business to discover your AI Readiness Score and get tailored recommendations.",
    benefit: "Identify your biggest AI opportunities in minutes",
  },
  {
    icon: Clock,
    title: "Time Reclaimed Calculator",
    description:
      "Input your daily tasks and see exactly how many hours per week AI could save your team.",
    benefit: "Quantify your ROI before you invest",
  },
  {
    icon: ScanSearch,
    title: "AI Automation Opportunity Scanner",
    description:
      "Scan your business workflows to uncover processes ripe for automation and AI enhancement.",
    benefit: "Discover bottlenecks you didn't know existed",
  },
  {
    icon: FileText,
    title: "AI Implementation Blueprint Generator",
    description:
      "Generate a step-by-step AI implementation plan customized to your business goals and industry.",
    benefit: "A clear, actionable plan tailored to you",
  },
  {
    icon: PenTool,
    title: "AI Authority Content Engine",
    description:
      "Create thought-leadership articles, social posts, and case studies powered by AI insights.",
    benefit: "Position yourself as an AI-forward leader",
  },
];

const Tools = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <SectionHeading
        tag="AI Tools Library"
        title="Interactive AI Tools for Your Business"
        description="Explore our suite of AI-powered tools designed to help you assess, plan, and implement AI systems."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allTools.map((t) => (
          <ToolCard key={t.title} {...t} />
        ))}
      </div>
    </div>
  </section>
);

export default Tools;
