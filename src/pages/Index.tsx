import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import logo from "@/assets/logo-white.png";
import heroBg from "@/assets/hero-bg.jpg";
import consultingHero from "@/assets/consulting-hero.jpg";
import aiAbstract from "@/assets/ai-systems-abstract.jpg";
import {
  Gauge,
  Clock,
  ScanSearch,
  Activity,
  Cpu,
  BrainCircuit,
  BarChart3,
  ArrowRight,
  Search,
  Settings,
  Layers,
  Rocket,
  TrendingUp,
} from "lucide-react";

const services = [
  { title: "AI Strategy & Roadmaps", desc: "Custom AI roadmaps aligned with your organization's operational goals and growth targets." },
  { title: "Workflow Automation Systems", desc: "Eliminate repetitive tasks and accelerate throughput with intelligent process automation." },
  { title: "AI Implementation & Integration", desc: "End-to-end deployment of AI systems into your existing operations and technology stack." },
  { title: "AI Adoption & Training", desc: "Empower your team to leverage AI tools confidently with hands-on training and change management." },
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

const diagnostics = [
  { icon: Gauge, title: "AI Readiness Assessment", desc: "Discover your AI Readiness Score and get tailored recommendations." },
  { icon: Clock, title: "Time Reclaimed™ Calculator", desc: "Quantify how many hours per week AI could save your team." },
  { icon: ScanSearch, title: "AI Opportunity Finder", desc: "Uncover processes ripe for automation and AI enhancement." },
];

const methodology = [
  { step: "01", title: "Discovery", desc: "Assess current operations, workflows, and pain points to identify high-impact AI opportunities." },
  { step: "02", title: "Analysis", desc: "Data-driven evaluation of inefficiencies, resource allocation, and automation potential." },
  { step: "03", title: "Design", desc: "Architect a custom AI implementation strategy aligned with your organizational goals." },
  { step: "04", title: "Integration", desc: "Deploy AI systems within your existing technology stack with minimal disruption." },
  { step: "05", title: "Deployment", desc: "Launch with hands-on support, ensuring smooth adoption across your team." },
  { step: "06", title: "Optimization", desc: "Monitor performance, refine systems, and drive continuous operational improvement." },
];

const Index = () => (
  <>
    {/* ── 1 · Hero (Dark) ── */}
    <section className="relative min-h-[72vh] sm:min-h-[80vh] md:min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.07]" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/70 to-background" />
      <div className="container mx-auto px-4 relative z-10 py-8 sm:py-14 md:py-16">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <img src={logo} alt="Go AI Innovation" className="h-28 sm:h-40 md:h-48 w-auto mx-auto mb-5 sm:mb-7 drop-shadow-[0_4px_24px_rgba(59,130,246,0.18)]" />
          <span className="badge-tag mb-5 sm:mb-6">
            <Activity className="h-3 w-3" />
            AI Implementation Strategist
          </span>
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] mb-4 sm:mb-5 mt-3 sm:mt-4">
            Reclaim Time. Transform Operations.{" "}
            <span className="text-gradient">Lead the AI Era.</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed">
            Go AI Innovation helps organizations design and implement intelligent AI systems that improve operational efficiency, reduce manual work, and drive strategic growth.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 justify-center max-w-2xl mx-auto">
            <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Request AI Strategy Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/tools">Start AI Readiness Assessment</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* ── 2 · AI Strategy & Implementation Services (Light) ── */}
    <section className="section-light section-padding">
      <div className="container mx-auto">
        <SectionHeading
          tag="Services"
          title="AI Strategy & Implementation Services"
          description="End-to-end consulting to bring intelligent systems into your organization — from strategy to execution."
        />
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-center">
          <div className="grid sm:grid-cols-1 gap-4 sm:gap-5">
            {services.map((s, i) => (
              <div key={s.title} className="dash-card flex items-start gap-4">
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold mt-1">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-sm sm:text-base font-semibold mb-1.5">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:block overflow-hidden rounded-xl border border-border">
            <img src={consultingHero} alt="Executive AI strategy consulting session" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
            <Link to="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ── 3 · Time Reclaimed™ Framework (Light Alt) ── */}
    <section className="section-light-alt section-padding">
      <div className="container mx-auto">
        <SectionHeading
          tag="Our Methodology"
          title="The Time Reclaimed™ Framework"
          description="Seven stages from operational inefficiency to AI-powered transformation."
        />
        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-center max-w-5xl mx-auto">
          {frameworkStages.map((stage, i) => (
            <div key={stage.name} className="flex items-center">
              <div className="flex flex-col items-center text-center w-[100px] group">
                <div className="text-[10px] font-bold text-primary tracking-wider mb-1.5">{stage.step}</div>
                <div className="w-12 h-12 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center group-hover:shadow-md transition-all duration-300">
                  <stage.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="font-display text-xs font-semibold mt-2 text-foreground">{stage.name}</div>
              </div>
              {i < frameworkStages.length - 1 && (
                <div className="flex items-center mx-1">
                  <div className="w-6 h-px bg-primary/20" />
                  <ArrowRight className="h-3 w-3 text-primary/30 -ml-0.5" />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Mobile */}
        <div className="lg:hidden grid grid-cols-4 sm:grid-cols-4 gap-x-1 gap-y-4 max-w-sm sm:max-w-md mx-auto">
          {frameworkStages.map((stage, i) => (
            <div key={stage.name} className="flex flex-col items-center text-center relative">
              <div className="text-[10px] font-bold text-primary tracking-wider mb-1">{stage.step}</div>
              <div className="w-11 h-11 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center">
                <stage.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="font-display text-[11px] font-semibold mt-1.5 text-foreground">{stage.name}</div>
              {i < frameworkStages.length - 1 && i !== 3 && (
                <ArrowRight className="absolute right-[-8px] top-[28px] h-2.5 w-2.5 text-primary/25" />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
            <Link to="/framework">
              Explore the Full Framework <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ── 4 · AI Readiness Diagnostics (Light) ── */}
    <section className="section-light section-padding">
      <div className="container mx-auto">
        <SectionHeading
          tag="AI Readiness Diagnostics"
          title="Assess Your AI Readiness"
          description="Evaluate your organization's AI readiness and uncover high-impact opportunities before implementation."
        />
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
          {diagnostics.map((d) => (
            <div key={d.title} className="dash-card text-center">
              <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center mx-auto mb-4">
                <d.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <h3 className="font-display text-sm sm:text-base font-semibold mb-2">{d.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
            <Link to="/tools">
              Start Your Assessment <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ── 5 · AI Implementation Methodology (Light Alt) ── */}
    <section className="section-light-alt section-padding">
      <div className="container mx-auto">
        <SectionHeading
          tag="Implementation Approach"
          title="AI Implementation Methodology"
          description="A structured consulting process designed to deliver measurable results at every stage."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {methodology.map((m) => (
            <div key={m.title} className="dash-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold bg-primary/8 rounded-full px-2.5 py-1">
                  {m.step}
                </span>
                <h3 className="font-display text-sm sm:text-base font-semibold">{m.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── 6 · Primary CTA (Dark) ── */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={aiAbstract} alt="AI systems visualization" className="w-full h-full object-cover opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
      </div>
      <div className="container mx-auto max-w-xl relative z-10">
        <div className="glass-panel p-7 sm:p-10 md:p-12 text-center glow-border">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            Ready to Implement AI in Your Organization?
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-muted-foreground mb-7 sm:mb-9 text-xs sm:text-sm leading-relaxed">
            Discover where AI can create the greatest operational impact in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
            <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Request AI Strategy Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/tools">Start AI Readiness Assessment</Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-5">
            Or call us directly: <a href="tel:3053606170" className="text-primary hover:underline font-medium">305-360-6170</a>
          </p>
        </div>
      </div>
    </section>
  </>
);

export default Index;
