import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ToolCard from "@/components/ToolCard";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Gauge,
  Clock,
  ScanSearch,
  FileText,
  PenTool,
  ArrowRight,
  Activity,
  Cpu,
  Bot,
  BrainCircuit,
  BarChart3,
} from "lucide-react";

const tools = [
  {
    icon: Gauge,
    title: "AI Readiness Assessment",
    description: "See how ready your organization is for AI adoption.",
    benefit: "Takes less than 3 minutes",
  },
  {
    icon: Clock,
    title: "Time Reclaimed™ Calculator",
    description: "Calculate how many hours AI could save your team each week.",
    benefit: "See your potential savings instantly",
  },
  {
    icon: ScanSearch,
    title: "AI Automation Opportunity Scanner",
    description: "Discover which workflows are best suited for automation.",
    benefit: "Uncover hidden time-wasters",
  },
  {
    icon: FileText,
    title: "AI Implementation Blueprint Generator",
    description: "Get a step-by-step plan for bringing AI into your organization.",
    benefit: "Your custom roadmap in minutes",
  },
  {
    icon: PenTool,
    title: "AI Authority Content Engine",
    description: "Create professional thought-leadership content with AI assistance.",
    benefit: "Build authority effortlessly",
  },
];

const frameworkStages = [
  { step: "01", name: "Discover", icon: ScanSearch },
  { step: "02", name: "Diagnose", icon: Activity },
  { step: "03", name: "Design", icon: BrainCircuit },
  { step: "04", name: "Develop", icon: Cpu },
  { step: "05", name: "Deploy", icon: ArrowRight },
  { step: "06", name: "Drive", icon: BarChart3 },
  { step: "07", name: "Dominate", icon: Gauge },
];

const services = [
  { title: "AI Strategy", desc: "Roadmaps tailored to your organization's goals and industry." },
  { title: "Automation Systems", desc: "Eliminate repetitive tasks with intelligent workflow automation." },
  { title: "AI Agents", desc: "Deploy AI-powered agents that work alongside your team." },
  { title: "Operational Intelligence", desc: "Turn data into actionable insights for better decisions." },
];

const Index = () => {
  return (
    <>
      {/* 1 · Hero */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[88vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
        <div className="container mx-auto px-4 relative z-10 py-12 sm:py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <img src={logo} alt="Go AI Innovation" className="h-10 sm:h-12 md:h-14 w-auto mx-auto mb-4 sm:mb-6" />
            <span className="badge-tag mb-4 sm:mb-6">
              <Activity className="h-3 w-3" />
              Intelligent Systems for Modern Organizations
            </span>
            <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] mb-4 sm:mb-5 mt-3 sm:mt-4">
              Reclaim Time. Transform Operations.{" "}
              <span className="text-gradient">Lead the AI Era.</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-6 sm:mb-10 leading-relaxed">
              Powered by the <span className="text-primary font-semibold">Time Reclaimed™ Framework</span> — a proven methodology for helping organizations reclaim time through AI.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-2.5 justify-center max-w-2xl mx-auto">
              <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
                <Link to="/tools">Discover Your AI Readiness</Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
                <Link to="/tools">Explore AI Tools</Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
                <Link to="/book">Book an AI Strategy Session</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2 · Problem / Solution */}
      <section className="section-padding">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
            AI Is Transforming How Organizations Operate
          </h2>
          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            <p>AI is transforming how organizations operate.</p>
            <p>Most organizations are still overwhelmed by manual work, disconnected systems, and inefficient processes.</p>
            <p>Go AI Innovation helps organizations reclaim time and implement intelligent AI systems that drive real results.</p>
          </div>
          <div className="mt-6 sm:mt-8">
            <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/tools">
                Explore AI Tools <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 3 · AI Tools */}
      <section id="tools" className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <SectionHeading
            tag="Platform Tools"
            title="Free AI Tools — Try One Now"
            description="Each tool takes just a few minutes. Pick the one most useful to you."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {tools.map((t) => (
              <ToolCard key={t.title} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Time Reclaimed™ Framework */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            tag="Our Methodology"
            title="The Time Reclaimed™ Framework"
            description="Seven stages from operational inefficiency to AI-powered transformation."
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3">
            {frameworkStages.map((stage) => (
              <div key={stage.name} className="glass-panel p-4 sm:p-5 text-center hover:glow-border transition-all duration-300">
                <stage.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-[10px] text-primary/70 font-semibold mb-0.5">{stage.step}</div>
                <div className="font-display text-xs sm:text-sm font-semibold">{stage.name}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/framework">
                Explore the Full Framework <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 5 · AI Strategy & Implementation */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <SectionHeading
            tag="Services"
            title="AI Strategy & Implementation"
            description="End-to-end support to bring intelligent systems into your organization."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {services.map((s) => (
              <div key={s.title} className="dash-card text-center">
                <h3 className="font-display text-sm sm:text-base font-semibold mb-2">{s.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/book">
                Book an AI Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 6 · Final CTA */}
      <section className="section-padding">
        <div className="container mx-auto max-w-xl">
          <div className="glass-panel p-6 sm:p-8 md:p-10 text-center glow-border">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3">
              Ready to Reclaim Time with AI?
            </h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed">
              Discover how intelligent systems can transform your organization.
            </p>
            <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/book">
                Schedule My AI Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
