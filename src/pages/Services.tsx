import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Brain, Cog, Bot, Workflow, GraduationCap, Layers, ArrowRight } from "lucide-react";

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
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading
          tag="Strategy & Implementation"
          title="AI Strategy & Implementation"
          description="Go AI Innovation delivers end-to-end AI solutions — from strategy to execution — so you can focus on what matters most: transforming your organization."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="glass rounded-lg p-6 flex flex-col gap-4 hover:glow-border transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground flex-1">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Start Your AI Transformation
        </h2>
        <p className="text-muted-foreground mb-8">
          Every organization is unique. Let us build an AI strategy that fits your operations, goals, and team.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/book">
              Book an AI Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/tools">Explore AI Tools</Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Services;
