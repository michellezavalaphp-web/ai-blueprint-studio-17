import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ToolCard from "@/components/ToolCard";
import { Gauge, Clock, ScanSearch, ArrowRight, LayoutDashboard } from "lucide-react";

const allTools = [
  {
    icon: Gauge,
    title: "AI Readiness Assessment",
    description: "Answer a few questions about your organization to discover your AI Readiness Score and get tailored recommendations.",
    benefit: "Identify your biggest AI opportunities in minutes",
  },
  {
    icon: Clock,
    title: "Time Reclaimed™ Calculator",
    description: "Built on our proprietary Time Reclaimed™ Framework — input your daily tasks and see exactly how many hours per week AI could save your team.",
    benefit: "Quantify your ROI before you invest",
  },
  {
    icon: ScanSearch,
    title: "AI Automation Opportunity Scanner",
    description: "Scan your organization's workflows to uncover processes ripe for automation and AI enhancement.",
    benefit: "Discover bottlenecks you didn't know existed",
  },
];

const Tools = () => (
  <>
    <div className="page-header">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
            <LayoutDashboard className="h-4 w-4 text-primary" />
          </div>
          <span className="badge-tag">AI Readiness Diagnostics</span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">AI Readiness Diagnostics</h1>
        <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
          Evaluate your organization's AI readiness and uncover opportunities to prepare for successful AI implementation.
        </p>
      </div>
    </div>

    <section className="section-light section-padding !pt-6 sm:!pt-10">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {allTools.map((t) => (
            <ToolCard key={t.title} {...t} />
          ))}
        </div>
        <div className="mt-10 sm:mt-14">
          <div className="dash-card p-6 sm:p-8 text-center glow-border max-w-lg mx-auto">
            <h3 className="font-display text-base sm:text-lg font-semibold mb-2">Need a Custom Solution?</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-5 leading-relaxed">
              Book a strategy session and we'll build a personalized AI roadmap for your organization.
            </p>
            <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/book">
                Request AI Strategy Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Tools;
