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
  Star,
  Quote,
  Activity,
  Zap,
  BarChart3,
  Users,
  Bot,
  Lightbulb,
} from "lucide-react";

const tools = [
  {
    icon: Gauge,
    title: "AI Readiness Assessment",
    description: "Answer a few simple questions to see how ready your organization is for AI.",
    benefit: "Takes less than 3 minutes",
  },
  {
    icon: Clock,
    title: "Time Reclaimed™ Calculator",
    description: "Use our proprietary Time Reclaimed™ Framework to see how many hours AI could save your team each week.",
    benefit: "See your potential savings instantly",
  },
  {
    icon: FileText,
    title: "AI Implementation Blueprint",
    description: "Get a step-by-step plan for bringing AI into your organization.",
    benefit: "Your custom roadmap, ready in minutes",
  },
  {
    icon: ScanSearch,
    title: "Automation Opportunity Scanner",
    description: "Discover which parts of your workflow are best suited for automation.",
    benefit: "Uncover hidden time-wasters",
  },
  {
    icon: PenTool,
    title: "AI Content Engine",
    description: "Create professional articles and social posts with AI-powered writing assistance.",
    benefit: "Build your thought leadership effortlessly",
  },
];

const testimonials = [
  {
    quote: "We saved over 30 hours per week after implementing the recommendations from our AI assessment. Game-changer.",
    name: "Sarah Chen",
    role: "COO, Pacific Financial Group",
  },
  {
    quote: "The strategy session alone gave us a clear roadmap. No jargon, just actionable steps we could start right away.",
    name: "James Rodriguez",
    role: "Director of Operations, Metro Health Services",
  },
  {
    quote: "As a nonprofit, we were skeptical. But their tools showed us exactly where AI could help — and it did.",
    name: "Amara Okafor",
    role: "Executive Director, Community Forward",
  },
];

const teamPlaceholders = [
  { icon: Users, name: "AI Strategy Lead", desc: "Driving organizational AI transformation" },
  { icon: Bot, name: "Automation Architect", desc: "Designing intelligent workflow systems" },
  { icon: Lightbulb, name: "AI Solutions Consultant", desc: "Tailoring AI to industry needs" },
  { icon: Zap, name: "Innovation Analyst", desc: "Identifying high-impact AI opportunities" },
];

const metrics = [
  { icon: BarChart3, stat: "40%", label: "Time saved on average" },
  { icon: Zap, stat: "3x", label: "Productivity multiplier" },
  { icon: Clock, stat: "30+", label: "Hours reclaimed weekly" },
  { icon: Activity, stat: "500+", label: "Organizations assessed" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
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
              Powered by the <span className="text-primary font-semibold">Time Reclaimed™ Framework</span> — our proven methodology for helping organizations reclaim time through AI. No tech experience required.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-2.5 justify-center max-w-2xl mx-auto">
              <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
                <Link to="/tools">Discover Your AI Readiness</Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
                <Link to="/tools">Calculate Time Reclaimed™</Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
                <Link to="/tools">Generate Your AI Blueprint</Link>
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

      {/* Dashboard Metrics Strip */}
      <section className="relative -mt-6 sm:-mt-8 z-20 container mx-auto px-4">
        <div className="glass-panel p-1 glow-border">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {metrics.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center py-4 sm:py-5 px-3 sm:px-4 ${
                  i % 2 === 0 ? "border-r border-border/30 md:border-r" : i < 3 ? "md:border-r md:border-border/30" : ""
                } ${i < 2 ? "border-b border-border/30 md:border-b-0" : ""}`}
              >
                <s.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary/60 mb-1.5 sm:mb-2" />
                <div className="stat-value text-xl sm:text-2xl md:text-3xl">{s.stat}</div>
                <div className="text-[10px] sm:text-[11px] text-muted-foreground mt-0.5 tracking-wide text-center">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            tag="The Challenge"
            title="Why Organizations Lose Time"
            description="Manual processes, disconnected systems, and outdated workflows cost organizations thousands of hours every year. AI changes that."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                icon: Clock,
                title: "Repetitive Manual Tasks",
                desc: "Teams spend 40%+ of their time on tasks that AI can automate — data entry, scheduling, reporting, and follow-ups.",
              },
              {
                icon: Activity,
                title: "Disconnected Systems",
                desc: "Information silos and fragmented tools slow decision-making and create bottlenecks across departments.",
              },
              {
                icon: BarChart3,
                title: "Missed Opportunities",
                desc: "Without intelligent systems, organizations miss insights hiding in their data — opportunities that drive growth.",
              },
            ].map((item) => (
              <div key={item.title} className="dash-card">
                <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center mb-3 sm:mb-4">
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <h3 className="font-display text-sm sm:text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools — primary section */}
      <section id="tools" className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <SectionHeading
            tag="Platform Tools"
            title="Free AI Tools — Try One Now"
            description="Each tool takes just a few minutes. Pick the one that sounds most useful to you."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {tools.map((t) => (
              <ToolCard key={t.title} {...t} />
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/tools">
                View All Tools <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Framework Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            tag="Our Methodology"
            title="The Time Reclaimed™ Framework"
            description="Seven stages that take your organization from operational inefficiency to AI-powered transformation."
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3">
            {["Discover", "Diagnose", "Design", "Develop", "Deploy", "Drive", "Dominate"].map((stage, i) => (
              <div key={stage} className={`glass-panel p-3 sm:p-4 text-center hover:glow-border transition-all duration-300 ${i === 6 ? "col-span-2 sm:col-span-1" : ""}`}>
                <div className="text-[10px] text-primary font-semibold mb-1">0{i + 1}</div>
                <div className="font-display text-xs sm:text-sm font-semibold">{stage}</div>
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

      {/* Innovation Team */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <SectionHeading
            tag="Our People"
            title="Our Innovation Team"
            description="Go AI Innovation is building a team of AI strategists, consultants, and intelligent systems designed to help organizations transform operations."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {teamPlaceholders.map((m) => (
              <div key={m.name} className="dash-card text-center">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <m.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xs sm:text-[13px] mb-1">{m.name}</h3>
                <p className="text-[10px] sm:text-[11px] text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/founder">Meet Our Founder</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading tag="Impact & Results" title="What Our Clients Say" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="dash-card flex flex-col gap-3 sm:gap-4">
                <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-primary/30" />
                <p className="text-xs sm:text-sm text-muted-foreground flex-1 italic leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-primary fill-primary" />
                  ))}
                </div>
                <div className="border-t border-border/30 pt-3">
                  <div className="font-display font-semibold text-xs sm:text-[13px]">{t.name}</div>
                  <div className="text-[10px] sm:text-[11px] text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/impact">
                View All Results <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-xl">
          <div className="glass-panel p-6 sm:p-8 md:p-10 text-center glow-border">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3">
              Want Personalized Guidance?
            </h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed">
              Book a free strategy session. We'll walk you through your results and
              build a simple action plan together — no pressure, no jargon.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm" asChild>
                <Link to="/book">
                  Schedule a Free Session <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm" asChild>
                <Link to="/solutions">Learn What We Do</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
