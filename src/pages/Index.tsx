import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Gauge,
  ScanSearch,
  Activity,
  Cpu,
  BrainCircuit,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  XCircle,
  User,
  ImageIcon,
} from "lucide-react";

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
  { title: "AI Strategy & Roadmap", desc: "Custom AI roadmaps aligned with your organization's goals and industry." },
  { title: "Workflow Automation Systems", desc: "Eliminate repetitive tasks with intelligent workflow automation." },
  { title: "AI Implementation & Integration", desc: "End-to-end deployment of AI systems into your existing operations." },
];

const qualifyYes = [
  "Organizations exploring AI implementation",
  "Companies looking to automate manual workflows",
  "Leaders wanting to reclaim operational time",
  "Teams ready to implement intelligent systems",
];

const qualifyNo = [
  "People looking for basic AI tutorials",
  "Hobby projects or experimentation",
  "Businesses not ready to explore automation",
];

const Index = () => (
  <>
    {/* 1 · Hero */}
    <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${heroBg})` }} />
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
            Go AI Innovation helps organizations design and implement intelligent AI systems that improve efficiency, reduce manual work, and drive strategic growth.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-2.5 justify-center max-w-2xl mx-auto">
            <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/book">
                Book Your Free AI Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/tools">Discover Your AI Readiness</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* 2 · Time Reclaimed™ Framework */}
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading
          tag="Our Methodology"
          title="The Time Reclaimed™ Framework"
          description="Seven stages from operational inefficiency to AI-powered transformation."
        />
        {/* Desktop: horizontal connected flow */}
        <div className="hidden lg:flex items-center justify-center max-w-5xl mx-auto">
          {frameworkStages.map((stage, i) => (
            <div key={stage.name} className="flex items-center">
              <div className="flex flex-col items-center text-center w-[100px] group">
                <div className="text-xs font-bold text-primary tracking-wider mb-1.5">{stage.step}</div>
                <div className="w-12 h-12 rounded-lg bg-card/60 border border-border/40 flex items-center justify-center group-hover:glow-border transition-all duration-300">
                  <stage.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="font-display text-xs font-semibold mt-1.5">{stage.name}</div>
              </div>
              {i < frameworkStages.length - 1 && (
                <div className="flex items-center mx-1">
                  <div className="w-6 h-px bg-primary/30" />
                  <ArrowRight className="h-3 w-3 text-primary/40 -ml-0.5" />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Mobile/tablet: compact grid with flow indicators */}
        <div className="lg:hidden grid grid-cols-4 sm:grid-cols-4 gap-x-1 gap-y-3 max-w-sm sm:max-w-md mx-auto">
          {frameworkStages.map((stage, i) => (
            <div key={stage.name} className="flex flex-col items-center text-center relative">
              <div className="text-[10px] font-bold text-primary tracking-wider mb-1">{stage.step}</div>
              <div className="w-11 h-11 rounded-lg bg-card/60 border border-border/40 flex items-center justify-center">
                <stage.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="font-display text-[11px] font-semibold mt-1">{stage.name}</div>
              {i < frameworkStages.length - 1 && i !== 3 && (
                <ArrowRight className="absolute right-[-8px] top-[28px] h-2.5 w-2.5 text-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 3 · AI Strategy & Implementation */}
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <SectionHeading
          tag="Services"
          title="AI Strategy & Implementation"
          description="End-to-end support to bring intelligent systems into your organization."
        />
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
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
              Book Your Free AI Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    {/* 4 · Qualification */}
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <SectionHeading
          tag="Fit Check"
          title="Is This Strategy Session Right For You?"
        />
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto">
          {/* For */}
          <div className="dash-card">
            <h3 className="font-display text-sm sm:text-base font-semibold mb-4 text-primary">Who This Is For</h3>
            <ul className="space-y-2.5">
              {qualifyYes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Not for */}
          <div className="dash-card">
            <h3 className="font-display text-sm sm:text-base font-semibold mb-4 text-muted-foreground">Who This Is Not For</h3>
            <ul className="space-y-2.5">
              {qualifyNo.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                  <XCircle className="h-4 w-4 text-muted-foreground/50 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* 6 · Final CTA */}
    <section className="section-padding">
      <div className="container mx-auto max-w-xl">
        <div className="glass-panel p-6 sm:p-8 md:p-10 text-center glow-border">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            Ready to Implement AI in Your Organization?
          </h2>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed">
            Discover where AI can create the greatest operational impact in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-2.5 justify-center">
            <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/book">
                Book Your Free AI Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/tools">Discover Your AI Readiness</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Index;
