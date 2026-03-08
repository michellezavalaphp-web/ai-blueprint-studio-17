import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ToolCard from "@/components/ToolCard";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Gauge,
  Clock,
  ScanSearch,
  FileText,
  PenTool,
  Zap,
  TrendingUp,
  Bot,
  ArrowRight,
  Star,
  Users,
  Quote,
} from "lucide-react";

const tools = [
  {
    icon: Gauge,
    title: "AI Readiness Assessment",
    description: "Find out how prepared your organization is to adopt AI and automation.",
    benefit: "Identify your biggest AI opportunities in minutes",
  },
  {
    icon: Clock,
    title: "Time Reclaimed Calculator",
    description: "See exactly how many hours AI can save your team each week.",
    benefit: "Quantify your ROI before you invest",
  },
  {
    icon: ScanSearch,
    title: "AI Automation Opportunity Scanner",
    description: "Scan your workflows to uncover hidden automation potential.",
    benefit: "Discover bottlenecks you didn't know existed",
  },
  {
    icon: FileText,
    title: "AI Implementation Blueprint",
    description: "Get a customized roadmap for implementing AI in your organization.",
    benefit: "A clear, actionable plan tailored to you",
  },
  {
    icon: PenTool,
    title: "AI Authority Content Engine",
    description: "Generate thought-leadership content powered by AI insights.",
    benefit: "Position yourself as an AI-forward leader",
  },
];

const stats = [
  { value: "40%", label: "Average time savings" },
  { value: "3x", label: "Productivity increase" },
  { value: "60%", label: "Reduction in manual tasks" },
  { value: "500+", label: "Organizations served" },
];

const testimonials = [
  {
    quote: "Go AI Innovation helped us automate 70% of our administrative workflows. We reclaimed over 30 hours per week across our team.",
    name: "Sarah Chen",
    role: "COO, Pacific Financial Group",
  },
  {
    quote: "The AI Strategy Session alone gave us a roadmap that would have taken months to develop internally. Highly recommend.",
    name: "James Rodriguez",
    role: "Director of Operations, Metro Health Services",
  },
  {
    quote: "Their AI implementation blueprint transformed how our nonprofit delivers services. We're doing more with less — and loving it.",
    name: "Amara Okafor",
    role: "Executive Director, Community Forward",
  },
];

const teamPlaceholders = [
  { name: "AI Strategy Lead", desc: "Driving organizational AI transformation" },
  { name: "Automation Architect", desc: "Designing intelligent workflow systems" },
  { name: "AI Solutions Consultant", desc: "Tailoring AI to industry needs" },
  { name: "Innovation Analyst", desc: "Identifying high-impact AI opportunities" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block text-xs uppercase tracking-widest text-primary font-semibold mb-4">
              Intelligent Systems for Modern Organizations
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Reclaim Time. Transform Operations.{" "}
              <span className="text-gradient">Lead the AI Era.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
              Organizations lose thousands of hours to outdated processes. Go AI Innovation
              helps you implement intelligent systems that increase productivity, reduce
              manual work, and unlock new growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <Link to="/tools">Discover Your AI Readiness</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/tools">Calculate Time Reclaimed</Link>
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

      {/* Stats */}
      <section className="relative -mt-10 z-20 container mx-auto px-4">
        <div className="glass rounded-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center glow-border">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why AI */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            tag="Why AI Matters"
            title="Modern Organizations Run on Intelligence"
            description="AI isn't just a buzzword — it's the operating system of the future. Organizations that adopt AI today will outpace their competition tomorrow."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Speed & Efficiency",
                desc: "Automate repetitive tasks so your team can focus on high-value work that drives revenue.",
              },
              {
                icon: TrendingUp,
                title: "Save Time & Money",
                desc: "AI systems run 24/7 without breaks, reducing labor costs while increasing output.",
              },
              {
                icon: Bot,
                title: "Real-World AI Systems",
                desc: "From AI-powered customer service to automated lead follow-up — organizations are already seeing results.",
              },
            ].map((item) => (
              <div key={item.title} className="glass rounded-lg p-6">
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Showcase */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto">
          <SectionHeading
            tag="Interactive Tools"
            title="AI Tools Built for Action"
            description="Don't just read about AI — experience it. Use our interactive tools to uncover exactly how AI can transform your organization."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((t) => (
              <ToolCard key={t.title} {...t} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="hero" size="lg" asChild>
              <Link to="/tools">
                Explore All AI Tools <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact & Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            tag="Results That Speak"
            title="Impact & Client Success"
            description="Organizations across industries are transforming their operations with Go AI Innovation."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass rounded-lg p-6 flex flex-col gap-4">
                <Quote className="h-8 w-8 text-primary/40" />
                <p className="text-sm text-muted-foreground flex-1 italic">"{t.quote}"</p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-primary" />
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

      {/* Innovation Team */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto">
          <SectionHeading
            tag="Our People"
            title="Our Innovation Team"
            description="Go AI Innovation is building a team of AI strategists, consultants, and intelligent systems designed to help organizations transform operations."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamPlaceholders.map((m) => (
              <div key={m.name} className="glass rounded-lg p-6 text-center">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{m.name}</h3>
                <p className="text-xs text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/founder">Meet Our Founder</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-muted-foreground mb-8">
            Book a free AI Strategy Session and discover how Go AI Innovation can help you reclaim your time.
          </p>
          <Button variant="hero" size="lg" className="animate-pulse-glow" asChild>
            <Link to="/book">
              Schedule My AI Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
