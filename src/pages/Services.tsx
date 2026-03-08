import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Cog, Bot, Workflow, GraduationCap, Layers, ArrowRight, Settings } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Transformation Strategy",
    description: "Using our Time Reclaimed™ Framework, we assess your operations, identify AI opportunities, and create a strategic roadmap tailored to your organization's goals.",
  },
  {
    icon: Cog,
    title: "Workflow Automation",
    description: "Streamline repetitive tasks with intelligent automation — from data entry and reporting to client communications.",
  },
  {
    icon: Bot,
    title: "AI Agent Implementation",
    description: "Deploy custom AI agents that handle customer inquiries, lead follow-up, scheduling, and more — autonomously.",
  },
  {
    icon: Workflow,
    title: "Intelligent Operational Systems",
    description: "Re-engineer your workflows to eliminate bottlenecks, reduce errors, and accelerate throughput across your organization.",
  },
  {
    icon: Layers,
    title: "Organizational Efficiency Consulting",
    description: "Holistic consulting to align your people, processes, and technology around AI-driven efficiency gains.",
  },
  {
    icon: GraduationCap,
    title: "AI Training for Teams",
    description: "Empower your team with hands-on AI training so they can leverage new tools and stay ahead of the curve.",
  },
];

const Services = () => (
  <>
    {/* Page Header */}
    <div className="page-header">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
            <Settings className="h-4 w-4 text-primary" />
          </div>
          <span className="badge-tag">Strategy & Implementation</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">AI Strategy & Implementation</h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-xl leading-relaxed">
          End-to-end AI solutions — from strategy to execution — so you can focus on what matters most: transforming your organization.
        </p>
      </div>
    </div>

    <section className="section-padding !pt-10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={s.title} className="dash-card flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium bg-muted/60 rounded-full px-2.5 py-1">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-base font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto max-w-xl">
        <div className="glass-panel p-8 md:p-10 text-center glow-border">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Start Your AI Transformation
          </h2>
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
            Every organization is unique. Let us build an AI strategy that fits your operations, goals, and team.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="hero" size="lg" className="h-11 text-sm" asChild>
              <Link to="/book">
                Book an AI Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" className="h-11 text-sm" asChild>
              <Link to="/tools">Explore AI Tools</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Services;
