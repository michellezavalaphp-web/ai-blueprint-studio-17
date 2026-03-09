import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import frameworkVisual from "@/assets/framework-visual.jpg";
import servicesVisual from "@/assets/services-visual.jpg";
import strategyVisual from "@/assets/strategy-visual.jpg";
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
  ShieldCheck,
  LockKeyhole,
  Building2,
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

/* ─── Reusable pillar card ─── */
const PillarCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="dash-card text-center">
    <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-primary/8 border border-primary/10 flex items-center justify-center mx-auto mb-4">
      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
    </div>
    <h3 className="font-display text-sm sm:text-base font-semibold mb-2">{title}</h3>
    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const Index = () => (
  <>
    {/* ── 1 · Hero ── */}
    <section className="relative min-h-[72vh] sm:min-h-[80vh] md:min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.07]" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/70 to-background" />
      <div className="container mx-auto px-4 relative z-10 py-14 sm:py-20 md:py-24">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <img src={logo} alt="Go AI Innovation" className="h-9 sm:h-11 md:h-13 w-auto mx-auto mb-5 sm:mb-7" />
          <span className="badge-tag mb-5 sm:mb-6">
            <Activity className="h-3 w-3" />
            Intelligent Systems for Modern Organizations
          </span>
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] mb-4 sm:mb-5 mt-3 sm:mt-4">
            Reclaim Time. Transform Operations.{" "}
            <span className="text-gradient">Lead the AI Era.</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed">
            Go AI Innovation helps organizations design and implement intelligent AI systems that improve efficiency, reduce manual work, and drive strategic growth.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 justify-center max-w-2xl mx-auto">
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

    {/* ── 2 · Time Reclaimed™ Framework ── */}
    <section className="section-padding">
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
                <div className="w-12 h-12 rounded-lg bg-card/60 border border-border/30 flex items-center justify-center group-hover:glow-border transition-all duration-300">
                  <stage.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="font-display text-xs font-semibold mt-2">{stage.name}</div>
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
              <div className="w-11 h-11 rounded-lg bg-card/60 border border-border/30 flex items-center justify-center">
                <stage.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="font-display text-[11px] font-semibold mt-1.5">{stage.name}</div>
              {i < frameworkStages.length - 1 && i !== 3 && (
                <ArrowRight className="absolute right-[-8px] top-[28px] h-2.5 w-2.5 text-primary/25" />
              )}
            </div>
          ))}
        </div>
        {/* Visual accent */}
        <div className="mt-10 sm:mt-14 max-w-3xl mx-auto overflow-hidden rounded-xl border border-border/20">
          <img src={frameworkVisual} alt="Digital network visualization representing AI-powered data transformation" className="w-full h-32 sm:h-44 object-cover opacity-60" />
        </div>
      </div>
    </section>

    {/* ── 3 · Services ── */}
    <section className="section-padding bg-secondary/15">
      <div className="container mx-auto">
        <SectionHeading
          tag="Services"
          title="AI Strategy & Implementation"
          description="End-to-end support to bring intelligent systems into your organization."
        />
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-center">
          <div className="grid sm:grid-cols-1 gap-4 sm:gap-5">
            {services.map((s) => (
              <div key={s.title} className="dash-card text-center sm:text-left">
                <h3 className="font-display text-sm sm:text-base font-semibold mb-2">{s.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="hidden lg:block overflow-hidden rounded-xl border border-border/20">
            <img src={servicesVisual} alt="Business team collaborating with digital analytics and AI dashboards" className="w-full h-full object-cover opacity-70" />
          </div>
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
            <Link to="/book">
              Book Your Free AI Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ── 4 · Mission & Public Impact ── */}
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading
          tag="Mission"
          title="Our Mission & Public Impact"
          description="Go AI Innovation helps organizations reclaim time, improve operational efficiency, and responsibly implement AI systems that drive measurable results."
        />
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
          <PillarCard
            icon={Gauge}
            title="Operational Efficiency"
            description="Helping organizations reduce manual work and improve productivity through intelligent automation."
          />
          <PillarCard
            icon={BrainCircuit}
            title="Workforce Empowerment"
            description="Supporting teams with AI-assisted systems that improve decision-making and operational capacity."
          />
          <PillarCard
            icon={ShieldCheck}
            title="Responsible AI Adoption"
            description="Guiding organizations in implementing AI systems with transparency, accountability, and long-term sustainability."
          />
        </div>
      </div>
    </section>

    {/* ── 5 · Security, Compliance & Responsible AI ── */}
    <section className="section-padding bg-secondary/15">
      <div className="container mx-auto">
        <SectionHeading
          tag="Trust & Governance"
          title="Security, Compliance & Responsible AI"
          description="Go AI Innovation helps organizations implement AI responsibly, securely, and in alignment with operational standards."
        />
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
          <PillarCard
            icon={ShieldCheck}
            title="Responsible AI Design"
            description="AI systems designed with transparency, accountability, and human oversight."
          />
          <PillarCard
            icon={LockKeyhole}
            title="Secure Implementation"
            description="AI integrations designed to operate safely within existing systems and workflows."
          />
          <PillarCard
            icon={Building2}
            title="Operational Alignment"
            description="AI solutions built to support organizational policies, governance structures, and operational environments."
          />
        </div>
      </div>
    </section>

    {/* ── 6 · Qualification ── */}
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading
          tag="Fit Check"
          title="Is This Strategy Session Right For You?"
        />
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto">
          <div className="dash-card">
            <h3 className="font-display text-sm sm:text-base font-semibold mb-4 text-primary">Who This Is For</h3>
            <ul className="space-y-3">
              {qualifyYes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="dash-card">
            <h3 className="font-display text-sm sm:text-base font-semibold mb-4 text-muted-foreground">Who This Is Not For</h3>
            <ul className="space-y-3">
              {qualifyNo.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                  <XCircle className="h-4 w-4 text-muted-foreground/40 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* ── 7 · Final CTA ── */}
    <section className="section-padding bg-secondary/15">
      <div className="container mx-auto max-w-xl">
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
