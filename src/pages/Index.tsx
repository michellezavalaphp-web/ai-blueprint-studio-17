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

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <img src={logo} alt="Go AI Innovation" className="h-14 md:h-16 w-auto mx-auto mb-5" />
            <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-6">
              Intelligent Systems for Modern Organizations
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
              Reclaim Time. Transform Operations.{" "}
              <span className="text-gradient">Lead the AI Era.</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Powered by the <span className="text-primary font-semibold">Time Reclaimed™ Framework</span> — our proven methodology for helping organizations reclaim time through AI. No tech experience required.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/tools">Discover Your AI Readiness</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/tools">Calculate Time Reclaimed™</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/tools">Generate Your AI Blueprint</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/tools">Explore AI Tools</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/book">Book an AI Strategy Session</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools — primary section */}
      <section id="tools" className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            tag="Start Here"
            title="Free AI Tools — Try One Now"
            description="Each tool takes just a few minutes. Pick the one that sounds most useful to you."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((t) => (
              <ToolCard key={t.title} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-3xl text-center">
          <SectionHeading
            tag="Why It Works"
            title="AI Made Simple"
            description="You don't need to be technical. We handle the complexity so you can focus on results."
          />
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { stat: "40%", label: "Less time on repetitive tasks" },
              { stat: "3x", label: "Faster decision-making" },
              { stat: "30+", label: "Hours saved per week" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-lg p-6">
                <div className="font-display text-3xl font-bold text-primary mb-1">{s.stat}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading tag="Real Results" title="What Our Clients Say" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass rounded-lg p-6 flex flex-col gap-4">
                <Quote className="h-7 w-7 text-primary/40" />
                <p className="text-sm text-muted-foreground flex-1 italic">"{t.quote}"</p>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 text-primary fill-primary" />
                  ))}
                </div>
                <div>
                  <div className="font-display font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto text-center max-w-xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Want Personalized Guidance?
          </h2>
          <p className="text-muted-foreground mb-8 text-sm">
            Book a free strategy session. We'll walk you through your results and
            build a simple action plan together — no pressure, no jargon.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/book">
                Schedule a Free Session <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/solutions">Learn What We Do</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
