import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Search,
  Stethoscope,
  Compass,
  Hammer,
  Rocket,
  TrendingUp,
  Crown,
  ArrowRight,
  Layers,
} from "lucide-react";

const stages = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    subtitle: "Understand Your Current State",
    description: "We assess your organization's operations, workflows, and pain points to identify where time is being lost and where AI can create the most impact.",
  },
  {
    icon: Stethoscope,
    number: "02",
    title: "Diagnose",
    subtitle: "Pinpoint Inefficiencies",
    description: "Using data-driven analysis, we diagnose the root causes of operational bottlenecks and quantify the time and resources being wasted.",
  },
  {
    icon: Compass,
    number: "03",
    title: "Design",
    subtitle: "Architect the Solution",
    description: "We design a custom AI implementation strategy tailored to your goals, team, and industry — a blueprint for intelligent transformation.",
  },
  {
    icon: Hammer,
    number: "04",
    title: "Develop",
    subtitle: "Build Intelligent Systems",
    description: "Our team develops and configures AI agents, automation workflows, and intelligent operational systems built for your organization.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Deploy",
    subtitle: "Launch with Confidence",
    description: "We deploy your AI systems with hands-on support, ensuring a smooth rollout with minimal disruption to your operations.",
  },
  {
    icon: TrendingUp,
    number: "06",
    title: "Drive",
    subtitle: "Accelerate Results",
    description: "We monitor performance, optimize systems, and drive measurable improvements in productivity, efficiency, and time savings.",
  },
  {
    icon: Crown,
    number: "07",
    title: "Dominate",
    subtitle: "Lead Your Industry",
    description: "With AI embedded in your operations, your organization operates at peak efficiency — positioning you as a leader in your industry.",
  },
];

const Framework = () => (
  <>
    {/* Page Header */}
    <div className="page-header">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
            <Layers className="h-4 w-4 text-primary" />
          </div>
          <span className="badge-tag">Methodology</span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Time Reclaimed™ Framework</h1>
        <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
          Our proprietary seven-stage methodology for transforming organizations from operational inefficiency to intelligent, AI-powered systems.
        </p>
      </div>
    </div>

    {/* Intro */}
    <section className="section-padding !pt-6 sm:!pt-10 !pb-8 sm:!pb-12">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          The Time Reclaimed™ Framework is more than a consulting process — it's a transformation engine.
          Each stage builds on the last, moving your organization from manual, time-consuming operations
          to intelligent, automated systems that free your team to focus on what matters most.
        </p>
      </div>
    </section>

    {/* 7 Stages */}
    <section className="section-padding !pt-0">
      <div className="container mx-auto max-w-3xl">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-primary/5 hidden md:block" />

          <div className="space-y-4 sm:space-y-6">
            {stages.map((stage) => (
              <div key={stage.number} className="relative flex gap-3 sm:gap-5 md:gap-8">
                {/* Stage number dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center">
                    <stage.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="glass-panel p-4 sm:p-6 flex-1 hover:glow-border transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <span className="text-[10px] uppercase tracking-widest text-primary font-semibold rounded-full px-2.5 py-1" style={{ backgroundColor: 'hsl(207 90% 54% / 0.08)' }}>
                      Stage {stage.number}
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold">{stage.title}</h3>
                  </div>
                  <p className="text-[11px] sm:text-xs text-primary font-medium mb-2">{stage.subtitle}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto max-w-xl">
        <div className="glass-panel p-6 sm:p-8 md:p-10 text-center glow-border">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            Start Your Transformation
          </h2>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed">
            Begin with a free AI Strategy Session and see how the Time Reclaimed™ Framework can transform your organization.
          </p>
          <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
            <Link to="/book">
              Book Your Free AI Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Framework;
